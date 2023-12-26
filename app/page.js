import Image from 'next/image'
import styles from './page.module.css'
import Header from './header/page'
import Features from './features/page'
import Testimonials from './testimonials/page'
import { Changa } from 'next/font/google'
import React from 'react'


export default function Home() {

  return (
    <div className={styles.home}>
      <Header />
      <Features />
      <Testimonials />
    </div>
  )
}
