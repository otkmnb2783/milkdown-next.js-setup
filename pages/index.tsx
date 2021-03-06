import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const MilkdownEditor = dynamic(
  () => import('../components/milkdown/MilkdownEditor'),
  {
    loading: () => <div>loading</div>,
    ssr: false,
  }
)

const Home: NextPage = () => {
  const content = "# Milkdown :heartpulse: React"
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <MilkdownEditor content={content} />
    </div>
  )
}

export default Home
