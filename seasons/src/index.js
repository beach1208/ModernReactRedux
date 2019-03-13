import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    state = {lat: null, errorMessage: ''}

    //Data loading inside constructor is not recommended from official document,
    //so better to make componentDidMount() and load deta inside.
    //get user location function
    //if its in render() method, it will be called over and over when its redered.
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({lat: position.coords.latitude}),
        (err) => this.setState({errorMessage: err.message})
        );
    }

    //React says we have to define render!
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            //pass state property as props
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))