//http://www.hackingwithreact.com/read/1/8/using-jsx-to-render-several-elements-at-once
import React from 'react';
import Chance from'chance';

class Detail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "shireesha",
            country: chance.country({ full: true })
        };
    }
    buttonClicked(){
        const newState = {
            name: chance.first()
        };

        this.setState(newState);
    }
    render() {
            return (<div>
                <p>Hello, {this.state.name}.</p>
                <p>You're from {this.state.country}.</p>
                <button onClick={this.buttonClicked.bind(this)}>Meet Someone New</button>
            </div>);
        }//attaching events with button
}
//To use bind() just put it after the method name you want to call,
// then make sure and pass in the current value of this to make that the one used inside your method
//shouldComponentUpdate() will be skipped if forceUpdate is used
//Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render(). This makes your component "pure" and your application much simpler and more efficien
//React has a solution and it's called state. State looks and works just like props, with one exception: while props are read-only by their' +
// owning component, any component can change its own state or even a different component's state if it wants to.
export default Detail;