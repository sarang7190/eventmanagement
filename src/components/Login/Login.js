import React,{Component} from 'react';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      loginEmail :'',
      loginPassword:''
    }

  }

  onEmailChange = (event) => {
    this.setState({loginEmail:event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({loginPassword:event.target.value});
  }

  onSubmitLogIn = () =>{
    fetch('http://localhost:3001/login',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:this.state.loginEmail,
        password:this.state.loginPassword
      })
    }).then(response => response.json())
    .then(data => {
      if(data === 'success'){
        this.props.onRouteChange('home')
      }
    })
  }

  render(){
    const {onRouteChange} = this.props;
    return(
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
        <main className="pa4 black-80">
            <div className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Log In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" 
                    name="email"  
                    id="email"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" 
                  value="Log In"
                  onClick={this.onSubmitLogIn}
                />
              </div>
              <div className="lh-copy mt3">
                <p onClick={() => onRouteChange('register')}className="f6 link dim black db pointer">Register</p>
                <p href="#0" className="f6 link dim black db pointer">Forgot your password?</p>
              </div>
            </div>
      </main>
    </article>
        );
  }
    
}

export default Login;