// import the React and React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText(){
    return 'Click on me!';
}
//Create a react component
const App = () => {
    const buttonText = {text: 'Click me'};
    const labelText = 'Enter name';
    return(
        <div>
            <label className="label" for="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue',color:'white'}}>
                {/* function button involke */}
                {/* {getButtonText()} */}
                {buttonText.text}
            </button>
        </div>
    )
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
