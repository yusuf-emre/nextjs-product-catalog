import styles from "../../styles/Home.module.css"
import Image from "next/image";
import { useRouter } from "next/router";
import data from '../../data/data.json'

const Product = () => {
    const router = useRouter();
    const { id } = router.query;
    const product = data.find(obj => obj.id == id)

    return (
        <div className={styles.main}>
            <h1>{product.title}</h1>
            <Image src={product.image} width={200} height={200} />
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default Product