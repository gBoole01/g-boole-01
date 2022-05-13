import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => (
    <div className={styles.container}>
      <Head>
        <title>gBoole01</title>
        <meta name="description" content="gBoole01 Blog" />
        {/* TODO => Add favicon logo */}
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to gBoole01 Blog
        </h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )

export default Home
