import './components.css';
import Blog from './Blog';
import NumberList from './App';
import React from 'react';

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
  
  function Greeting(props) {
     if(props.isLoggedIn) {
     return (
       <div>
      <h1>
        Hello, {props.name}!
     </h1>
         <h3>
           Where've you been all this while?
         </h3>
      </div>
    ); 
    } else {
      return (
    <div>
      <h1>
          Hello, Stranger! 
        </h1>
        <h3>
          Would you care to sign up?
        </h3>
     </div>     
      );
    }
  }
  
  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
        <div className= "show">
          <Greeting isLoggedIn={isLoggedIn} name={'Henry'} />
          {button}
        </div>
         <div>
           <NumberList numbers={randNum}/>
         </div>
          <div>
            <Blog posts={posts}/>
          </div>
       </div>
      );
    }
  }

  const randNum = [2, 3, 5,3,1];
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  export default LoginControl;