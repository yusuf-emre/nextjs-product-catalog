import styles from "../../styles/Home.module.css"
import Image from "next/image";
import { useRouter } from "next/router";

const Product = ({ product }) => {
    const router = useRouter();
    const { id } = router.query;

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

const getAllProducts = async () => {
    return await fetch('https://fakestoreapi.com/products')
        .then(res => res.json());
}

export async function getStaticPaths() {
    const products = await getAllProducts();

    const paths = products.map((product) => ({
        params: { id: `${product.id}` },
    }))
    return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
    const products = await getAllProducts();

    const getProductById = (id) => products.find(obj => obj.id == id)

    const product = await getProductById(params.id)
    return { props: { product } }
}