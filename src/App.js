import React from 'react';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import calculateFacePosition from './functions/calculateFacePosition';
import particlesOptions from './functions/particlesOptions';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'SignIn',
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
      },
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });
    fetch('https://cryptic-oasis-38489.herokuapp.com/imageURL', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch('https://cryptic-oasis-38489.herokuapp.com/image', {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((updatedUser) => {
              this.setState(
                Object.assign(this.state.user, { entries: updatedUser })
              );
            });
        }
        this.displayFace(calculateFacePosition(response));
      })
      .catch((error) => console.log(error));
  };

  changeRoute = (getRoute) => {
    if (getRoute === 'SignIn') {
      this.setState({ box: '', imageURL: '' });
    }
    this.setState({ route: getRoute });
  };

  displayFace = (getBox) => {
    this.setState({ box: getBox });
  };

  loadUserInfo = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  render() {
    if (this.state.route === 'SignIn') {
      return (
        <div className='App'>
          <Particles className='particles' params={{ particlesOptions }} />
          <div className='signIn'>
            <Logo />
            <SignIn
              loadUserInfo={this.loadUserInfo}
              changeRoute={this.changeRoute}
            />
          </div>
        </div>
      );
    } else if (this.state.route === 'App') {
      return (
        <div className='App'>
          <Particles className='particles' params={{ particlesOptions }} />
          <Nav changeRoute={this.changeRoute} />
          <div id='responsive' style={{ display: 'flex' }}>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
          </div>
          <FaceRecognition
            box={this.state.box}
            imageURL={this.state.imageURL}
          />
        </div>
      );
    } else if (this.state.route === 'Register') {
      return (
        <div className='App'>
          <Particles className='particles' params={{ particlesOptions }} />
          <Nav currentRoute={this.state.route} changeRoute={this.changeRoute} />
          <div className='signIn'>
            <Logo />
            <Register
              loadUserInfo={this.loadUserInfo}
              changeRoute={this.changeRoute}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
