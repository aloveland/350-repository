
import Layout from '../components/MyLayout.js'
import {getCampInfo} from '../lib/utils.js';
import React from "react";

export default function Camps() {
  return (
     class Home extends React.Component {
        constructor(props) {
        super(props);
        this.state = { search: "" };
        }
    
    <Layout>
      <p>This is the search page</p>
    </Layout>
  )
}



