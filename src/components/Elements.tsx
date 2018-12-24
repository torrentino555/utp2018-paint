import * as React from 'react';
import PropsBarElementInterface from "./PropsBarElementInterface";

// Обязательные для переопределения поля
// nameOfElement - имя элемента

// функции для переопределения
// onActive - вызывается, когда элемент становится активным
// onUnActive - вызывается, когда элемент перестает быть активным
// onMouseDown - обработка события
// onMouseMove - обработка события
// onMouseUp - обработка события

// Уже определены:
// onClick - вызвать, когда кликнули на элементе
export default class Elements<IProps = {}> extends React.Component<IProps & PropsBarElementInterface> {
    public nameOfElement : string;
    public ctx : any;
    public onMouseDown : (e: any) => void = (e) => ({});
    public onMouseUp : (e: any) => void = (e) => ({});
    public onMouseMove : (e: any) => void = (e) => ({});
    public onActive : () => void = () => ({});
    public onUnActive : () => void = () => ({});

    public componentDidUpdate(prevProps: Readonly<IProps & PropsBarElementInterface>): void {
        if (prevProps.active === this.nameOfElement && this.props.active !== this.nameOfElement) {
            this.unbindEvents(document.getElementById("canvas"));
            this.onUnActive();
        }
    }

    public onClick = () => {
        if (this.props.active !== this.nameOfElement) {
            this.props.setActive(this.nameOfElement);

            const canvas : any = document.getElementById("canvas");
            if (canvas) {
                this.bindEvents(canvas);

                this.ctx = canvas.getContext('2d');
            }

            this.onActive();
        } else {
            this.props.setActive("");

            const canvas : any = document.getElementById("canvas");
            if (canvas) {
                this.unbindEvents(canvas);
            }

            this.onUnActive();
        }
    };

    public bindEvents = (canvas: any) => {
        canvas.addEventListener('mousedown', this.onMouseDown);
        canvas.addEventListener('mouseup', this.onMouseUp);
        canvas.addEventListener('mousemove', this.onMouseMove);
    };

    public unbindEvents = (canvas: any) => {
        canvas.removeEventListener('mousedown', this.onMouseDown);
        canvas.removeEventListener('mouseup', this.onMouseUp);
        canvas.removeEventListener('mousemove', this.onMouseMove);
    };
};