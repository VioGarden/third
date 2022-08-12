import * as React from 'react';
import "./styleld.css"
import "./style.css"

export default class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {stylePath: './style.css'};
    }

    handleButtonClick(){
        this.setState({stylePath: './styleld.css'});
    }

    render(){
        return (
            <div>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
                <button type="button" onClick={this.handleButtonClick.bind(this)}>
                    Click to update stylesheet, this button dont work</button>
            </div>
        )
    }
};