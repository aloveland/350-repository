
import Layout from '../components/MyLayout.js'
import {getCampInfo} from '../lib/utils.js';
import React from "react";

    

  return (
    class Home extends React.Component {
        constructor(props) {
        super(props);
        this.state = { search: "" };
        }
        
        
        
       handleUpdate(evt) {
              this.setState({ search: evt.target.value });
            }
        
      async handleSearch(evt) {
          const site =  await getCampInfo(this.state.search);
          this.setState(site});
          }
    
    
    <div classname="container">
     <div style={{ margin: "auto atuo", width: "600px, textAlign: "center"}}
      <p>This is the search page</p>
        <input
            type = "text"
            value = {this.state.search} 
            onChange ={this.handleUpdate.bind(this)}
        />
    </div>
    <div className="button-style" onCLick={this.handleSearch.bind(this)}>Search</div>
  )

 export default function Camps;




