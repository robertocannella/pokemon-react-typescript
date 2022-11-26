import React, {Component} from 'react';
import './Cell.css'


interface CellProps {

    flipCellsAroundMe: Function;
    isLit: boolean;
    id: string;
}
class Cell extends Component<CellProps,any> {


    constructor(props:any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt :React.BaseSyntheticEvent){
        this.props.flipCellsAroundMe(this.props.id)

    }
    render() {
        return (
            <td
                id-={this.props.id}
                className={`Cell LightsOut__cell ${this.props.isLit ? "Cell-lit": "Cell-off"}` }
                onClick={this.handleClick}
            >
            </td>


        );
    }
}

export default Cell;