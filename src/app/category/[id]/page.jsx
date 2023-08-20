export default function page(params) {
    const categories = ["electronics", "sport", "decor", "fashion"]
    const selectedCategorie = params.params.id
    console.log(selectedCategorie);
    if (categories.includes(selectedCategorie)) {
        console.log("available");
    }
    else {
        return (
            <>
                <h1 className="text-center text-3xl font-extrabold mt-24">Invalid Page</h1>
            </>
        )
    }
    // console.log({ params });

    return (

        <h1>{params.params.id}</h1>


    )
};
