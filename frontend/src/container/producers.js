import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class Producers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      producers: null
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/producers")
      .then(response => response.json())
      .then(producers => {
        let bp = producers.rows;
        this.setState({ producers: bp });
      });
  }

  render() {
    if (this.state.producers) {
      console.log(this.state.producers);
      var ListItems = this.state.producers.map(producers => (
        <Card description={producers.owner} />
      ));
    }
    return <div>{ListItems}</div>;
  }
}

export default Producers;
