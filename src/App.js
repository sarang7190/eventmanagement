import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Event from './components/Event/Event';
import EventList from './components/EventList/EventList';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './App.css';

const particalOptions = {
  particles: {
    number:{
      value:60,
      density:{
        enable:true,
        value_area:700
      }
    },
    "color": {
      "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#b6b2b2"
      }
    },
    "opacity": {
      "value": 0.5211089197812949,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8.017060304327615,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 12.181158184520175,
        "size_min": 0.1,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#c8c8c8",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
  
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      route:'login',
      isSignedIn:false,
      user:{
        id:'',
        name:'',
        email:'',
        joined:''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      joined:data.joined
    }})
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onRouteChange = (route) =>{
    if(route === 'logout'){
      this.setState({isSignedIn:false})
    }else if(route === 'home'){
      this.setState({isSignedIn:true})
    }else if(route === 'event'){
      this.setState({isSignedIn:true})
    }else if(route === 'eventlist'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route});
  }
  render(){
    const {isSignedIn, route} = this.state;
    return (
      <div className="App">
      <Particles className='particles'
              params={particalOptions}
            />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'?
          <div>
            <EventList />
          </div>
          :(
            route === 'event'?
            <Event onRouteChange = {this.onRouteChange} onInputChange ={this.onInputChange}/>
            :( route === 'eventlist'?
                <EventList />
              :(route === 'login'?
                <Login onRouteChange = {this.onRouteChange}/>
                :(
                  route === "register"?
                  <Register loadUser = {this.loadUser} 
                  onRouteChange = {this.onRouteChange}/>
                  :<Login onRouteChange = {this.onRouteChange}/>
                )
              )
            )
          )
        }
      </div>
    );
  }
  
}

export default App;
