// "use client"
import { Suspense } from "react"
import Link from "next/link"
async function getCategories() {
    let res = await fetch("http://localhost:3000/api/categories")
    return res.json()
}
export default async function Nav() {

    // const [menu, setMenu] = useState([])
    let menu = await getCategories()

    return (
        <>
            <ul className="flex align-center justify-between w-1/3 m-auto py-2">
                {menu.map((menuitem) => (
                    <Suspense key={menuitem.id} fallback={<p>Loading...</p>}>

                        <li className="font-semibold cursor-pointer " key={menuitem?.id}>
                            <Link href={'/category/' + menuitem.name}>
                                {menuitem.name}
                            </Link>
                        </li>
                    </Suspense>

                ))}
            </ul>
        </>
    )
};
