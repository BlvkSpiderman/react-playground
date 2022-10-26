import React from "react";

//This is the component that starts it all off by rendering whatever is passed to it
//inside a div container (whose class can be edited as well...).
function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}   
     </div>
    );
}

//This component displays its children inside <FancyBorder/> as regular html elements
// using {props.children} as the placeholder while also initializing the {props.color}
function WelcomeDialog() {
    return (
    <FancyBorder color="blue">
        <h1 className="Dialog-title">        
            Welcome      
        </h1>      
        <p className="Dialog-message">        
            Thank you for visiting our spacecraft!      
        </p>    
    </FancyBorder>
    );
}

//Example #2
//This is a generic component for displaying a dialog..
function Dialog(props) {
    return (
        <FancyBorder color="blue">
        <h1 className="Dialog-title">
            {props.title}      
        </h1>
        <p className="Dialog-message">
            {props.message}    
            </p>
        </FancyBorder>
    );
}

//This component uses <Dialog /> to display a more specific message and title
function WelcomeDialogBox() {
    return (
        <Dialog      
        title="Welcome"      
        message="Thank you for visiting our spacecraft!" />  
    );
}

//Example #3
//This example shows the generic <Dialog /> being used by a class
class SignUpDialog extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.state = {login: ''};
    }
  
    render() {
      return (
        <Dialog title="Mars Exploration Program" //Here <Dialog /> has been used and given props as well 
                message="How should we refer to you?">
            <input /**As this element is also added */
            value={this.state.login}               
            onChange={this.handleChange} />        
            <button onClick={this.handleSignUp}>          
                Sign Me Up!        
            </button>      
        </Dialog>
      );
    }
  
    handleChange(e) {
      this.setState({login: e.target.value});
    }
  
    handleSignUp() {
      alert(`Welcome aboard, ${this.state.login}!`);
    }
  }


  // Just something to take care of the unused components
  const use = (
    <div>
        <WelcomeDialog />
        <SignUpDialog />
        <WelcomeDialogBox />
    </div>
  );

  export default use; 