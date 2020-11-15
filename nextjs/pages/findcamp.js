
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
          }
          render() {
    const that = this;
    return (
      <Layout
        style={{ margin: "auto auto", width: "600px", textAlign: "center" }}
      >
        <h2>New Mexico Campground Search</h2>
        <input
          type="text"
          className="text-style"
          value={this.state.search}
          onChange={this.handleUpdate.bind(this)}
        />
        <br />
        <br />
        <div onClick={this.handleSearch.bind(that)} className="button-style">
          Submit
        </div>
        <br /> <br />
        {this.state.campground ? (
          <div>
            <br />
            <h3>{this.state.campground.name}</h3>
            <br />
            <img
              style={{ maxWidth: "700px", maxHeight: "500px" }}
              src={this.state.campground.image_url}
            />
            <br /> <h4>{this.state.campground.closest_town}</h4>
            <br />
            <div className="description">
              <p>{this.state.campground.description}</p>
              <br />{" "}
            </div>
          </div>
        ) : null}
  
  return (
   <Layout>
    <div classname="container">
      <p>This is the search page</p>
    </div>
    </Layout>
  )
}



