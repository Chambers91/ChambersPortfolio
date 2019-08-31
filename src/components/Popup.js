import React from 'react';
import { Button, Dialog, DialogContent, DialogActions } from 'react-mdl';

class Popup extends React.Component {
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
          className='emailpopup'
          onClick={this.handleOpenDialog}
          raised
          ripple
        >
          Email
        </Button>
        <Dialog open={this.state.openDialog}>
          {/* <DialogTitle>Email</DialogTitle> */}
          <DialogContent>
            <p>terencechambers91@gmail.com</p>
          </DialogContent>
          <DialogActions>
            <Button type='button' onClick={this.handleCloseDialog}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Popup;
