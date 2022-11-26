import React, {Component} from 'react';
import './Board.css'
import Cell from "./Cell";

interface BoardProps {
    nrows: number,
    ncols: number,
    chanceLightStartsOn: number
}

class Board extends Component<BoardProps,any> {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStartsOn: 0.75
    };
    constructor(props:any) {
        super(props);

        // TODO: set initial state
        this.state = {
            hasWon: false,
            board: this.createBoard()
        };
    }
    createBoard() {
        let board = [];
        // TODO: create array-of-arrays of true/false values
        for (let y = 0; y < this.props.nrows; y++) {
            let row = [];
            for (let x = 0; x < this.props.ncols; x++) {
                row.push(Math.random() < this.props.chanceLightStartsOn);
            }
            board.push(row);
        }
        return board;
    }

    /** handle changing a cell: update board & determine if winner */

    flipCellsAround(coord:any) {
        let { ncols, nrows } = this.props;
        let board = this.state.board;
        let [y, x] = coord.split("-").map(Number);

        function flipCell(y:number, x:number) {
            // if this coord is actually on board, flip it

            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x];
            }
        }
        // TODO: flip this cell and the cells around it
        flipCell(y, x); //Flip initial cell
        flipCell(y, x - 1); //flip left
        flipCell(y, x + 1); //flip right
        flipCell(y - 1, x); //flip below
        flipCell(y + 1, x); //flip above

        // win when every cell is turned off
        // TODO: determine is the game has been won
        let hasWon = board.every((row:any) => row.every((cell:any) => !cell));

        this.setState({ board: board, hasWon: hasWon });
    }

    /** Render game board or winning message. */
    makeTable() {
        let tblBoard = [];
        for (let y = 0; y < this.props.nrows; y++) {
            let row = [];
            for (let x = 0; x < this.props.ncols; x++) {
                let coord = `${y}-${x}`;
                row.push(
                    <Cell

                        key={coord}
                        isLit={this.state.board[y][x]}
                        flipCellsAroundMe={() => this.flipCellsAround(coord)}
                    />
                );
            }
            tblBoard.push(<tr key={y}>{row}</tr>);
        }
        return (
            <table className='Board'>
                <tbody>{tblBoard}</tbody>
            </table>
        );
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
        );
    }
}

export default Board;