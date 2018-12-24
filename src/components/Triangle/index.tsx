import * as React from 'react';
import Elements from "../Elements";
import Icon from "../icon";
import {BAR_WIDTH} from "../Paint";
import './triangle.scss';

export default class Triangle extends Elements {
    public nameOfElement = 'triangle';
    public firstDot : any;
    public secondDot : any;

    public onMouseDown = (e: any) => {
        if (this.props.active !== this.nameOfElement) {
            return;
        }

        if (this.firstDot) {
            if (this.secondDot) {
                this.ctx.beginPath();
                this.ctx.moveTo(this.firstDot.x, this.firstDot.y);
                this.ctx.lineTo(this.secondDot.x, this.secondDot.y);
                this.ctx.lineTo(e.clientX - BAR_WIDTH, e.clientY);
                this.ctx.lineTo(this.firstDot.x, this.firstDot.y);
                this.ctx.stroke();

                this.onUnActive();
            } else {
                this.secondDot = {
                    x: e.clientX - BAR_WIDTH,
                    y: e.clientY
                };
            }
        } else {
            this.firstDot = {
                x: e.clientX - BAR_WIDTH,
                y: e.clientY
            };
        }
    };

    public onUnActive = () => {
        this.firstDot = null;
        this.secondDot = null;
    };

    public render() {
        const { active, className } = this.props;

        return (
            <Icon onClick={this.onClick} active={active === this.nameOfElement} className="triangle__icon" classNameForWrapper={className || ""}/>
        );
    }
}