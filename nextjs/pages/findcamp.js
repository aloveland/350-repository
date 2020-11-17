import React from "react";
import ReactDOM from 'react-dom';
import {getCampInfo} from '../lib/utils.js';
var searchBar;




class App extends Component{
	
	state = {
		search : "";
	}

console.log("test");
const {search} = this.state;
console.log(search);
	
	return(
		<input type='text'
		placeholder='search'
		id='searchBar'
		onChange={this.onchange}
		/>
		
		
		onchange = e =>{
			this.setState({ search : e.target.value });
		}	


	)

}

