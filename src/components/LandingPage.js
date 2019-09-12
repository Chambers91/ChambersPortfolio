import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import AboutMe from './Aboutme';
import Email from './Popup';
import GHButton from './GithubButton';
import LIButton from './LIButton';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto', alignItems: 'center' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img src='Headshot.jpeg' alt='Chambers_Avatar' className='avatar' />
            <div className='banner-text'>
              <h1 style={{ fontFamily: 'Righteous', fontSize: '6vw' }}>
                Full Stack Web Developer
              </h1>
              <hr />
            </div>
            <div className='code-details'>
              <p style={{ fontFamily: 'Righteous' }}>
                HTML | CSS | Bootstrap | Angular | React | NodeJS | Express |
                MongoDB
              </p>
            </div>
            <div className='social-links'>
              {/* LinkedIn*/}
              <a
                href='https://www.linkedin.com/in/chambers91/'
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
                href='https://drive.google.com/file/d/135pNZUAicnfQDznfJqRHS1l_zSZN5-ze/view?usp=sharing'
                rel='noopener noreferrer'
                target='_blank'
                download='Chambers_Resume'
              >
                <i class='fa fa-download' aria-hidden='true' />
              </a>
            </div>
            <hr />
            <h1 style={{ fontFamily: 'Righteous' }}>About Me</h1>
            <hr />
            <AboutMe />
            {/* <hr />
            <h1 style={{ fontFamily: 'Righteous' }}>Projects</h1>
            <hr /> */}
            <h1 style={{ fontFamily: 'Righteous' }}>Contact Me</h1>
            <hr />
            {/* LINKEDIN BUTTON */}
            <LIButton />
            <hr />
            {/* GITHUB BUTTON */}
            <GHButton />
            <hr />
            {/* EMAIL  BUTTON*/}
            <Email />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
