import React from 'react'
import styles from '../styles/Contact.module.css'
import Circle from '../components/Circle'


const contact = () => {
  return (
    <div className={styles.container}>
        <Circle backgroundColor ="green" left ="-40vh" top="-20vh"/>
        <Circle backgroundColor ="yellow" right="-30vh" bottom="-60vh"/>
        <h1 className={styles.title}>Deixe uma mensagem</h1>
        <form className={styles.form}>
            <input className={styles.inputS} placeholder="Nome"/>
            <input className={styles.inputS} placeholder="Telefone"/>
            <input className={styles.inputL} placeholder="Email"/>
            <input className={styles.inputL} placeholder="Assunto"/>
            <textarea className={styles.textarea} placeholder="Mensagem" rows={6}/>
            <button className={styles.button}>Enviar</button>
        </form>
      
    </div>
  )
}

export default contact
