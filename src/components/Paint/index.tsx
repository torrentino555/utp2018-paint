import * as React from 'react';
import Bar from "../Bar";
import './paint.scss';

export const BAR_WIDTH = 100;

export default class Paint extends React.Component {
    private width : number;
    private height : number;

    constructor(props : any) {
        super(props);

        this.width = document.documentElement.clientWidth - BAR_WIDTH;
        this.height = document.documentElement.clientHeight;
    }

    public componentDidMount(): void {
    }

    public render() {
        const { width, height } = this;

        return (
            <React.Fragment>
                <div style={{
                    paddingLeft: BAR_WIDTH
                }}>
                    <canvas id="canvas" height={height} width={width}>
                        Скачайте Chrome последней версии
                    </canvas>
                </div>
                <Bar/>
            </React.Fragment>
        );
    }
}