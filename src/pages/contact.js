import React from 'react'
import '../components/css_pages/contact.css'
import Layout from '../components/layout'

const Contact = () => {
    return (
        <div className="App">
            <Layout />
            <div id="contactInfo">
                <div>
                    <p><a href="mailto:contact@brittanymcquinn.com" target="_top">contact@brittanymcquinn.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact