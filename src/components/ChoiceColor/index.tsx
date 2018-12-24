import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Elements from "../Elements";
import Icon from "../icon";
import './choice-color.scss';
import ColorPopup from "./color-popup";

interface IProps {
    fillColor: string,
    setFillColor: (fillColor: string) => void
}

export default class ChoiceColor extends Elements<IProps> {
    public nameOfElement = 'choice-color';
    public iconRef : any;
    public colorPopupWrapper : any;

    public setColor = (color: string) => {
        this.ctx.strokeStyle = color;
        this.props.setFillColor(color);
        this.props.setActive('');
    };

    public componentDidUpdate(): void {
        if (this.props.active === this.nameOfElement && this.iconRef) {
            this.colorPopupWrapper = document.createElement('div');
            this.colorPopupWrapper.style.position = 'absolute';
            this.colorPopupWrapper.style.zIndex = '1';
            const coords = this.iconRef.getBoundingClientRect();
            this.colorPopupWrapper.style.top = coords.bottom + "px";
            this.colorPopupWrapper.style.left = coords.left + "px";
            document.body.appendChild(this.colorPopupWrapper);

            ReactDOM.render(
                <ColorPopup fillColor={this.props.fillColor} setFillColor={this.setColor}/>,
                this.colorPopupWrapper
            );
        } else {
            if (this.colorPopupWrapper) {
                ReactDOM.unmountComponentAtNode(this.colorPopupWrapper);
                this.colorPopupWrapper.remove();
                this.colorPopupWrapper = null;
            }
        }
    }

    public refFn = (ref: any) => this.iconRef = ref;

    public render() {
        const { active, fillColor, className } = this.props;

        return (
            <Icon refFn={this.refFn} onClick={this.onClick} active={active === this.nameOfElement}
                  className={"choice-color__color_" + fillColor}  classNameForWrapper={className || ""}/>
        );
    }
}