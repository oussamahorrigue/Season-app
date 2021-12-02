import React from "react";
import ReactDOM from "react-dom";
import Season from "./Season";
import Spinner from "./Spinner";
import Clock from "./ClockComponent";

class App extends React.Component{

        state={ latitude : null,err:''};
        
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude : position.coords.latitude}),
            error => this.setState({err: error.message})
        )
    }

    render(){
        
            if (this.state.err && !this.state.latitude){
                return (<div>Error : {this.state.err}</div>);
            }
            if (!this.state.err && this.state.latitude){
                return (<div><Season lat = {this.state.latitude}/></div>);
            }
            return <div><Spinner message = "Please accept default location"/></div>
            
      
    }
}

ReactDOM.render(<App/> , document.querySelector('#root'))

