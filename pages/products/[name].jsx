import React from 'react'
import {data} from '../../data'
import Image from 'next/image'
import styles from '../../styles/Product.module.css'
import Link from 'next/link'
import {FaWhatsapp} from 'react-icons/fa'
const Product = ({product}) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
                <div className={styles.cardS}>
            <h1 className={styles.title}>Óleos Essenciais </h1>
            <p>{product.desc}</p>
            </div>
            <span className={styles.productTitle}>Óleos disponíveis</span>
        <div className={styles.cardL}>
            {product.productsOil.map(p=>(
                    <div key={p.id} className={styles.productDetail}>                    
                       <Image src={`/img/${p.image}`}
                        className={styles.imageContainer}
                        width="90%" height="90%"  
                        layout='responsive'                  
                        objectFit='cover'/> 
                        
                   
                        <span>{p.name}</span>
                        <span>{p.qty}</span>
                        <span>{p.price} AKZ</span>
                        <a href="https://api.whatsapp.com/send?phone= +244924046900" 
                        
                        className={styles.order}
                        >
                        <FaWhatsapp className={styles.icon}  />
                        Encomendar</a>
                    </div>
                )
            )}

        </div>
        </div>

        <div className={styles.content}>
        <div className={styles.cardS}>
            <h1 className={styles.title}>Manteigas</h1>
            <p>{product.desc}</p>
            </div>
            <span className={styles.productTitle}>Manteigas disponíveis</span>
        <div className={styles.cardL}>
            {product.productsButter.map(p=>(
                    <div key={p.id} className={styles.productDetail}>                    
                       <Image src={`/img/${p.image}`}
                       className={styles.imageContainer}
                        width="90%" height="90%"                    
                        objectFit='cover'
                        layout='responsive'/> 
                        
                   
                        <span>{p.name}</span>
                        <span>{p.qty}</span>
                        <span>{p.price} AKZ</span>
                        <a href="https://api.whatsapp.com/send?phone= +244924046900" 
                        
                        className={styles.order}
                        >
                        <FaWhatsapp className={styles.icon}  />
                        Encomendar</a>
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
    const products = data
    const paths = products.map(item=>{
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
    const product = data.filter((item)=>item.name ===name)[0]

    return{
        props:{
            product
        }
    }
}

export default Product
