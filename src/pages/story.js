import React from 'react'
import '../components/css_pages/story.css'
import Layout from '../components/layout'

const Story = () => {
    return (
        <div className="App">
            <Layout />
            <div id="storyInfo">
                <p>
                    Brittany McQuinn is a singer/songwriter creating electronic music, 
                    bringing her pop sensibility to a wide range of electronic genres. 
                    She uses music for mental health advocacy and has partnered on 
                    many occasions to do this work alongside the Canadian Mental Health 
                    Association. In 2016 she won a Toronto Independent Music Award, 
                    and opened for k.d.lang & released an EP, Bold in 2017. 2018 brought 
                    recognition of this release when she received two Music New Brunswick 
                    Awards: Solo Recording of The Year and Pop Artist of The Year. She 
                    is part of a duo named Bleum. A believer in collaboration, she 
                    performs and writes with DJ/producers, at times under the alias 
                    lytbryt. Many of these tracks have been released on labels, including 
                    Armada Music.
                </p>
            </div>
        </div>
    )
}

export default Story