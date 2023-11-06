import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Result extends Component {
    winner = () => {
        if (this.props.computerValue > this.props.youValue) {
            return 'Lose';
        } else if (this.props.computerValue < this.props.youValue) {
            return 'Win';
        } else {
            return 'Draw';
        }
    }


    render() {
        return (
            <div className={'result'}>
                <div className={'total'}>{this.winner()}</div>
                <div className={'total'}>{this.props.computerValue}-{this.props.youValue}</div>
                <button type={'button'} className={'btn btn-primary btn-lg'}
                        onClick={() => this.props.changePage('game')}>Again?
                </button>

            </div>
        );
    }
}

export default Result;