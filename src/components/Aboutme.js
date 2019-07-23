import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Aboutme extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto', alignItems: 'center' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://avatars3.githubusercontent.com/u/26388609?s=460&v=4'
              alt='Chambers_Avatar'
              className='avatar'
            />
            <div className='banner-text'>
              <hr />
              <p>
                I am a fun, friendly and passionate software engineer in the
                Cincinnati, OH/Northern KY area. The Tech Stack I am most
                interested in using includes MongoDB, Express, Node and any
                programming language using a JavaScript framework. I have been
                coding as a part of the Tech Community since 2013 working with
                HTML, CSS, and Vanilla JavaScript. Currently, I am working on
                side projects utilizing Angular and React while simultaneously
                learning Python for my personal education and usage. During my
                free time, I enjoy attending local meetups, watching movies, and
                spending time with my family. Some of my hobbies are
                photography, weightlifting and sneaker shopping.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
