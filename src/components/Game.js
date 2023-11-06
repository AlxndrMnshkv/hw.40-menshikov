import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {ranks, suits} from "../utils/constants";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards1: [],
            cards2: [],
            currentCard1: null,
            currentCard2: null,
        };
        this.press = 0;
        this.computer = 0;
        this.you = 0;
    }

    componentDidMount() {
        const cards = [];
        for (const suit of suits) {
            for (const rank of ranks) {
                const card = {
                    rank,
                    suit,
                    image: <img src={require(`../images/${rank}_of_${suit}.png`)} alt={'foto'} className={'img'}/>
                };
                cards.push(card);
            }
        }
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        shuffleArray(cards);

        const middle = Math.floor(cards.length / 2);
        const firstHalf = cards.slice(0, middle);
        const secondHalf = cards.slice(middle);
        // console.log(firstHalf)
        // console.log(secondHalf)

        this.setState({...this.state, cards1: firstHalf, cards2: secondHalf})


    }

    showCard = () => {
        const {cards1, cards2} = this.state;
        if (cards1.length > 0 && cards2.length > 0) {
            const updatedCards1 = [...cards1];
            const updatedCards2 = [...cards2];
            const updatedCards11 = [...cards1];
            const updatedCards22 = [...cards2];
            const currentCard1 = updatedCards1.shift().image;
            const currentCard2 = updatedCards2.shift().image;
            const rankCard1 = parseInt(updatedCards11.shift().rank);
            const rankCard2 = parseInt(updatedCards22.shift().rank);
            if (rankCard1 > rankCard2) {
                this.computer++;
            } else if (rankCard1 < rankCard2) {
                this.you++;
            }
            this.setState({
                cards1: updatedCards1,
                cards2: updatedCards2,
                currentCard1,
                currentCard2,
            });
            this.press++;
        }
    }

    render() {
        const {currentCard1, currentCard2} = this.state;
        return (
            <div className={'game'}>
                <div className={'players'}>Computer</div>
                <div className={'cards'}>{currentCard1 && <div>{currentCard1}</div>}</div>
                <div className={'cards'}>{currentCard2 && <div>{currentCard2}</div>}</div>
                <div>
                    <button type={'button'} className={'btn btn-primary btn-lg nextBtn'}
                            onClick={() => {
                                if (this.press < 26) {
                                    this.showCard();
                                    this.props.changeScore(this.computer, this.you);
                                } else {
                                    this.props.changePage('result');
                                }
                            }}>next
                    </button>
                    <div className={'players2'}>{localStorage.getItem('userName')}</div>
                </div>
            </div>
        );
    }


}

export default Game;