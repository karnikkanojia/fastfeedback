import Head from 'next/head'
import Image from 'next/image'
import { useAuth } from '../lib/auth'
import styles from '../styles/Home.module.css'

export default function Home() {

  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <button onClick={(e) => auth.signInWithGithub()}>Sign In</button>
        <button onClick={(e) => auth.signOut()}>Sign Out</button>
        <p>{auth?.user?.email}</p>
      </main>


    </div>
  )
}
