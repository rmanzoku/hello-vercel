import Link from 'next/link'
import AccountBotton from './accountBottun'

export default function Header() {
    return <header className="flex h-20 p-2">
        <img src="https://www.doublejump.tokyo/_nuxt/img/8774776.png" alt="logo" className="flex-1 object-contain object-left p-1" />
        <nav className="flex-1 flex justify-center">
            <div className="box-border p-4">
                <Link href="/" >
                    Home
                </Link>
            </div>
            <div className="box-border p-4">
                <Link href="/shop">
                    Shop
                </Link>
            </div>
        </nav>
        <div className="flex-1 flex"><div className="box-border p-4"><AccountBotton /></div></div>
    </header >
}