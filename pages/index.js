import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  const gotoList = () => {
    router.push('/products')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Product catalog</title>
        <meta name="description" content="list of products" />
      </Head>

      <main className={styles.main}>
        <button type='button' className={styles.card} onClick={gotoList}>
          Go to my product list!
        </button>
      </main>
    </div>
  )
}
