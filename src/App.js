import './App.css';
import React, {Component} from 'react';
import Start from "./components/Start";
import {page} from "./utils/constants"
import Game from "./components/Game";
import Result from "./components/Result";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: page[0],
            computer: 0,
            you: 0
        }
    }

    changePage = (page) => this.setState({...this.state, activePage: page});
    changeScore = (computerValue, youValue) => this.setState({...this.state, computer: computerValue, you: youValue});

    render() {
        return (
            <div className="App">
                {this.state.activePage === 'start' && (
                    <Start changePage={this.changePage}/>
                )}
                {this.state.activePage === 'game' && (
                    <Game changePage={this.changePage} changeScore={this.changeScore} />
                )}
                {this.state.activePage === 'result' && (
                    <Result changePage={this.changePage} computerValue={this.state.computer} youValue={this.state.you}/>
                )}
            </div>
        );
    }
}

export default App;

