import React, { Component } from 'react';
import {
  Button,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  CardMenu,
  Grid,
  IconButton,
  Tab,
  Tabs
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          {/* {ReactProject 1} */}

          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'
              }}
            >
              Github Profile Finder
            </CardTitle>
            <CardText>
              A project used to search for different Github Users and View their
              profiles and projects.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/* {Project 2} */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'
              }}
            >
              Name of Project
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. More
              Projects coming soon !
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/* {Project 3} */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'
              }}
            >
              Name of Project
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. More
              Projects coming soon !
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>
          {/* {AngularProject 1} */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://www.valuecoders.com/blog/wp-content/uploads/2019/03/angulr8feat.jpg) center / cover'
              }}
            >
              Blue Gopher Startup App
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. More
              Projects coming soon !
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* {Project 2} */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://www.valuecoders.com/blog/wp-content/uploads/2019/03/angulr8feat.jpg) center / cover'
              }}
            >
              Name of Project
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. More
              Projects coming soon !
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* {Project 3} */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://www.valuecoders.com/blog/wp-content/uploads/2019/03/angulr8feat.jpg) center / cover'
              }}
            >
              Name of Project
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. More
              Projects coming soon !
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className='projects-grid'>
          {/* {HTMLProject 1} */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(http://radiusmedia.com/wp-content/uploads/2018/07/html5-and-css3.png) center / cover'
              }}
            >
              Name of Project
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. More
              Projects coming soon !
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* {Project 2} */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(http://radiusmedia.com/wp-content/uploads/2018/07/html5-and-css3.png) center / cover'
              }}
            >
              Name of Project
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. More
              Projects coming soon !
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* {Project 3} */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(http://radiusmedia.com/wp-content/uploads/2018/07/html5-and-css3.png) center / cover'
              }}
            >
              Name of Project
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. More
              Projects coming soon !
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className='projects-grid'>
          {/* {Project 1} */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'
              }}
            >
              Seeds 4 Life Webpage
            </CardTitle>
            <CardText>
              I voluntarily made this website for a non profit company just for
              fun and as a service to the comapny Seeds 4 Life Inc.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* {Project 2} */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'
              }}
            >
              Name of Project
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. More
              Projects coming soon !
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* {Project 3} */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'
              }}
            >
              Name of Project
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. More
              Projects coming soon !
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='category-tabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Javascript</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
