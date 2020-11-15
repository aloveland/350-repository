
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
         {"campground" in this.state && this.state.camp == undefined ? (
          <p>{this.state.search} Camptround Not Found</p>
        ) : null}
        <style jsx>{`
          h1,
          h2,
          h3,
          h4,
          a,
          p {
            font-family: "Arial";
            color: #006600;
          }
          .button-style {
            margin: auto auto;
            cursor: pointer;
            background-color: #228b22;
            color: #ffffff;
            width: 100px;
            font-family: "Arial";
          }
          .text-style {
            margin: auto auto;
            width: 200px;
          }
          input {
            margin: auto auto;
            width: 200px;
          }
          .description {
            font-family: "Arial";
            font-size: "10px";
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 5px 0;
          }
          a {
            text-decoration: none;
            color: blue;
          }
          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
    );
  }
}

        
        
   handleOnInputChange = ( event ) => {
       const query = event.target.value;
       this.setState(state:{ query } );
   }
  const { query } = this.state;
  const query = this.state.query;
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



