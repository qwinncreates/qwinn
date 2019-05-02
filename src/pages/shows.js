import React from 'react'
import '../components/css_pages/shows.css'
import Layout from '../components/layout'

const Shows = () => {
    return (
        <div className="App">
            <Layout />
            <div id="showsInfo">
                <div>
                    <p>with Bleum:</p>
                    <p className='indent'><a href='https://www.facebook.com/pg/bleummusic/events/?ref=page_internal' target="_blank" rel="noopener noreferrer">[click to view]</a></p>
                </div>
                <div>
                    <p>Solo:</p>
                    <p className='indent'>TBD</p>
                </div>
            </div>
        </div>
    )
}

export default Shows