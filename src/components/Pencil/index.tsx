import * as React from 'react';
import Elements from "../Elements";
import Icon from "../icon";
import {BAR_WIDTH} from "../Paint";
import './pencil.scss';

export default class Pencil extends Elements {
    public nameOfElement = 'pencil';
    public mouseDown = false;
    public firstDot : any;

    public onMouseDown = (e: any) => {
        this.mouseDown = true;

        this.firstDot = { x: e.clientX - BAR_WIDTH, y : e.clientY };
    };

    public onMouseMove = (e: any) => {
        if (!this.mouseDown) {
            return;
        }

        this.ctx.beginPath();
        this.ctx.moveTo(this.firstDot.x, this.firstDot.y);
        this.ctx.lineTo(e.clientX - BAR_WIDTH, e.clientY);
        this.ctx.stroke();

        this.firstDot = { x: e.clientX - BAR_WIDTH, y : e.clientY };
    };

    public onMouseUp = (e: any) => {
        this.mouseDown = false;
        this.firstDot = null;
    };

    public onUnActive = () => {
        this.firstDot = null;
    }

    public render() {
        const { active, className } = this.props;

        return (
            <Icon onClick={this.onClick} active={active === this.nameOfElement} className="pencil__icon" classNameForWrapper={className || ""}/>
        );
    }
}