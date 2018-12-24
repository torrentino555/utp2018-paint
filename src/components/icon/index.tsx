import * as React from 'react';
import './icon.scss';

interface IProps {
    className: string,
    classNameForWrapper?: string,
    onClick: any,
    active: boolean,
    refFn?: (ref: any) => void
}

export default class Icon extends React.Component<IProps> {
    public render() {
        const { className, onClick, active, refFn, classNameForWrapper } = this.props;

        return (
            <div className={"icon" + (active ? " icon__active" : "") + " " + classNameForWrapper} onClick={onClick} ref={ refFn ? refFn : () => ({}) }>
                <div className={"icon__image " + className}/>
            </div>
        );
    }
}