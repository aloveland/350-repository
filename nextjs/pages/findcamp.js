
import Layout from '../components/MyLayout.js'
import {getCampInfo} from '../lib/utils.js';
import React from "react";

export default function Camps() {
    class Home extends React.Component {
        constructor(props) {
        super(props);
        this.state = { search: "" };
        }
        
        
        
       handleUpdate(evt) {
              this.setState({ search: evt.target.value });
            }
        
      async handleSearch(evt) {
            const campground = await getInfo(this.state.search);
            console.log(campground);
            this.setState({ campground });
          };

  return (
   <Layout>
    <div classname="container">
      <p>This is the search page</p>
        <input
            type = "text"
            name = "query"
            value = {query}
            id = "search-input"
            placeholder= "search"
            onChange ={this.handleOnInputChange}
        />
    </div>
    </Layout>
  )
}



