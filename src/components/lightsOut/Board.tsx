import React, {Component} from 'react';
import './Board.css'
import Cell from "./Cell";

interface BoardProps {
    nrows: number,
    ncols: number,
    chanceLightStartsOn: number
}

class Board extends Component<BoardProps, any> {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStartsOn: 0.25 //number less the 1
    }
    constructor(props:BoardProps) {
        super(props);

        this.state = {
            hasWon: false,
            board: this.createBoard()
        }
        // TODO: set initial state
        this.flipCellsAround = this.flipCellsAround.bind(this)

    }

    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

    createBoard() {
        let board = new Array(this.props.nrows);

        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(this.props.ncols)
            for (let j = 0; j < board[i].length ; j++) {
                board[i][j] = Math.random() < this.props.chanceLightStartsOn
            }
        }

        return board
    }

    /** handle changing a cell: update board & determine if winner */


    flipCellsAround(coord:any) {
        let {ncols, nrows} = this.props;
        let board = [...this.state.board];
        let [y, x] = coord.split("-").map(Number);

        function flipCell(y:number, x:number) {
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x];
            }
            return board
        }


        flipCell(y,x);          // Current Cell
        flipCell(y-1,x);     // North Cell
        flipCell(y+1,x);     // South Cell
        flipCell(y,x+1);     // East Cell
        flipCell(y,x-1);     // West Cell


        let hasWon = board.every((row:any) => row.every((cell:any) => !cell));

        this.setState({ board: board, hasWon: hasWon });
    }


    /** Render game board or winning message. */
    makeTable(){

        return  (
            <table className={"Board"}>
                <tbody key={'tbody'}>
                {this.state.board.map((row:any,y:any)=>{
                    return <tr key={y}>{row.map((cell:any,x:number)=>{
                        return <Cell
                            key={`${y}-${x}`}
                            isLit={cell}
                            id={`${y}-${x}`}
                            flipCellsAroundMe={this.flipCellsAround}
                        />
                    })}</tr>
                })}
                </tbody>
            </table>
        )
    }
    render() {

        return (
            <div>
                {this.state.hasWon ? (
                    <div className='winner'>
                        <span className='neon-orange'>YOU</span>
                        <span className='neon-blue'>WIN!</span>
                    </div>
                ) : (
                    <div>
                        <div className='Board-title'>
                            <div className='neon-orange'>Lights</div>
                            <div className='neon-blue'>Out</div>
                        </div>
                        {this.makeTable()}
                    </div>
                )}
            </div>
        )

    }
}

export default Board;
