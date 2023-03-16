import Link from "next/link"

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Index</h1>
                    <Link href="/about">About</Link>
                </div>
            </div>
        </div>
    )
}
