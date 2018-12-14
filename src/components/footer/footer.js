import React from 'react'
import './footer.css'
import Facebook from './facebook.png'
import Instagram from './instagram.png'
import Twitter from './twitter.png'

console.log(Facebook)

const Footer = () => {
    return (
        <div id="footer">
            <div className="links">
                <a 
                href="https://www.facebook.com/BrittanyMcQuinn/?epa=SEARCH_BOX&jazoest=265100121975011957685684986995861021111128168708410148113117721019012172867710790103108121851101131144883110104815865100119116106118105525210273791225511648735711680867095805010410180571085179999974551101171091071101055112077119" 
                target="_blank" 
                rel="noopener noreferrer">
                    <img id="fb" src={Facebook} alt="link to facebook"/>
                </a>
            </div>
            <div className="links">
                <a 
                href="https://www.instagram.com/brittanymcquinn/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer">
                    <img src={Instagram} alt="link to instagram"/>
                </a>
            </div>
            <div className="links">
                <a 
                href="https://twitter.com/brittanymcquinn" 
                target="_blank" rel="noopener noreferrer">
                    <img src={Twitter} alt="link to twitter"/>
                </a>
            </div>
            <div className="links" id="buyDiv">
                <a 
                href="https://fanlink.to/BrittanyMcQuinn" 
                target="_blank" rel="noopener noreferrer"
                id="buy">
                    <p>stream/ buy</p>
                </a>
            </div>
        </div>
    )
}

export default Footer