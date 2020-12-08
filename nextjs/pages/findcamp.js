import {getFoodInfo} from '../lib/utils.js';
import Layout from '../components/MyLayout.js'
import React from "react";

var holdResults = [];
var globalString = "";
let answer = {};
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }	
async handleSearch(evt) {
   console.log("being queried");
 
    const foodInfo = await getFoodInfo(this.state.search);
     if(foodInfo.error == "query failed"){
	     console.log("its happening");
     }
	
     if(typeof foodInfo.result == undefined || foodInfo.error == "query failed"){
		  let temp = {};
		  for(r = 0; r < 25; r++){
			  foodInfo.result = [];
			  foodInfo.result.length = 25;
			  foodInfo.result[r] = temp;
			  foodInfo.result[r].desc = "";
		  }
     }
      if(typeof foodInfo.result == null && foodInfo.result.length != 25){
		  let temp = {};
		  var r = foodInfo.result.length;
		  for(r = foodInfo.result.length; r < 25; r++){
			  foodInfo.result[r] = temp;
			  foodInfo.result[r].desc = "";
		  }
	  }
    console.log(foodInfo);
     this.setState({foodInfo});
      console.log("here");
      console.log(this.state.search + "test");
	
   	 var x = 0;
	  for(x = 0; x < lenx ; x++){
		  answer = {};
		if(typeof this.state.foodInfo.result[x] == undefined){
			this.state.campinfo.result[x] = answer;
			this.state.foodInfo.result[x].desc = "x";	
			console.log(this.state.foodInfo[x].desc);
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
	  if(this.state.search == ""){ 
	    console.log("its happening JJ"); 
  	  }
	  
	  const foodInfo = await getFoodInfo(this.state.search);
	    if(foodInfo.error == "query failed"){
	     console.log("its happening");
     	}	
	    if(typeof foodInfo.result == undefined || foodInfo.error == "query failed"){
		  let temp = {};
		  for(r = 0; r < 25; r++){
			  foodInfo.result = [];
			  foodInfo.result.length = 25;
			  foodInfo.result[r] = temp;
			  foodInfo.result[r].desc = "";
		  }
    	 }
	  if(foodInfo.result != null && foodInfo.result.length != 25){
		  let temp = {};
		  var r = foodInfo.result.length;
		  for(r = foodInfo.result.length; r < 25; r++){
			  foodInfo.result[r] = temp;
			  foodInfo.result[r].desc = "";
		  }
	  }
	  
	  this.setState({foodInfo});
	  if(foodInfo != null){
	  	console.log(this.state.foodInfo.desc);
	  }
	    var obj1 = {};
	    obj1 = foodInfo;
	    console.log("777");
	    console.log(obj1.result[1]);
	     console.log(this.state.foodInfo.result.length);
	  
	    var x = 0;
	    console.log("this is valuable information");
	    console.log(holdResults[0]);
	  if(foodInfo != null){
	  	var lenx = this.state.foodInfo.result.length;
	  }
	  
	  var x = 0;
	  for(x = 0; x < lenx ; x++){
		  answer  = {};
		if(typeof this.state.foodInfo.result[x] == undefined){
			this.state.campinfo.result[x] = answer;
			this.state.foodInfo.result[x].desc = "x";
			console.log(this.state.foodInfo[x].desc);
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
        }}
      >	
	<img src= "/static/6-Diseases-That-Proper-Nutrition-Prevents_379_40044310_0_14113110_728.jpg" className ="App-logo" />
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
	{this.state.foodInfo ?
	 
	
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
			      <td>{this.state.foodInfo.result[0].desc}</td>
			      <td>{this.state.foodInfo.result[0].kcal}</td>
			      <td>{this.state.foodInfo.result[0].protein}</td>
	 		      <td>{this.state.foodInfo.result[0].carbs}</td>
	 		      <td>{this.state.foodInfo.result[0].fat}</td>
			    </tr>
			    <tr>
			       <td>{this.state.foodInfo.result[1].desc}</td>
			      <td>{this.state.foodInfo.result[1].kcal}</td>
			      <td>{this.state.foodInfo.result[1].protein}</td>
	 		      <td>{this.state.foodInfo.result[1].carbs}</td>
	 		      <td>{this.state.foodInfo.result[1].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[2].desc}</td>
			      <td>{this.state.foodInfo.result[2].kcal}</td>
			      <td>{this.state.foodInfo.result[2].protein}</td>
	 		      <td>{this.state.foodInfo.result[2].carbs}</td>
	 		      <td>{this.state.foodInfo.result[2].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[3].desc}</td>
			      <td>{this.state.foodInfo.result[3].kcal}</td>
			      <td>{this.state.foodInfo.result[3].protein}</td>
	 		      <td>{this.state.foodInfo.result[3].carbs}</td>
	 		      <td>{this.state.foodInfo.result[3].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[4].desc}</td>
			      <td>{this.state.foodInfo.result[4].kcal}</td>
			      <td>{this.state.foodInfo.result[4].protein}</td>
	 		      <td>{this.state.foodInfo.result[4].carbs}</td>
	 		      <td>{this.state.foodInfo.result[4].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[5].desc}</td>
			      <td>{this.state.foodInfo.result[5].kcal}</td>
			      <td>{this.state.foodInfo.result[5].protein}</td>
	 		      <td>{this.state.foodInfo.result[5].carbs}</td>
	 		      <td>{this.state.foodInfo.result[5].fat}</td>
			    </tr>
			    <tr>
			       <td>{this.state.foodInfo.result[6].desc}</td>
			      <td>{this.state.foodInfo.result[6].kcal}</td>
			      <td>{this.state.foodInfo.result[6].protein}</td>
	 		      <td>{this.state.foodInfo.result[6].carbs}</td>
	 		      <td>{this.state.foodInfo.result[6].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[7].desc}</td>
			      <td>{this.state.foodInfo.result[7].kcal}</td>
			      <td>{this.state.foodInfo.result[7].protein}</td>
	 		      <td>{this.state.foodInfo.result[7].carbs}</td>
	 		      <td>{this.state.foodInfo.result[7].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[8].desc}</td>
			      <td>{this.state.foodInfo.result[8].kcal}</td>
			      <td>{this.state.foodInfo.result[8].protein}</td>
	 		      <td>{this.state.foodInfo.result[8].carbs}</td>
	 		      <td>{this.state.foodInfo.result[8].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[9].desc}</td>
			      <td>{this.state.foodInfo.result[9].kcal}</td>
			      <td>{this.state.foodInfo.result[9].protein}</td>
	 		      <td>{this.state.foodInfo.result[9].carbs}</td>
	 		      <td>{this.state.foodInfo.result[9].fat}</td>
			    </tr>
                              <tr>
			      <td>{this.state.foodInfo.result[10].desc}</td>
			      <td>{this.state.foodInfo.result[10].kcal}</td>
			      <td>{this.state.foodInfo.result[10].protein}</td>
	 		      <td>{this.state.foodInfo.result[10].carbs}</td>
	 		      <td>{this.state.foodInfo.result[10].fat}</td>
			    </tr>
			    <tr>
			       <td>{this.state.foodInfo.result[11].desc}</td>
			      <td>{this.state.foodInfo.result[11].kcal}</td>
			      <td>{this.state.foodInfo.result[11].protein}</td>
	 		      <td>{this.state.foodInfo.result[11].carbs}</td>
	 		      <td>{this.state.foodInfo.result[11].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[12].desc}</td>
			      <td>{this.state.foodInfo.result[12].kcal}</td>
			      <td>{this.state.foodInfo.result[12].protein}</td>
	 		      <td>{this.state.foodInfo.result[12].carbs}</td>
	 		      <td>{this.state.foodInfo.result[12].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[13].desc}</td>
			      <td>{this.state.foodInfo.result[13].kcal}</td>
			      <td>{this.state.foodInfo.result[13].protein}</td>
	 		      <td>{this.state.foodInfo.result[13].carbs}</td>
	 		      <td>{this.state.foodInfo.result[13].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[14].desc}</td>
			      <td>{this.state.foodInfo.result[14].kcal}</td>
			      <td>{this.state.foodInfo.result[14].protein}</td>
	 		      <td>{this.state.foodInfo.result[14].carbs}</td>
	 		      <td>{this.state.foodInfo.result[14].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[15].desc}</td>
			      <td>{this.state.foodInfo.result[15].kcal}</td>
			      <td>{this.state.foodInfo.result[15].protein}</td>
	 		      <td>{this.state.foodInfo.result[15].carbs}</td>
	 		      <td>{this.state.foodInfo.result[15].fat}</td>
			    </tr>
			    <tr>
			       <td>{this.state.foodInfo.result[16].desc}</td>
			      <td>{this.state.foodInfo.result[16].kcal}</td>
			      <td>{this.state.foodInfo.result[16].protein}</td>
	 		      <td>{this.state.foodInfo.result[16].carbs}</td>
	 		      <td>{this.state.foodInfo.result[16].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[17].desc}</td>
			      <td>{this.state.foodInfo.result[17].kcal}</td>
			      <td>{this.state.foodInfo.result[17].protein}</td>
	 		      <td>{this.state.foodInfo.result[17].carbs}</td>
	 		      <td>{this.state.foodInfo.result[17].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[18].desc}</td>
			      <td>{this.state.foodInfo.result[18].kcal}</td>
			      <td>{this.state.foodInfo.result[18].protein}</td>
	 		      <td>{this.state.foodInfo.result[18].carbs}</td>
	 		      <td>{this.state.foodInfo.result[18].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[19].desc}</td>
			      <td>{this.state.foodInfo.result[19].kcal}</td>
			      <td>{this.state.foodInfo.result[19].protein}</td>
	 		      <td>{this.state.foodInfo.result[19].carbs}</td>
	 		      <td>{this.state.foodInfo.result[19].fat}</td>
			    </tr>
			       <tr>
			       <td>{this.state.foodInfo.result[20].desc}</td>
			      <td>{this.state.foodInfo.result[20].kcal}</td>
			      <td>{this.state.foodInfo.result[20].protein}</td>
	 		      <td>{this.state.foodInfo.result[20].carbs}</td>
	 		      <td>{this.state.foodInfo.result[20].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[21].desc}</td>
			      <td>{this.state.foodInfo.result[21].kcal}</td>
			      <td>{this.state.foodInfo.result[21].protein}</td>
	 		      <td>{this.state.foodInfo.result[21].carbs}</td>
	 		      <td>{this.state.foodInfo.result[21].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[22].desc}</td>
			      <td>{this.state.foodInfo.result[22].kcal}</td>
			      <td>{this.state.foodInfo.result[22].protein}</td>
	 		      <td>{this.state.foodInfo.result[22].carbs}</td>
	 		      <td>{this.state.foodInfo.result[22].fat}</td>
			    </tr>
			    <tr>
			      <td>{this.state.foodInfo.result[23].desc}</td>
			      <td>{this.state.foodInfo.result[23].kcal}</td>
			      <td>{this.state.foodInfo.result[23].protein}</td>
	 		      <td>{this.state.foodInfo.result[23].carbs}</td>
	 		      <td>{this.state.foodInfo.result[23].fat}</td>
			    </tr>
			     <tr>
			      <td>{this.state.foodInfo.result[24].desc}</td>
			      <td>{this.state.foodInfo.result[24].kcal}</td>
			      <td>{this.state.foodInfo.result[24].protein}</td>
	 		      <td>{this.state.foodInfo.result[24].carbs}</td>
	 		      <td>{this.state.foodInfo.result[24].fat}</td>
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
          margin: auto auto;
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
            height: 600px;
          }
        `}</style>
      </div>
    </Layout>
    );
  }
}

export default Home;
