import * as React from 'react';
import Elements from "../Elements";
import Icon from "../icon";
import {BAR_WIDTH} from "../Paint";
import './eraser.scss';

export default class Eraser extends Elements {
    public nameOfElement = 'eraser';
    public widthEraserBlock = 50;
    public heightEraserBlock = 50;
    public mouseDown = false;

    public clear = (x: number, y: number) => {
        this.ctx.clearRect(x - this.widthEraserBlock/2, y - this.heightEraserBlock/2, this.widthEraserBlock, this.heightEraserBlock);
    };

    public onMouseDown = (e: any) => {
        this.clear(e.clientX - BAR_WIDTH, e.clientY);
        this.mouseDown = true;
    };

    public onMouseMove =(e: any) => {
        if (this.mouseDown) {
            this.clear(e.clientX - BAR_WIDTH, e.clientY);
        }
    };

    public  onMouseUp = (e: any) => {
        this.mouseDown = false;
    };

    public render() {
        const { active, className } = this.props;

        return (
            <Icon onClick={this.onClick} active={active === this.nameOfElement} className="eraser__icon" classNameForWrapper={className || ""}/>
        );
    }
}