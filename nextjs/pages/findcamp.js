import React from "react";
import {getCampInfo} from '../lib/utils.js';
const searchBar = document.getElementById('searchBar');



 export default function SearchBox(props){
	
	return(
		<input type='text'
		placeholder='search'
		id='searchBar'
		/>


	)



 }

