import React from 'react'
import ProSlider from '../ProSlider'
import Navbar2 from '../Navbar2'
import PersonalSlider from '../PersonalSlider'
import Footer from '../Footer'
import DogeSlider from '../DogeSlider'


function Gallery() {
    return (
        <div>
            <Navbar2 />
            <ProSlider />
            <PersonalSlider />
            <DogeSlider />
            <Footer />
        </div>
    )
}

export default Gallery