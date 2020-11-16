
import {getCampInfo} from '../lib/utils.js';

    

  
    
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

 export default function Camps;




