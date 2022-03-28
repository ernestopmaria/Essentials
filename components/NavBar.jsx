import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from "next/link"
 

const  NavBar =()=> {
  return (
    <div className={styles.container}>
      <Link href="/" >Essentials</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
        <Link href="/products/products">PRODUCTOS</Link>
        </li>
        <li className={styles.listItem}>
        <Link href="/serv/serv">SERVIÇOS</Link>
        </li>
        <li className={styles.listItem}>
        <Link href="/products/photos">FOTOS</Link>
        </li>
        <li className={styles.listItem}>
        <Link href="/products/blog">DICAS | BLOG</Link>
        </li>
        <li className={styles.listItem}>
        <Link href="/contact">CONTACTOS</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
