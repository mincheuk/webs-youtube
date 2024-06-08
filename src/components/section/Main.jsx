import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Header from './Header'
import Footer from './Footer'
import Search from './Search'

const Main = (props) => { // props -> App.js의 Main을 갖고 옴, 즉 속성전달
    return (
        <HelmetProvider>     {/*SEO 작업에 필요한 것*/}
            <Helmet
            titleTemplate="%s | Webs Youtube" 
                defaultTitle="Webs Youtube" 
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>
            <Header/>
            <main id='main' role='main'> 
                <Search />
                {props.children} {/* Main안의 것을 출력*/}
            </main>
            <Footer/>
        </HelmetProvider>
        
        
    )
}

export default Main