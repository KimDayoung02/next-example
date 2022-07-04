import Head from 'next/head'
//여기 head는 그냥 next/head고 document에서의 head는 document/head임
const AboutPage=()=>{
    return(
        <>
        <Head>
            <title>About Page</title>
            <meta property='og:title' content='About'></meta>
            <meta property='og:description' content='메타태그 실습중입니다.'></meta>
            
        </Head>
        <div>
            <h1>this is about page.</h1>
        </div>
        </>
    )
}
export default AboutPage;