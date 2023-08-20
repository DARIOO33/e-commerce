export default function page(params) {
    console.log({ params });
    return (
        <h1>{params.params.id}</h1>
    )
};
