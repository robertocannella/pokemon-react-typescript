import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import './ColorBoxes.css'
interface Palette  extends Object{
    1: string
    50: string
    100: string
    300:string,
    400: string,
    500: string,
    600: string,
    700: string,
    800: string,
    900: string,
    999: string
}

class ColorBoxes extends Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            palette:  this.paletteBlueGray
        }
    }

    public paletteBlueGray= {
        1: '#FFFFFF',
        50: '#ECEFF1',
        100: '#CFD8DC',
        200: '#B0BEC5',
        300:'#90A4AE',
        400: '#78909C',
        500: '#607D8B',
        600: '#546E7A',
        700: '#455A64',
        800: '#37474F',
        900: '#263238',
        999: '#000000'
    }

    render() {
        const { palette } = this.state
        return (
            <div className={"ColorBoxes Main-Content"}>
                <h2>Color Palette</h2>
                <div className={"ColorBoxes-container"}>
                    {Object.keys(palette).map((key,index)=>{
                        return (
                            <ColorBox key={key} color={palette[key]}/>
                        )
                    })}
                </div>

            </div>
        );
    }
}

export default ColorBoxes;