import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    //we can define another function
    //when we make constructor, props is called automatically
    //super(props) means constructor function from React.Component is called
    constructor(props) {
        super(props);

        //set default value of latitude. if you dont know default, set null
        this.state = {lat: null, errorMessage: ''};

        //Data loading inside constructor is not recommended from official document
        //get user location function
        //if its in render() method, it will be called over and over when its redered.
        window.navigator.geolocation.getCurrentPosition(
        (position) => {
            this.setState({lat: position.coords.latitude});
        },
        (err) => {
            this.setState({errorMessage: err.message});
        }
        );
        
    }

    //React says we have to define render!
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))