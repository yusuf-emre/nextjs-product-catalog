/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Link from "next/link";
import styles from "../../styles/Home.module.css"
import Image from 'next/image';

const Products = ({product}) => {
    const [category, setCategory] = useState('all')

    const categoryArr = [...new Set(product.map(p => p.category))]
    categoryArr.unshift('all')

    const handleChange = (event) => setCategory(event.target.id)

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>
                Here is my product list!
            </h1>
            <div className={styles.button}>
                {categoryArr.map(category => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <button
                            id={category}
                            className={styles.card}
                            onClick={handleChange}>
                            {category.toUpperCase()}
                        </button>
                    )
                })}
            </div>
            <div className={styles.grid}>
                {product.filter(prod => category == 'all'
                    ? prod
                    : prod.category == category)
                    .map(value => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Link href={`/products/${value.id}`} >
                                <div className={styles.card}>
                                    <p>{value.title}</p>
                                    <Image src={value.image} width={500} height={500} />
                                    <p>Price: {value.price}</p>
                                    <p>Category: {value.category}</p>
                                </div>
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}

export default Products

export async function getServerSideProps(context) {
    const product = await fetch('https://fakestoreapi.com/products')
                        .then(res=>res.json());
    return {
        props: {
            product
        },
    }
}