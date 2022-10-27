import React, { useState } from 'react'
import data from '../../data/data.json'
import Link from "next/link";
import styles from "../../styles/Home.module.css"
import Image from 'next/image';

const Products = () => {
    const [category, setCategory] = useState('all')

    const categoryArr = [...new Set(data.map(p => p.category))]
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
                {data.filter(prod => category == 'all'
                    ? prod
                    : prod.category == category)
                    .map(value => {
                        return (
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