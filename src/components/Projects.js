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
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJm-FAzY2A8xmlBwJo72RgExExwphMrKdEMu5udiUPRgUg3OCyA) center / cover'
              }}
            >
              Github Profile Finder
            </CardTitle>
            <CardText>
              A project used to search for different Github Users and View their
              profiles and projects.
            </CardText>
            <CardActions border>
              <a
                href='https://github.com/Chambers91/github-finder'
                rel='noopener noreferrer'
                target='_blank'
              >
                GitHub
              </a>
              {/* <Button colored>Live Demo</Button> */}
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
              Project 2
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. Live Demos
              and more Projects coming soon !
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
              Project 3
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. Live Demos
              and more Projects coming soon !
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
                color: '#c7b70e',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISs_jS3fJvusfBGG4U37seYM3f0EKC3gf2hX99Km3N2VGpTPO) center/cover'
              }}
            >
              Blue Gopher Startup App
            </CardTitle>
            <CardText>
              A construction material delivery service designed to make your
              construction project a breeze “Win the hour, win the project”
            </CardText>
            <CardActions border>
              {/* <Button colored>GitHub</Button> */}
              <a
                href='https://bluegopherapp.com'
                rel='noopener noreferrer'
                target='_blank'
              >
                Visit Landing Page
              </a>
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
              Project 2
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. Live Demos
              and more Projects coming soon !
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
              Project 3
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. Live Demos
              and more Projects coming soon !
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
          {/* {JSProject 1} */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                width: '100%',
                height: '176px',
                background:
                  'url(data:image/jpeg;base64,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) center / cover'
              }}
            >
              Seeds 4 Life Webpage
            </CardTitle>
            <CardText>
              I voluntarily made this website for a non profit company just for
              fun and as a service to the comapny Seeds 4 Life Inc.
            </CardText>
            <CardActions border>
              <a
                colored
                href=' https://github.com/Chambers91/S4L'
                rel='noopener noreferrer'
                target='_blank'
              >
                GitHub
              </a>
              {/* <Button colored>Live Demo</Button> */}
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
              Project 2
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. Live Demos
              and more Projects coming soon !
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
              Project 3
            </CardTitle>
            <CardText>
              I do not have many small projects I want to share at this moment.
              I prefer to do one project and continue to build on it. Live Demos
              and more Projects coming soon !
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
                  'url(https://lh3.googleusercontent.com/nbq_NXM8NLilnO8WUUYAB2zYo3shXlpNvHVnuSGavA7vG3YexXZmyv2_C6VnQ1ozqP6c=s155) center / cover'
              }}
            >
              Seeds 4 Life Webpage
            </CardTitle>
            <CardText>
              I voluntarily made this website for a non profit company just for
              fun and as a service to the company Seeds 4 Life Inc.
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
