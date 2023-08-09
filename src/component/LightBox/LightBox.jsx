import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import OpenWithIcon from '@mui/icons-material/OpenWith';

const images = [
  "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/green-case-back.jpg",
  'https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/green-case-front.jpg',
  "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/green-case-side.jpg",
];

export default class LightBoxSwiper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <OpenWithIcon onClick={() => this.setState({ isOpen: true })} sx={{color:"#666",":hover":{color:"#777"},borderRadius:"50%",border:"1px solid #777777",p:"12px",width:"50px",height:"50px"}}/>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}