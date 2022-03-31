import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from "next/link"
import { useState } from 'react'
 

const  NavBar =()=> {
  const [open , setOpen] = useState(false)


  
  return (
    <div className={styles.container} > 
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
      <div className={styles.hamburger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}/>
        <div className={styles.line}/>
        <div className={styles.line}/>
      </div>
      <ul
      onClick={()=>setOpen(false)}
      className={styles.menu}
      
      style={{right:open ? "0px": "-50vw"}}>
      <li className={styles.menuItem}>
        <Link href="/products/products">PRODUCTOS</Link>
        </li>
        <li className={styles.menuItem}>
        <Link href="/serv/serv">SERVIÇOS</Link>
        </li>
        <li className={styles.menuItem}>
        <Link href="/products/photos">FOTOS</Link>
        </li>
        <li className={styles.menuItem}>
        <Link href="/products/blog">DICAS | BLOG</Link>
        </li>
        <li className={styles.menuItem}>
        <Link href="/contact">CONTACTOS</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
