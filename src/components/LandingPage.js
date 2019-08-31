import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import AboutMe from './Aboutme';
import Email from './Popup';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto', alignItems: 'center' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://media.licdn.com/dms/image/C4E03AQEApoV6z0FEkg/profile-displayphoto-shrink_200_200/0?e=1567641600&v=beta&t=g4cMaYJziPPjsaWdUxEscvZAXgKq0uq4G46MsdBklE4'
              alt='Chambers_Avatar'
              className='avatar'
            />
            <div className='banner-text'>
              <h1 style={{ fontFamily: 'Righteous' }}>
                Full Stack Web Developer
              </h1>
              <hr />
              <p style={{ fontFamily: 'Righteous' }}>
                HTML | CSS | Bootstrap | Angular | React | NodeJS | Express |
                MongoDB
              </p>
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
            {/* EMAIL  BUTTON*/}
            <Email />
            <hr />

            {/* LINKEDIN BUTTON */}
            <Button
              style={{
                textAlign: 'justify',
                color: 'white',
                fontFamily: 'Righteous'
              }}
              href='https://www.linkedin.com/in/chambers91/'
              rel='noopener noreferrer'
              target='_blank'
              className='linkedin'
              raised
              ripple
            >
              LinkedIn
            </Button>
            <hr />
            {/* GITHUB BUTTON */}
            <Button
              style={{
                textAlign: 'justify',
                color: 'white',
                fontFamily: 'Righteous'
              }}
              href='https://github.com/chambers91'
              rel='noopener noreferrer'
              target='_blank'
              className='github'
              raised
              ripple
            >
              Github
            </Button>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
