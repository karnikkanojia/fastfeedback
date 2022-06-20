import React, { useState, useEffect, useContext, createContext } from 'react';
import cookie from 'js-cookie';

import firebase from './firebase';
import { createUser } from './db';
import Router from 'next/router';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken);
      setUser(user);

      cookie.set('fast-feedback-auth', true, {
        expires: 1,
      });

      setLoading(false);
      return user;
    } else {
      setUser(false);
      cookie.remove('fast-feedback-auth');

      setLoading(false);
      return false;
    }
  };

  const signInWithGithub = (redirect) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  const signOut = () => {
    Router.push('/');

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    user,
    loading,
    signInWithGithub,
    signOut,
  };
}

const formatUser = async (user) => {
  const token = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token,
  };
};
