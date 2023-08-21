import Card from "./card"
async function getProducts() {
    const res = await fetch('http://localhost:3000/api/products')
    return res.json()
}
export default async function Page() {

    const products = await getProducts()


    return (
        <>

            <ul>
                {products.map((product) => (

                    <Card key={product.id} data={product} />

                ))}
            </ul>

        </>
    )
};
