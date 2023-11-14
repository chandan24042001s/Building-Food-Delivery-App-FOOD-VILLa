import React from 'react'
import Profile from './Profile';
import ProfileClass from './ProfileClass';

class About extends React.Component {
   constructor(props){
        super(props);
        console.log("parent constructor");
        
        this.state={
            count:0,
            count2:0
        }

    }

    componentDidMount(){
        console.log(" parent componentDidMount");
    }
  render() {
    console.log("parent render");
  return (
   <>
    <h1> About Us</h1>
    <h3> This is live . Components will render here. </h3>
    {/* <ProfileClass name={"first child"}/> */}
    <Profile name={"First child"}/>
   
      </>
  )
  }
}

export default About;

/**
*parent constructor
parent render
child constructor first child 
child render first child 
child constrctor secon child
child render second child
childDIdMount first child
child DidMount second child
parent did mount 
 */

