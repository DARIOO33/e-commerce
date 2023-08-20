
import Link from 'next/link'
import Item from './items/Item.jsx'
export default function Categories(params) {
    return (
        <>
            <h1 className="text-center text-2xl font-bold mt-12">Category</h1>
            <ul className='mt-4'>
                <Item text="Electronics" />
                <Item text="Sport" />
                <Item text="Fashion" />
                <Item text="Decor" />


            </ul>
        </>
    )
};
