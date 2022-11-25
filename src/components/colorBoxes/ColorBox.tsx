import React, {Component} from 'react';
import './ColorBox.css';


interface ColorBoxProps {
    color: string
}
interface ColorBoxState {
    color: string
    palette: Palette
}
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

class ColorBox extends Component<ColorBoxProps,ColorBoxState> {
    public paletteBlueGray= {
        1: '#FFFFFF',
        50: '#ECEFF1',
        100: '#CFD8DC',
        200: '#B0BEC5',
        300: '#90A4AE',
        400: '#78909C',
        500: '#607D8B',
        600: '#546E7A',
        700: '#455A64',
        800: '#37474F',
        900: '#263238',
        999: '#000000'
    }

    constructor(props:ColorBoxProps) {
        super(props);
        this.state = {
            color: this.props.color,
            palette: this.paletteBlueGray
        }
        this.handleChangeColor = this.handleChangeColor.bind(this);

    }

    handleChangeColor (e:React.BaseSyntheticEvent) {
        const newPalette = this.filterPalette(this.state.palette,this.state.color)
        const randIndex = Math.floor(Math.random()* Object.keys(newPalette).length)
        this.setState({
            color: Object.values(newPalette).at(randIndex)
        })
    }
    render() {
        return (
            <div
                className={"ColorBox-container"}
                onClick={this.handleChangeColor}
                 style={{backgroundColor: `${this.state.color}`}}>
            </div>
        );
    }
    filterPalette(obj:Palette , oldValue:string) {
        // Filter existing value
        const filteredKeys = Object.fromEntries(
            Object.entries(obj).filter(([key,value])=>{
                //console.log(value,oldValue)
                return value !== oldValue
            })
        )

      return filteredKeys as Palette;

       // return filteredKeys[Math.floor(Math.random() * filteredKeys.length)];
    }
}

export default ColorBox;