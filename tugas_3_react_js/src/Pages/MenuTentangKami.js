import React, {Component} from 'react';

class MenuTentangKami extends Component{
    constructor(props){
    super(props);
    this.state = {
      tentang : <p>Warung Nusantara Adalah Restoran Yang Bernuansa Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Nusantara</p>,
    };
  }
  render(){
    return(
      <div>
        <center>
          <p>Tentang Kami</p>
          {this.state.tentang}
        </center>
      </div>
    );
  }
}

export default MenuTentangKami;
