import Head from 'next/head'
import {Fragment} from 'react'

import '../public/css/globals.css'

export default function MyApp({Component, pageProps}){
    return (
        <Fragment>
            <Head>
                <title>Codehub Technological Institute</title>
            </Head>
            <Component {...pageProps} />
        </Fragment>
    )
}
