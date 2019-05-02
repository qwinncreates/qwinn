import React from 'react'
import './imageLoader.css'
import pic from './brittany.jpg'
import pic_l from './brittany_light.jpg'
import pic_m from './brittany_mobile.jpg'
import pic_ml from './brittany_mobile_light.jpg'

class ImageLoader extends React.Component {
  state={
    // loadFirst: false,
    src: ''
  }

  componentWillMount(){
    let isMobile
    if (typeof window === 'undefined') {
      isMobile = false
    } else {
      isMobile = window.matchMedia('(max-width: 900px)').matches
    }
    let jpg = pic
    let jpg_l = pic_l
    if (isMobile) {
      jpg = pic_m
      jpg_l = pic_ml
    }

    this.setState({src: jpg_l})

    let img
    if (typeof Image === 'undefined') {
      img = {}
    } else {
      img = new Image()
    }
    img.src = jpg
    // img.onload = () => {this.setState({loadFirst: true, src: jpg})}
    img.onload = () => {this.setState({src: jpg})}
  }
  
  render(){
    // src = this.state.loadFirst ? jpg : jpg_l
    const src = this.state.src
    return (
          <div 
            className="background"
            style={{background: `center / cover no-repeat url(${src})`}}>
          </div>
    )
  }
}

export default ImageLoader