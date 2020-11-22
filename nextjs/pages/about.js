import {getCampInfo} from '../lib/utils.js';
import Layout from '../components/MyLayout.js'
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }
	
let videos = ['Apache', 'https://www.youtube.com/watch?v=FttsMtXyqo4&ab_channel=TripleJ%E2%80%99sTravels'];
	
async handleSearch(evt) {
   console.log("here");
    const campInfo = await getCampInfo(this.state.search);
    console.log(campInfo);
     this.setState({campInfo});
     //this.setState({search: evt.target.value});
     //onClick={this.handleSearch.bind(this);
    // add the information to the state
  }
  
  async handleUpdate(evt){
	this.setState({search: evt.target.value});
 	 }
  render() {
    return (
       <Layout>
      <div
	  style={{
          margin: "auto auto",
          width: "1600x",
          textAlign: "center",
	  borderStyle: "groove",
	  borderColor: "#166d17",
        }}
      >	
        <h1>New Mexico Campground Search</h1>
        <img src= "/static/newmexico.jpg" className ="App-logo" />
      
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

	{this.state.campInfo ?
          <div>
		<br />
  		<h2>{this.state.campInfo.name}</h2>
	 	<h3>{this.state.campInfo.closest_town} <br/>{this.state.campInfo.description}</h3>
	 	<iframe width="400" height="300"
   		 src="https://www.youtube.com/embed/a3ICNMQW7Ok?controls=0">
		</iframe>
          </div> : null}

        

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
            height: 400px;
          }
        `}</style>
      </div>
    </Layout>
    );
  }
}

export default Home;
