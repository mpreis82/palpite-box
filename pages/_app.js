import React from 'react'
import '../css/styles.css'
import Layout from '../components/Layout'

const MyApp = ({ Component, pagePropos }) => {
    return (
        <div>
            <Layout>
                <Component {...pagePropos} />
            </Layout>
        </div>
    )
}

export default MyApp