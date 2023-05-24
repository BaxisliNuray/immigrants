import React from 'react'
import Helmet from 'react-helmet'
import Cards from '../HomeSections/Cards'
import Collaboration from '../HomeSections/Collaboration'
import Features from '../HomeSections/Features'
import Hero from '../HomeSections/Hero'
import Treat from '../HomeSections/Treat'

function Home() {
    return (
        <div >
            <Helmet>
                <title>HOME</title>
            </Helmet>
            <Hero />
            <Cards />
            <Features />
            <Treat/>
            <Collaboration/>


        </div>
    )
}

export default Home