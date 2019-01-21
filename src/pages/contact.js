import React from 'react'
import '../components/css_pages/contact.css'
import Layout from '../components/layout'

const Contact = () => {
    return (
        <div className="App">
            <Layout />
            <div id="contactInfo">
                <div>
                    <p id="brittContact"><a href="mailto:contact@brittanymcquinn.com" target="_top">contact@brittanymcquinn.com</a></p>
                    <p id="publish">Publishing / Sync - Sound of Pop:</p>
                    <p><a href="https://www.soundofpop.com" target="_blank" rel="noopener noreferrer">www.soundofpop.com</a></p>
                    <p>Glenn McMullen - <a href="mailto:Glenn@soundofpop.com" target="_top">glenn@soundofpop.com</a></p>
                    <p>Tim Hardy - <a href="mailto:Tim@soundofpop.com" target="_top">tim@soundofpop.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact