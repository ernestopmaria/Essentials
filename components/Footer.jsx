import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer =()=>{
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>ESSENTIAL</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passHref>
          <span className={styles.linkText}>VENHA NOS CONHECER</span>
          <Image src="/img/link.png" width="40px" height="40px" alt=""/>
          </a>      
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          RUA DO KIKAGIL - MORRO BENTO <br />
           Luanda - ANGOLA
        </div>
        <div className={styles.cardItem}>
        Ivanilde_hilaria@hotmail.co.uk <br />
          (+244) 924 046 900 - 939 620 501
        </div>
      </div>
      <div className={styles.carS}>
      <div className={styles.cardItem}>
          SIGA-NOS<br />
           __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
        © 2022 ESSENTIALS Beauty <br/>Cosmetic & Personal Care <br />
          Todos direitos reservados
        </div>
      </div>

    </div>
  )
}
export default  Footer 
