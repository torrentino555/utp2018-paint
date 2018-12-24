import * as React from 'react';
import Rectangle from "../Rectangle";
import './bar.scss';
import Triangle from "../Triangle";
import Eraser from "../Eraser";
import Pencil from "../Pencil";
import Circle from "../Circle";
import Fill from "../Fill";
import ChoiceColor from "../ChoiceColor";

export default class Bar extends React.Component {
    public state = {
        active: "",
        fillColor: 'black'
    };

    public setActive = (active: string) => {
        this.setState({ active });
    };

    public setFillColor = (color: string) => {
        this.setState({ fillColor: color })
    };

    public render() {
        const { active, fillColor } = this.state;

        return (
            <div className="bar">
                <div className="bar__wrapper">
                    <Rectangle className="bar__left-block-margin" setActive={this.setActive} active={active}/>
                    <Triangle setActive={this.setActive} active={active} />
                    <Eraser className="bar__left-block-margin" setActive={this.setActive} active={active} />
                    <Pencil setActive={this.setActive} active={active} />
                    <Circle className="bar__left-block-margin" setActive={this.setActive} active={active} />
                    <Fill setActive={this.setActive} active={active} fillColor={fillColor}/>
                    <ChoiceColor className="bar__left-block-margin"
                                 setActive={this.setActive}
                                 setFillColor={this.setFillColor}
                                 fillColor={fillColor}
                                 active={active} />
                </div>
            </div>
        );
    }
}