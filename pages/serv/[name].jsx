import React from 'react'
import {serv} from '../../data'
import Image from 'next/image'
import styles from '../../styles/Product.module.css'
import Link from 'next/link'
import {FaWhatsapp} from 'react-icons/fa'
const Serv = ({service}) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
                <div className={styles.cardS}>
            <h1 className={styles.title}>Pacotes de Hidratação Capilar </h1>
            <p>{service.desc}</p>
            </div>
        <div className={styles.cardL}>
            {service.productsOil.map(p=>(
                    <div key={p.id} className={styles.productDetail}>                    
                       <Image src={`/img/${p.image}`}
                        className={styles.imageContainer}
                        width="100%" height="100%"  
                        layout='responsive'                  
                        objectFit='cover'
                        alt=''/> 
                        
                   
                        <span>{p.name}</span>
                        <span>{p.qty}</span>
                        <span>{p.price} AKZ</span>
                        <a href="https://api.whatsapp.com/send?phone= +244924046900" 
                        
                        className={styles.order}
                        >
                        <FaWhatsapp  />
                        Mais Informações</a>
                    </div>
                )
            )}

        </div>
        </div>

        <div className={styles.content}>
        <div className={styles.cardS}>
            <h1 className={styles.title}>Tratamento Facial</h1>
            <p>{service.desc}</p>
            </div>
        <div className={styles.cardL}>
            {service.productsButter.map(p=>(
                    <div key={p.id} className={styles.productDetail}>                    
                       <Image src={`/img/${p.image}`}
                       className={styles.imageContainer}
                        width="100%" height="100%"                    
                        objectFit='cover'
                        layout='responsive'
                        alt=''/> 
                        
                   
                        <span>{p.name}</span>
                        <span>{p.qty}</span>
                        <span>{p.price} AKZ</span>
                        <a href="https://api.whatsapp.com/send?phone= +244924046900" 
                        
                        className={styles.order}
                        >
                        <FaWhatsapp  />
                        Mais Informações</a>
                    </div>
                )
            )}

        </div>
        </div>
   
         
    <button className={styles.button}>
                <Link href="/contact">
                Contactos
                </Link>
            </button>
        </div>
       

  )
  
}

export const getStaticPaths = async ()=>{
    const services = serv
    const paths = services.map(item=>{
        return{
            params :{name:item.name}
        }
    })
    return{
        paths,        
            fallback:false        
    }
}

export const getStaticProps = async(ctx)=>{
    const name=ctx.params.name
    const service = serv.filter((item)=>item.name ===name)[0]

    return{
        props:{
            service
        }
    }
}

export default Serv
