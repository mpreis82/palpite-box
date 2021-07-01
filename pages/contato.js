import React from 'react'
import Link from 'next/link'
import PageTitle from "../components/PageTitle";

const Contato = () => {
    return (
        <div>
            <PageTitle title='Contato' />
            <h1>Contato</h1>
            <Link href="/">Home</Link>
        </div>
    )
}

export default Contato