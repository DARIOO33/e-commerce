import './globals.css'
// import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import Dash from './components/Dash/Dash'
// const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
async function getProducts() {
  let res = await fetch("http://e-commerce-web-dario/api/products")
  return res.json()
}

export default async function RootLayout({ children }) {
  let products = await getProducts()
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="home relative top-4 -z-1">
          <Dash />
          <div className='content w-2/3  mt-24 pb-8'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
