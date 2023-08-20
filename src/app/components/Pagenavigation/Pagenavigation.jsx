"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Pagenavigation({ one, two, three }) {
    const pathname = usePathname()
    let link1;
    let link2;
    let link3;
    if (pathname.includes('page')) {
        link1 = one
        if (one == "0") {
            link1 = "/"
        }
        link2 = two
        link3 = three
    }
    else {
        link1 = 'page/' + one
        if (one == "0") {
            link1 = "/"
        }
        link2 = 'page/' + two
        link3 = 'page/' + three

    }
    const href1 = link1.toString()
    const href2 = link2.toString()
    const href3 = link3.toString()
    return (
        <div className='pages flex w-52 h-14  mt-8 m-auto items-center px-4 justify-between'>
            <div onClick={(e) => e.preventDefault} className='item text-4xl px-3 py-1 bg-gray-400 text-white rounded-xl'>
                <Link href={href1}>
                    {one}
                </Link>

            </div>
            <div onClick={(e) => e.preventDefault} className='item text-4xl px-3 py-1 bg-gray-400 text-white rounded-xl'>
                <Link href={href2}>
                    {two}

                </Link>
            </div>
            <div onClick={(e) => e.preventDefault} className='item text-4xl px-3 py-1 bg-gray-400 text-white rounded-xl'>
                <Link href={href3}>
                    {three}

                </Link>

            </div>
        </div>
    )
};
