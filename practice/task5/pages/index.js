import {getParkInfo} from '../lib/utils.js';
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }
	
async handleSearch(evt) {
    const parkInfo = await getParkInfo(this.state.search);
    console.log(parkInfo);
     //this.setState({search: evt.target.value});
     //onClick={this.handleSearch.bind(this);
    // add the information to the state
  }
  
  async handleUpdate(evt){
	this.setState({search: evt.target.value});
 	 }

  render() {
    return (
      <div
        style={{
          margin: "auto auto",
          width: "800px",
          textAlign: "center",
          background: "#daf6db",
          borderStyle: "groove",
        }}
      >
        <h1>National Park Search</h1>
        <img src="/static/nationalPark1.jpg" className="App-logo" />
      
        <p>
          <input
            className="input-style"
            type="text"
            value={this.state.search}
            onChange={this.handleUpdate.bind(this)}	
          />
        </p>
		
        <div className="button-style" onClick={this.handleSearch.bind(this)}>
          Submit
        </div>

        

        <br />
        <style jsx>{`
          .button-style {
            margin: auto auto;
            margin-top: 35px;
            cursor: pointer;
            background-color: #166d17;
            color: #ffffff;
            width: 150px;
            height: 45px;
            font-family: "Arial";
            line-height: 1.9;
            font-size: 1.4rem;
          }

          .input-style {
            font-size: 1.4rem;
            line-height: 1.6;
          }

          h1 {
            font-size: 2.1rem;
            font-family: "Arial";
            color: #125213;
          }
          h2 {
            font-family: "Arial";
            font-size: 1.6rem;
          }

          h3 {
            font-family: "Arial";
            font-size: 1.4rem;
          }

          .App-logo {
            height: 500px;
          }
        `}</style>
      </div>

    );
	{this.state.parkInfo ?
          <div>
  		<h2>{this.state.Object.name}</h2>
	 	console.log(this.state.Object.name);
	 	<h3>just print this</h3>
          </div> : null}
  }
}

export default Home;
