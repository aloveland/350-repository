import {getCampInfo} from '../lib/utils.js';
import Layout from '../components/MyLayout.js'
import React from "react";

var holdResults = [];
var globalString = "";
let answer = {};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    if(this.state.search == ""){
	console.log("its happening JJ");
	
}  
	  
  }	
async handleSearch(evt) {
   console.log("being queried");
 
    const campInfo = await getCampInfo(this.state.search);
     if(campInfo.error == "query failed"){
	     console.log("its happening");
     }
	
     if(typeof campInfo.result == undefined || campInfo.error == "query failed"){
		  let temp = {};
		  for(r = 0; r < 25; r++){
			  campInfo.result = [];
			  campInfo.result.length = 25;
			  campInfo.result[r] = temp;
			  campInfo.result[r].desc = "";
		  }
     }
      if(typeof campInfo.result == null && campInfo.result.length != 25){
		  let temp = {};
		  var r = campInfo.result.length;
		  for(r = campInfo.result.length; r < 25; r++){
			  campInfo.result[r] = temp;
			  campInfo.result[r].desc = "";
		  }
	  }
    console.log(campInfo);
     this.setState({campInfo});
      console.log("here");
      console.log(this.state.search + "test");
	
   	 var x = 0;
	  for(x = 0; x < lenx ; x++){
		  answer = {};
		if(typeof this.state.campInfo.result[x] == undefined){
			this.state.campinfo.result[x] = answer;
			this.state.campInfo.result[x].desc = "x";	
			console.log(this.state.campInfo[x].desc);
		}
	  }
 

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
	    if(campInfo.error == "query failed"){
	     console.log("its happening");
     	}	
	    if(typeof campInfo.result == undefined || campInfo.error == "query failed"){
		  let temp = {};
		  for(r = 0; r < 25; r++){
			  campInfo.result = [];
			  campInfo.result.length = 25;
			  campInfo.result[r] = temp;
			  campInfo.result[r].desc = "";
		  }
    	 }
	  if(campInfo.result != null && campInfo.result.length != 25){
		  let temp = {};
		  var r = campInfo.result.length;
		  for(r = campInfo.result.length; r < 25; r++){
			  campInfo.result[r] = temp;
			  campInfo.result[r].desc = "";
		  }
	  }
	  
	  this.setState({campInfo});
	  if(campInfo != null){
	  	console.log(this.state.campInfo.desc);
	  }
	    var obj1 = {};
	    obj1 = campInfo;
	    console.log("777");
	    console.log(obj1.result[1]);
	     console.log(this.state.campInfo.result.length);
	  
	    var x = 0;
	    console.log("this is valuable information");
	    console.log(holdResults[0]);
	  if(campInfo != null){
	  	var lenx = this.state.campInfo.result.length;
	  }
	  
	  var x = 0;
	  for(x = 0; x < lenx ; x++){
		  answer  = {};
		if(typeof this.state.campInfo.result[x] == undefined){
			this.state.campinfo.result[x] = answer;
			this.state.campInfo.result[x].desc = "x";
			console.log(this.state.campInfo[x].desc);
		}
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
			      <td>{this.state.campInfo.result[0].desc}</td>
			      <td>{this.state.campInfo.result[0].kcal}</td>
			      <td>{this.state.campInfo.result[0].protein}</td>
	 		      <td>{this.state.campInfo.result[0].carbs}</td>
	 		      <td>{this.state.campInfo.result[0].fat}</td>
			    </tr>
			    <tr>
			       <td>{this.state.campInfo.result[1].desc}</td>
			      <td>{this.state.campInfo.result[1].kcal}</td>
			      <td>{this.state.campInfo.result[1].protein}</td>
	 		      <td>{this.state.campInfo.result[1].carbs}</td>
	 		      <td>{this.state.campInfo.result[1].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[2].desc}</td>
			      <td>{this.state.campInfo.result[2].kcal}</td>
			      <td>{this.state.campInfo.result[2].protein}</td>
	 		      <td>{this.state.campInfo.result[2].carbs}</td>
	 		      <td>{this.state.campInfo.result[2].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[3].desc}</td>
			      <td>{this.state.campInfo.result[3].kcal}</td>
			      <td>{this.state.campInfo.result[3].protein}</td>
	 		      <td>{this.state.campInfo.result[3].carbs}</td>
	 		      <td>{this.state.campInfo.result[3].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[4].desc}</td>
			      <td>{this.state.campInfo.result[4].kcal}</td>
			      <td>{this.state.campInfo.result[4].protein}</td>
	 		      <td>{this.state.campInfo.result[4].carbs}</td>
	 		      <td>{this.state.campInfo.result[4].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[5].desc}</td>
			      <td>{this.state.campInfo.result[5].kcal}</td>
			      <td>{this.state.campInfo.result[5].protein}</td>
	 		      <td>{this.state.campInfo.result[5].carbs}</td>
	 		      <td>{this.state.campInfo.result[5].fat}</td>
			    </tr>
			    <tr>
			       <td>{this.state.campInfo.result[6].desc}</td>
			      <td>{this.state.campInfo.result[6].kcal}</td>
			      <td>{this.state.campInfo.result[6].protein}</td>
	 		      <td>{this.state.campInfo.result[6].carbs}</td>
	 		      <td>{this.state.campInfo.result[6].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[7].desc}</td>
			      <td>{this.state.campInfo.result[7].kcal}</td>
			      <td>{this.state.campInfo.result[7].protein}</td>
	 		      <td>{this.state.campInfo.result[7].carbs}</td>
	 		      <td>{this.state.campInfo.result[7].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[8].desc}</td>
			      <td>{this.state.campInfo.result[8].kcal}</td>
			      <td>{this.state.campInfo.result[8].protein}</td>
	 		      <td>{this.state.campInfo.result[8].carbs}</td>
	 		      <td>{this.state.campInfo.result[8].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[9].desc}</td>
			      <td>{this.state.campInfo.result[9].kcal}</td>
			      <td>{this.state.campInfo.result[9].protein}</td>
	 		      <td>{this.state.campInfo.result[9].carbs}</td>
	 		      <td>{this.state.campInfo.result[9].fat}</td>
			    </tr>
                              <tr>
			      <td>{this.state.campInfo.result[10].desc}</td>
			      <td>{this.state.campInfo.result[10].kcal}</td>
			      <td>{this.state.campInfo.result[10].protein}</td>
	 		      <td>{this.state.campInfo.result[10].carbs}</td>
	 		      <td>{this.state.campInfo.result[10].fat}</td>
			    </tr>
			    <tr>
			       <td>{this.state.campInfo.result[11].desc}</td>
			      <td>{this.state.campInfo.result[11].kcal}</td>
			      <td>{this.state.campInfo.result[11].protein}</td>
	 		      <td>{this.state.campInfo.result[11].carbs}</td>
	 		      <td>{this.state.campInfo.result[11].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[12].desc}</td>
			      <td>{this.state.campInfo.result[12].kcal}</td>
			      <td>{this.state.campInfo.result[12].protein}</td>
	 		      <td>{this.state.campInfo.result[12].carbs}</td>
	 		      <td>{this.state.campInfo.result[12].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[13].desc}</td>
			      <td>{this.state.campInfo.result[13].kcal}</td>
			      <td>{this.state.campInfo.result[13].protein}</td>
	 		      <td>{this.state.campInfo.result[13].carbs}</td>
	 		      <td>{this.state.campInfo.result[13].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[14].desc}</td>
			      <td>{this.state.campInfo.result[14].kcal}</td>
			      <td>{this.state.campInfo.result[14].protein}</td>
	 		      <td>{this.state.campInfo.result[14].carbs}</td>
	 		      <td>{this.state.campInfo.result[14].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[15].desc}</td>
			      <td>{this.state.campInfo.result[15].kcal}</td>
			      <td>{this.state.campInfo.result[15].protein}</td>
	 		      <td>{this.state.campInfo.result[15].carbs}</td>
	 		      <td>{this.state.campInfo.result[15].fat}</td>
			    </tr>
			    <tr>
			       <td>{this.state.campInfo.result[16].desc}</td>
			      <td>{this.state.campInfo.result[16].kcal}</td>
			      <td>{this.state.campInfo.result[16].protein}</td>
	 		      <td>{this.state.campInfo.result[16].carbs}</td>
	 		      <td>{this.state.campInfo.result[16].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[17].desc}</td>
			      <td>{this.state.campInfo.result[17].kcal}</td>
			      <td>{this.state.campInfo.result[17].protein}</td>
	 		      <td>{this.state.campInfo.result[17].carbs}</td>
	 		      <td>{this.state.campInfo.result[17].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[18].desc}</td>
			      <td>{this.state.campInfo.result[18].kcal}</td>
			      <td>{this.state.campInfo.result[18].protein}</td>
	 		      <td>{this.state.campInfo.result[18].carbs}</td>
	 		      <td>{this.state.campInfo.result[18].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[19].desc}</td>
			      <td>{this.state.campInfo.result[19].kcal}</td>
			      <td>{this.state.campInfo.result[19].protein}</td>
	 		      <td>{this.state.campInfo.result[19].carbs}</td>
	 		      <td>{this.state.campInfo.result[19].fat}</td>
			    </tr>
			       <tr>
			       <td>{this.state.campInfo.result[20].desc}</td>
			      <td>{this.state.campInfo.result[20].kcal}</td>
			      <td>{this.state.campInfo.result[20].protein}</td>
	 		      <td>{this.state.campInfo.result[20].carbs}</td>
	 		      <td>{this.state.campInfo.result[20].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[21].desc}</td>
			      <td>{this.state.campInfo.result[21].kcal}</td>
			      <td>{this.state.campInfo.result[21].protein}</td>
	 		      <td>{this.state.campInfo.result[21].carbs}</td>
	 		      <td>{this.state.campInfo.result[21].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[22].desc}</td>
			      <td>{this.state.campInfo.result[22].kcal}</td>
			      <td>{this.state.campInfo.result[22].protein}</td>
	 		      <td>{this.state.campInfo.result[22].carbs}</td>
	 		      <td>{this.state.campInfo.result[22].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.campInfo.result[23].desc}</td>
			      <td>{this.state.campInfo.result[23].kcal}</td>
			      <td>{this.state.campInfo.result[23].protein}</td>
	 		      <td>{this.state.campInfo.result[23].carbs}</td>
	 		      <td>{this.state.campInfo.result[23].fat}</td>
			    </tr>
			     <tr>
			      <td>{this.state.campInfo.result[24].desc}</td>
			      <td>{this.state.campInfo.result[24].kcal}</td>
			      <td>{this.state.campInfo.result[24].protein}</td>
	 		      <td>{this.state.campInfo.result[24].carbs}</td>
	 		      <td>{this.state.campInfo.result[24].fat}</td>
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

