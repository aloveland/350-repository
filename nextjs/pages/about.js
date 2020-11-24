import {getCampInfo} from '../lib/utils.js';
import Layout from '../components/MyLayout.js'
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }
	
	
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
    let videos = [['Apache', ' https://www.youtube.com/watch?v=IBwIF3V-6gA&feature=emb_title&ab_channel=thedavidrushtravelshow'], 
		   ['Apache Creek', 'https://www.youtube.com/watch?v=FttsMtXyqo4&ab_channel=TripleJ%E2%80%99sTravels'], 
		  ['Armijo Springs', 'https://www.youtube.com/watch?v=5VOwUF5mkiw&ab_channel=TripleJ%E2%80%99sTravels'],
		   ['Baca', 'https://www.youtube.com/watch?v=jkeGMaDYFZE&ab_channel=FrugalRVGal'],
		    ['James Canyon', 'Not available'],
		    ['Oak Grove','https://www.youtube.com/watch?v=3TafiJEwLG8&feature=emb_title&ab_channel=MichaelNoker'],
		     ['Piñon','https://thedyrt.com/camping/new-mexico/new-mexico-pinon-campground/review/60360/media/425132?autoplay=true'],
		     ['Pueblo Park','not available'],
		      ['Railroad Canyon', 'not available'],
		  	['Three Rivers', 'https://www.youtube.com/watch?v=3pvKFblSpC8&ab_channel=TheDyrt'],
		  	
		     ];
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
        <h1>New Mexico Campground Vdieos/h1>
        <img src= "/static/newmexico.jpg" className ="App-logo" />
      
 
		
     

	
        

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
        }</style>
      </div>
    </Layout>
    );
  }
}

export default Home;
