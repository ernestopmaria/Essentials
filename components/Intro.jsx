import React from 'react'
import Image from 'next/image'
import styles from '../styles/Intro.module.css'
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="red" top="-50vh" left="-50vh"/>
      <Circle backgroundColor="red"  right="-40vh" />
      
        <div className={styles.card}>
            <h1 className={styles.title}>
                <span className={styles.brand}>ESSENTIAL<br/> </span> 
                    Beauty , Cosmetic & Personal Care
            </h1>
                <p className={styles.desc}>
                Promover a aceitação e apreciação do cabelo natural,
                 crespo em especial
                </p>
                <button className={styles.button}>Explorar +</button>
        </div>
        
        
        <div className={styles.card}>
      
        <Image src="/img/main4.webp"
        width="100%"
        height="100%"
        layout='fill'
        objectFit='cover'
        display="mobile"
        className='ola'
      
        />
     
        </div>

      
    </div>
  )
}

export default Intro
