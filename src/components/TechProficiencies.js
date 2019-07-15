import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class TechProficiencies extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>Platforms:</p>
          <p>Languages:</p>
          <p>Tools:</p>
        </Cell>
        <Cell col={8}>
          <p style={{ marginTop: '0px' }}>{this.props.platforms} </p>
          <p style={{ marginTop: '0px' }}>{this.props.languages} </p>
          <p style={{ marginTop: '0px' }}>{this.props.tools} </p>
        </Cell>
      </Grid>
    );
  }
}

export default TechProficiencies;
