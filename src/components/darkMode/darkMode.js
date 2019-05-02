import React, { Component } from 'react'
import './darkMode.css'

class DarkMode extends Component {
    state = {
        title: ""
    }

    componentDidMount(){
        if (typeof window === 'undefined') {
            var title = "toggle-btn"
            this.setState({ title })
        } else {
            var dark = window.localStorage.getItem('dark')
            if(dark===null||undefined){
                title = "toggle-btn"
                this.setState({ title })
            }else{
            const values = Object.values(dark)
            title = values.join('')
            this.setState({ title })
            }
        }
    }

    onClickHandler = e => {
        if(e.target.id==="inner-circle"){
            if(this.state.title==="toggle-btn"){
                this.setState({title: "toggle-btn active"})
                if(window!==undefined){
                    window.localStorage.setItem('dark', 'toggle-btn active')
                }
            }else{
                this.setState({title: "toggle-btn"})
                if(window!==undefined){
                    window.localStorage.setItem('dark', 'toggle-btn')
                }
            }
        } else {
            if(this.state.title==="toggle-btn"){
                this.setState({title: "toggle-btn active"})
                if(window!==undefined){
                    window.localStorage.setItem('dark', 'toggle-btn active')
                }
            }else{
                this.setState({title: "toggle-btn"})
                if(window!==undefined){
                    window.localStorage.setItem('dark', 'toggle-btn')
                }
            } 
        }
        const mode = document.querySelector("html")
        mode.classList.toggle("light")
        mode.classList.toggle("dark")
    }

    render() {
        return (
            <div id="dark">
                <div className="darkMode mobile hideThis">dark mode
                    <div className={this.state.title} id="toggle-btn" onClick={this.onClickHandler}>
                        <div className="inner-circle" id="inner-circle"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DarkMode