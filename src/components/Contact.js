import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Terence Chambers</h2>
            <img
              src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
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
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-phone-square' aria-hidden='true' />
                    000-000-0000
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon='person'>Aaron Paul</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon='person'>Bob Odenkirk</ListItemContent>
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
