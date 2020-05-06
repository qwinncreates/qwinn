import React from 'react'
import './imageLoader.css'
import pic from './qwinn-profile.png'
import pic_l from './qwinn-profile.png'
import pic_m from './qwinn-profile.png'
import pic_ml from './qwinn-profile.png' // TODO: Add different resolutions for this profile photo
import logo from '../logo.png'

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
            style={
              {
                background: `center / contain no-repeat url(${src})`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            }>
            <div
              className='artist-name-change-disclaimer'
              style={
                {
                  zIndex: '2',
                  backgroundColor: '#fff',
                  color: '#000',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
                  fontSize: '20px'
                }
              }
            >
              Brittany McQuinn is now
              <img
                src={logo}
                alt='qwinn'
                style={
                  {
                    borderRadius: '0.5rem',
                    width: '100px',
                    paddingLeft: '5px'
                  }
                }
              />
            </div>  
          </div>
    )
  }
}

export default ImageLoader