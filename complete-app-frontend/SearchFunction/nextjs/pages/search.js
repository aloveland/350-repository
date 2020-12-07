import {getCampInfo} from '../lib/utils.js';
import Layout from '../components/MyLayout.js'
import React from "react";

var holdResults = [];
var globalString = "";
let answer = {};
var z = 0;
	  for( z = 0; z < 25; z++){
		  answer = {};
		  answer.desc = answer.desc + "";
		  answer.kcal = answer.desc + "";
		  answer.protein = answer.desc + "";
		  answer.carbs = answer.desc + "";
	          answer.fat = answer.desc + "";
		  holdResults.push(answer);
	  }
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }	
async handleSearch(evt) {
   console.log("being queried");
    const campInfo = await getCampInfo(this.state.search);
     if(campInfo == null){
	globalString = this.state.search + " campground not found";    
      }
	else{
		globalString = "";
	}
    console.log(campInfo);
     this.setState({campInfo});
      console.log("here");
      console.log(this.state.search + "test");
 

  }
	
    async printThing(){
	  console.log("would fetch");
    }
	
  
  async handleUpdate(evt){
	console.log(this.state.search);
	 console.log("35");
	console.log("no"); 
  	//setTimeout(this.handleSearch.bind(this.state.search), 10000);
	//setTimeout(this.handleSearch.bind(this.state.search), 10000);
  		

	this.handleSearch.bind(this.state.search);
	this.setState({search: evt.target.value});
	  const campInfo = await getCampInfo(this.state.search);
	  this.setState({campInfo});
	  if(campInfo != null){
	  	console.log(this.state.campInfo.desc);
	  }
	    var obj1 = {};
	    obj1 = campInfo;
	    console.log("777");
	    console.log(obj1.result[1]);
	  
	    var x = 0;
	    console.log("this is valuable information");
	    console.log(holdResults[]);
	  if(campInfo != null){
	  	var lenx = this.state.campInfo.result.length;
	  }
	  
	  var x = 0;
	  for(x = 0; x < lenx ; x++){
		  answer = {};
		  answer.desc = this.state.campInfo.result[x].desc;
		  answer.kcal = this.state.campInfo.result[x].kcal;
		  answer.protein = this.state.campInfo.result[x].protein;
		  answer.carbs = this.state.campInfo.result[x].carbs;
	          answer.fat = this.state.campInfo.result[x].fat;
		  holdResults.push(answer);
	  }
	  var y = 0;
	  for(y = lenx + 1; y < 25; y++){
		answer = {};
		 answer.desc = "";
		 answer.kcal = "";
		 answer.protein = "";
	         answer.carbs = "";
	         answer.fat = "";
	  }

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
        <h1>Food Search</h1>
      
        <p>
          <input
            className="input-style"
            type="text"
            value={this.state.search}
            onChange={this.handleUpdate.bind(this)}
          />
        </p>
		
        
        </div>
	<div>
	{this.state.campInfo ?
	 
	
	<div>
		<br />
			<h2><table>
			  <thead>
			    <tr>
			      <th>Description</th>
			      <th>kcal</th>
			      <th>Protein(g)</th>
	 		      <th>Fat(g)</th>
	 		      <th>Carbs(g)</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>{holdResults[0].desc}</td>
			      <td>{holdResults[0].kcal}</td>
			      <td>{holdResults[0].protein}</td>
	 		      <td>{holdResults[0].carbs}</td>
	 		      <td>{holdResults[0].fat}</td>
			    </tr>
			    <tr>
			      <td>Sue</td>
			      <td>00002</td>
			      <td>Red</td>
			    </tr>
			    <tr>
			      <td>Barb</td>
			      <td>00003</td>
			      <td>Green</td>
			    </tr>
			  </tbody>
			</table></h2>
	 
          </div> : <h2>{globalString}</h2>}
	



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
	  table {
	  border-collapse: collapse;
	}

	td, th {
	  border: 1px solid #999;
	  padding: 0.5rem;
	  text-align: left;
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
