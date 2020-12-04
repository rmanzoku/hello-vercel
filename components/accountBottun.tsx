import Link from 'next/link'


export default function AccountBotton() {
    return (
        <div>
            <Link href="/account">
                {accountStatus()}
            </Link>
        </div>
    )
}

function accountStatus() {
    return "Unlock"
}