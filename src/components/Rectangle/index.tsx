import * as React from 'react';
import Elements from "../Elements";
import Icon from "../icon";
import {BAR_WIDTH} from "../Paint";
import './rectangle.scss';

export default class Rectangle extends Elements {
    public nameOfElement = "rectangle";
    public firstDot : any;

    public onMouseDown = (e: any) => {
        if (this.firstDot) {
            const width = e.clientX - BAR_WIDTH - this.firstDot.x;
            const height = e.clientY - this.firstDot.y;

            this.ctx.strokeRect(this.firstDot.x, this.firstDot.y, width , height);

            this.onUnActive();
        } else {
            this.firstDot = {
                x: e.clientX - BAR_WIDTH,
                y: e.clientY
            };
        }
    };

    public onUnActive = () => {
        this.firstDot = null;
    };

    public render() {
        const { active, className } = this.props;

        return (
            <Icon onClick={this.onClick} active={active === this.nameOfElement} className="rectangle__icon" classNameForWrapper={className || ""}/>
        );
    }
}