import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class SideProjects extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
           <hr />
          <p style={{ marginTop: '0px' }}>{this.props.jobRole} </p>
          <p style={{ marginTop: '0px' }}>{this.props.jobDescription} </p>
          <p style={{ marginTop: '0px' }}>{this.props.moreDetails} </p>
        </Cell>
      </Grid>

    );
  }
}

export default SideProjects;
