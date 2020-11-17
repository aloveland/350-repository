import React from "react";
import ReactDOM from 'react-dom';
import {getCampInfo} from '../lib/utils.js';
var searchBar;

if (typeof document !== 'undefined') {
  ReactDOM.render(searchBar, document.getElementById('searchBar'));
}

if(searchBar){
searchBar.addEventListener("keyup", e =>{
	const searchString = e.target.value;
	
});}

console.log(searchBar);
console.log("test");

 export default function SearchBox(props){
	
	return(
		<input type='text'
		placeholder='search'
		id='searchBar'
		/>


	)



 }

