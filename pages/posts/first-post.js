import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

const YourComponent = () => (
    <Image
        src="/images/monkeys.jpeg"
        height={100}
        width={120}
        //unoptimized={true}
    />
)

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Your title</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to HomePage</a>            
                </Link>
            </h2>
        </Layout>
    )
}