import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import SideProjects from './SideProjects';
import TechProficiencies from './TechProficiencies';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/49680386_1715985571835995_2923186279602454528_n.jpg?_nc_cat=100&_nc_oc=AQkkXGi1Ipp4Sq8tKeiSqVwgVVXnhZeKj9Zc10wRdGAQJNcjfY1hsoiW35GLrL7wlElcbmr7pSQTKmHQDT5kOpx3&_nc_ht=scontent-ort2-1.xx&oh=ac82d53f8a53c92e61ae989032ee6554&oe=5DC2DBC3'
                alt='avatar'
                style={{ height: '250px' }}
                className='resumephoto'
              />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Terence Chambers</h2>
            <h4 style={{ color: 'grey' }}>Web Developer</h4>
            <hr style={{ borderTop: '3px solid #000080', width: '54%' }} />
            <p>
              Lorem ipsum dolor sit amet, duis vivendum ne duo, ne pri dolore
              libris referrentur. Ut velit causae ponderum per, no nec mundi
              eligendi. Per tantas postulant torquatos ad. Pro probatus pericula
              vituperata id. An choro graeco inermis mel.
            </p>
            <hr style={{ borderTop: '3px solid #000080', width: '54%' }} />
            <h5>Address</h5>
            <p> 1 Hacker Way</p>
            <h5>Phone</h5>
            <p>000-000-0000</p>
            <h5>Email</h5>
            <p>terencechambers91@gmail.com</p>
            <p />
          </Cell>
          <Cell className='resume-body' col={8}>
            <h2>Technical Proficiencies</h2>
            <TechProficiencies
              platforms='Windows 7/8/10, MAC OS    '
              languages='HTML5, CSS3, JavaScript, Java, Angular, React, React native, Ionic, PHP'
              tools='Git, CPanel, Atom, VSCode, Eclipse, FileZilla, SQL Server, Adobe Photoshop'
            />

            <h2>Experience</h2>
            <Experience
              startYear='2019'
              endYear='Present'
              jobName='Tata Consultancy Services'
              jobRole='Software Engineer'
              jobDescription='•	Developing web applications using Java, Angular, Node, HTML and CSS'
            />
            <Experience
              startYear='May 2017'
              endYear='January2019'
              jobName='Mercy Health'
              jobRole='Desktop Administrator'
              jobDescription='•	Remote support for employees at all Mercy locations in the Ohio and Kentucky region
'
            />
            <Experience
              startYear='April 2014'
              endYear='April 2017'
              jobName='University of Cincinnati'
              jobRole='UCIT Tech Support Analyst'
              jobDescription='•	Remote desktop support , password resets

'
            />
            <Experience
              startYear='August 2013'
              endYear='December 2013'
              jobName='Wright Patt Air Force Base Discovery Lab'
              jobRole='Web Developer Intern'
              jobDescription='• Collaboratively developed a cross platform action item application compatible using WordPress and CPanel '
              moreDetails='•	Focused on the user interface of the application using HTML, CSS, JavaScript
'
            />
            <hr />
            <h2>Side Projects</h2>

            <SideProjects
              startYear='January 2019'
              endYear='Present'
              jobName='Blue Gopher'
              jobRole='Web Developer '
              jobDescription='•	Developing Cross Platform application using Ionic, Angular, Node, HTML and CSS'
            />
            <SideProjects
              startYear='August 2018'
              endYear='Present'
              jobName='Seeds 4 Life'
              jobRole='Voluntary Developer '
              jobDescription='•	Developed a new website voluntarily using HTML, CSS, JavaScript and PHP'
            />
            <hr />
            <h2>Education</h2>

            <Education
              startYear='2012'
              endYear='2017'
              schoolName='University of Cincinnati'
              schoolDegree='Bachelors of Science in Information Technology'
              schoolMajor='Software Application Development'
            />
            <hr />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
