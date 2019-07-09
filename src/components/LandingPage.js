import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://media.licdn.com/dms/image/C4E03AQEApoV6z0FEkg/profile-displayphoto-shrink_200_200/0?e=1567641600&v=beta&t=g4cMaYJziPPjsaWdUxEscvZAXgKq0uq4G46MsdBklE4'
              alt='Chambers_Avatar'
              className='avatar'
            />
            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML | CSS | Bootstrap | Angular | React | NodeJS | Express |
                MongoDB
              </p>
              <div className='social-links'>
                {/* LinkedIn*/}
                <a
                  href='https://www.linkedin.com/in/terence-chambers-59666787/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>
                {/* GitHub*/}
                <a
                  href='https://github.com/Chambers91'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i class='fa fa-github-square  ' aria-hidden='true' />
                </a>

                {/* Resume*/}
                <a
                  href='http://google.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i class='fa fa-download' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
