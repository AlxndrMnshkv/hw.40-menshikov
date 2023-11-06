import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Start extends Component {
    handleChange = (event) => {
        const inputValue = event.target.value;
        localStorage.setItem('userName', inputValue);
    }

    render() {
        return (
            <div className={'start'}>
                <div className={'title'}>Ready for WAR</div>
                <input className={'input'} placeholder={'Enter your name'} onChange={this.handleChange}/><br/>
                <button type={'button'} className={'btn btn-primary btn-lg startBtn'}
                        onClick={() => this.props.changePage('game')}>START
                </button>
            </div>
        );
    }
}

export default Start;