import {getNutritionInfo} from '../lib/utils.js';
import React from "react";

const Search = (props) => {
	
	return(
	<>
	 <label htmlFor="search">Search by name </label>
          <input type="text" value={props.inputValue} onChange={props.handleUpdate}/>
		
	handleUpdate = (event) => {
		this.setState({
			inputValue: event.target.value
		})
]
