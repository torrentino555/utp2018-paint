import * as React from 'react';
import Elements from "../Elements";
import Icon from "../icon";
import {BAR_WIDTH} from "../Paint";
import {colorToArray, equalColorArrays} from "../utils";
import './fill.scss';

interface IProps {
    fillColor: string
}

export default class Fill extends Elements<IProps> {
    public nameOfElement = 'fill';

    public onMouseDown = (e: any) => {
        const imageData = this.ctx.getImageData(0, 0,
            document.documentElement.clientWidth - BAR_WIDTH,
            document.documentElement.clientHeight
        );
        const width = imageData.width;
        const height = imageData.height;
        const stack : any = [{ x: e.clientX - BAR_WIDTH, y: e.clientY }];
        let pixel : any;
        let point = 0;
        while (stack.length > 0) {
            pixel = stack.pop();
            if (pixel.x < 0 || pixel.x >= width) {
                continue;
            }
            if (pixel.y < 0 || pixel.y >= height) {
                continue;
            }

            point = pixel.y * 4 * width + pixel.x * 4;

            const pointColorArray = [imageData.data[point], imageData.data[point + 1], imageData.data[point + 2], imageData.data[point + 3]];
            const currentFillColor = colorToArray(this.props.fillColor);

            if (imageData.data[point + 3] === 0 &&
                !equalColorArrays(pointColorArray, currentFillColor)) {

                for (let i = 0 ; i < 4; i++) {
                    imageData.data[point + i] = currentFillColor[i];
                }

                stack.push({
                    x: pixel.x - 1,
                    y: pixel.y
                });
                stack.push({
                    x: pixel.x + 1,
                    y: pixel.y
                });
                stack.push({
                    x: pixel.x,
                    y: pixel.y - 1
                });
                stack.push({
                    x: pixel.x,
                    y: pixel.y + 1
                });
            }
        }
        this.ctx.putImageData(imageData, 0, 0);
    };


    public render() {
        const { active, className } = this.props;

        return (
            <Icon onClick={this.onClick} active={active === this.nameOfElement} className="fill__icon" classNameForWrapper={className || ""}/>
        );
    }
}