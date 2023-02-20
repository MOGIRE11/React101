import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <header />
      <h1>Welcome !</h1>  
    </main>
  )
}
