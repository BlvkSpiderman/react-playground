import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import reportWebVitals from './reportWebVitals';

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div className={'post-card'} key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      <div className={'post-card-area'}>
      {content}
      </div>
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key = {number.toString()}>
        {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const randNum = [2, 3, 5,3,1];

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

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<LoginControl />);

reportWebVitals();