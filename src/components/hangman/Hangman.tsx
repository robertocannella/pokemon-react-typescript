import React, {Component, ReactSVG} from 'react';
import {randomWord} from "./Words";
import './Hangman.css';
import img0 from '../../assets/images/0.jpg'
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'
import img4 from '../../assets/images/4.jpg'
import img5 from '../../assets/images/5.jpg'
import img6 from '../../assets/images/6.jpg'



class Hangman extends Component<any,any> {
    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6]
    };

    constructor(props:any) {
        super(props);
        this.state = { nWrong: 0, guessed: new Set(), answer: "random" };
        this.handleGuess = this.handleGuess.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    /**
     * resetGame: reset the game, choose a new word
     */

    resetGame () {
        this.setState({
            nWrong: 0,
            answer: randomWord(),
            guessed: new Set()
        })
    }

    /** guessedWord: show current-state of word:
     if guessed letters are {a,p,e}, show "app_e" for "apple"
     */
    guessedWord() {


        return this.state.answer
            .split("")
            .map((ltr:string) => (this.state.guessed.has(ltr) ? ltr : "_"));
    }

    /** handleGuest: handle a guessed letter:
     - add to guessed letters
     - if not in answer, increase number-wrong guesses
     */
    handleGuess(evt: React.BaseSyntheticEvent) {


        let ltr = evt.target.value;
        this.setState((st:React.ComponentState) => ({
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
        }));

    }

    /** generateButtons: return array of letter buttons to render */
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(ltr)}
            >
                {ltr}
            </button>
        ));
    }

    /** render: render game */
    render() {

        return (
            <div className='Hangman Main-Content'>
                <h1>Hangman</h1>

                <img src={this.props.images[this.state.nWrong]} />
                <p>Number of wrong guesses: <strong>{this.state.nWrong}</strong></p>
                <button className={'btn btn-reset'} onClick={this.resetGame}>Reset</button>


                {/* Winner DIV */}
                <div className={ (!this.guessedWord().includes('_')) ? "active winner" : 'inactive-winner'}>
                    <h1 className={"winner"}><strong>You Win!</strong></h1>
                </div>

                {/* LOSER DIV */}

                <div className={ (!this.guessedWord().includes('_')) ? "active-loser" : ''}>
                    {this.state.nWrong > 5 ?
                        <div>
                            <p className='Hangman-word'>{this.state.answer}</p>
                            <h3>You Lose!</h3>
                        </div>:
                        <div>
                            <p className='Hangman-word'>{this.guessedWord()}</p>
                            <p className='Hangman-btns'>{this.generateButtons()}</p>
                        </div>
                    }
                </div>

            </div>
        );
    }
}

export default Hangman;