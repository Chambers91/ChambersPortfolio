import React from 'react';
import { Button } from 'react-mdl';

class GithubButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default GithubButton;
