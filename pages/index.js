import Link from 'next/link'

function home() {
    return (
        <div>
            <h1>
                Home Page
            </h1>
            <Link href="/sobre">
                <a>acessar pagina Sobre</a>
            </Link>
        </div>
    )
}

export default home