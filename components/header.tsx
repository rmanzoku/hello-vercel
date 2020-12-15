import Link from 'next/link'
import AccountBotton from 'components/accountBottun'

export default function Header() {
    return <header className="bg-gray-300 flex justify-between items-center md:h-20 h-10 p-2">
        <div className="flex-1 h-full">
            <img src="https://www.doublejump.tokyo/_nuxt/img/8774776.png" alt="logo" className="h-full object-scale-down" />
        </div>
        <div className="flex-1">
            <nav className="flex justify-evenly">
                <div>
                    <Link href="/" >
                        Home
                    </Link>
                </div>
                <div>
                    <Link href="/shop">
                        Shop
                    </Link>
                </div>
            </nav>
        </div>
        <div className="flex-1">
            <nav className="flex justify-end">
                <AccountBotton />
            </nav>
        </div>
    </header >
}