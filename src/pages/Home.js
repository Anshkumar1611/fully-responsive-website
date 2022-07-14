import React from 'react'
import Hero from '../components/Herosection/Hero'
import '../App.css'
import Cards from '../components/CardItem/Cards'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Footer />
    </>
  )
}

export default Home