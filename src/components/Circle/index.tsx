import * as React from 'react';
import './circle.scss';
import Elements from "../Elements";
import Icon from "../icon";
import {BAR_WIDTH} from "../Paint";

export default class Circle extends Elements {
    public nameOfElement = 'circle';
    public firstDot : any;

    public onMouseDown = (e: any) => {
        if (this.firstDot) {
            const x = e.clientX - BAR_WIDTH;
            const y = e.clientY;
            const width = x - this.firstDot.x;
            const height = y - this.firstDot.y;
            const centerX = this.firstDot.x + width/2;
            const centerY = this.firstDot.y + height/2;

            const radius = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;

            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, radius, 0, Math.PI*2);
            this.ctx.stroke();

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
            <Icon onClick={this.onClick} active={active === this.nameOfElement} className="circle__icon" classNameForWrapper={className || ""}/>
        );
    }
}