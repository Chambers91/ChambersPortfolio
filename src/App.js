import './App.css';
import React from 'react';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Header className='header-color' title='Terence Chambers' scroll>
          <Navigation>
            <Link to='/home'>Home</Link>
            <Link to='/aboutme'>About Me</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/contact'>Contact</Link>
          </Navigation>
        </Header>
        <Drawer title='Terence Chambers'>
          <Navigation>
            <Link to='/home'>Home</Link>
            <Link to='/aboutme'>About Me</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/contact'>Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className='page-content' />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
