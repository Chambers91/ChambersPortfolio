import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { Link } from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Terence Chambers</h2>
            <img
              src='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/49680386_1715985571835995_2923186279602454528_n.jpg?_nc_cat=100&_nc_oc=AQkkXGi1Ipp4Sq8tKeiSqVwgVVXnhZeKj9Zc10wRdGAQJNcjfY1hsoiW35GLrL7wlElcbmr7pSQTKmHQDT5kOpx3&_nc_ht=scontent-ort2-1.xx&oh=ac82d53f8a53c92e61ae989032ee6554&oe=5DC2DBC3'
              alt='avatar'
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              lorem ipsumUllamco culpa eiusmod nostrud enim. Ipsum proident
              incididunt exercitation ut sit excepteur esse sit consequat in
              aliquip dolor dolore duis. Voluptate anim culpa magna duis dolor.
              Aliqua enim excepteur voluptate anim mollit ex commodo. Velit
              culpa mollit mollit officia dolor ullamco ea deserunt duis.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: '20px',
                      fontFamily: 'Anton',
                      fontWeight: 'bold'
                    }}
                  >
                    <i class='fa fa-envelope-o' aria-hidden='true' />
                    <Link to='www.terencechambers91@gmail.com' />
                    www.terencechambers91@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: '21px',
                      fontFamily: 'Anton',
                      fontWeight: 'bold'
                    }}
                  >
                    <i class='fa fa-linkedin' aria-hidden='true' />
                    <Link to='https://www.linkedin.com/in/terence-chambers-59666787/'>
                      /Terence Chambers
                    </Link>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: '20px',
                      fontFamily: 'Anton',
                      fontWeight: 'bold'
                    }}
                  >
                    <i class='fa fa-skype' aria-hidden='true' />
                    tknile@aol.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
