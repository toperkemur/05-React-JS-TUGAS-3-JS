import React, {Component} from 'react';

class MenuKontak extends Component{
  constructor(props){
    super(props);
    this.state = {
      alamat :  "Jl.Swadaya IV, Pd. Ranggon , Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota 13860",
      kontak : "081312345678"
    }
  }

  render(){
    return(
      <div>
        <center>
          <h3>{this.state.alamat}</h3>
          <p>Kontak Kami : {this.state.kontak}</p>
        </center>
      </div>
    )
  }
}
export default MenuKontak;
