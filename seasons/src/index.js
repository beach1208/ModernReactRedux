import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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

    //conditional method moved from render component.
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            //pass state property as props
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <div><Spinner message="Please accept location request"/></div>;
    }
    //React says we have to define render!
    render() {
        return(
            <div className="border red">
            {this.renderContent()}
            </div>
        );
        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))