import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

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
              />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Terence Chambers</h2>
            <h4 style={{ color: 'grey' }}>Web Developer</h4>
            <hr style={{ borderTop: '3px solid #000080', width: '54%' }} />
            <p>Lorem ipsum dolor sit amet, duis vivendum ne duo, ne pri dolore libris referrentur. Ut velit causae ponderum per, no nec mundi eligendi. Per tantas postulant torquatos ad. Pro probatus pericula vituperata id. An choro graeco inermis mel.
</p>
            <hr style={{ borderTop: '3px solid #000080', width: '54%' }} />
<h5>Address</h5>
<p> 1 Hacker Way</p>
<h5>Phone</h5>
<p>000-000-0000</p>
<h5>Email</h5>
<p>terencechambers91@gmail.com</p>
<p></p>
          </Cell>
          <Cell className='resume-body' col={8}>
            Body
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
