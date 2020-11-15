
import Layout from '../components/MyLayout.js'
import {getCampInfo} from '../lib/utils.js';
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

export default function Camps() {
  return (
    <Layout>
      <p>This is the search page</p>
    </Layout>
  )
}



