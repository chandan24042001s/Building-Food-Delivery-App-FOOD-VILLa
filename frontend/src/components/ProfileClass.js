//class Base Component 
import * as React from 'react';
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        console.log("child constructor"+this.props.name);
        
        this.state={
            userInfo:{
                // name:" ",
                // Location:""
            },
            count:0,
            count2:0
        }

    }

    async componentDidMount(){
        console.log("child componentDidMount"+this.props.name);
        const data=await fetch("https://api.github.com/users/chandan24042001s");
        const json= await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
        this.timer=setInterval(()=>{
            console.log("nameste");
        },1000);
    }
    componentDidUpdate(prevProps,preState) {
        console.log("child componentDidUpdate"+this.props.name);
        if(
            this.state.count!=preState.count || this.state.count2!=preState.count2
        ){
            this.setState({count:1})
           
        }
    }
    componentWillUnmount(){
        console.log("child componentWillUnmount"+this.props.name);
        clearInterval(this.timer)
    }
    render(){
        console.log("child render"+this.props.name);
        return(
            <>
            <h1>Profile Class Component</h1>
            <h2> {this.state.userInfo.name} </h2>
            <h2>{this.state.userInfo.location}</h2>
            <img src={this.state.userInfo.avatar_url} />

            </>
            
            
        )
    }
}

export default ProfileClass;