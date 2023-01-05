import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
            <title>Relish Parlour</title>

                {/* <link async rel='stylesheet' href='https://bootswatch.com/5/quartz/bootstrap.min.css'></link> */}
                <link async rel='stylesheet' href='https://bootswatch.com/5/flatly/bootstrap.min.css'></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}