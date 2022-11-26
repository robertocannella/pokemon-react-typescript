import React, {Component} from 'react';
import './Cell.css'

interface CellProps {
    flipCellsAroundMe: Function,
    isLit: boolean
}

class Cell extends Component<CellProps> {
    constructor(props:any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt:any) {
        // call up to the board to flip cells around this cell
        this.props.flipCellsAroundMe();
    }

    render() {
        let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");

        return (
            <td className={classes} onClick={this.handleClick}  />
        )
    }
}


export default Cell