import * as React from "react"
import { PropertyControls, ControlType } from "framer"

export interface Props {
    iconColor: string;
    color: string;
    stepperValue: string;
    size: string;
}

export class Incrementor extends React.Component<Props> {
    
    static defaultProps = {
        color: "#fff",
        iconColor: "#2FE8D6",
        stepperValue: 0,
        size: "24px"
    };

    static propertyControls: PropertyControls = {
        iconColor: {
            type: ControlType.Color,
            title: "Icon color"
        },
        color: {
            type: ControlType.Color,
            title: "Color"
        },
        stepperValue: {
            type: ControlType.Number,
            title: "Stepper value"
        },
        size: {
            type: ControlType.Number,
            title: "Font size",
            min: 11,
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            unit: 0,
        };
    }
    
    Increment = () => {
        this.setState({unit: this.state.unit + this.props.stepperValue });
    }
    
    Decrement = () => {
        this.state.unit === 0 ? console.log("0") : this.setState({unit: this.state.unit - this.props.stepperValue});
    }

    render() {
        const { iconColor, color } = this.props


        return(
            <div style={{display: "grid",fontSize: "48px",gridTemplateColumns: "1fr 1fr 1fr", height: "100%",alignItems: "center",textAlign: "center",}}>
                <div style={{display: "grid",padding: "16px",position: "relative",}} onClick={this.Decrement}>
                    <div style={{height: "1px",width: "10px", background: iconColor,alignSelf: "center",justifySelf: "center"}}> </div>
                </div>
            <div>
                <h2 style={{color: color, fontSize: this.props.size + "px", fontWeight: "300"}}>{this.state.unit}</h2>
            </div>
                <div style={{ display: "grid", padding: "16px", position: "relative",}}onClick={this.Increment}>
                    <div style={{height: "10px",width: "1px", background: iconColor,alignSelf: "center",justifySelf: "center",transform: "rotate(180deg)",position: "absolute",margin: "auto",left: "0",right: "0",top: "0",bottom: "0"
                        }}></div>
                    <div style={{height: "1px",width: "10px", background: iconColor,alignSelf: "center",justifySelf: "center"}}></div>
                </div>
            </div>
        ) 
    }
}
