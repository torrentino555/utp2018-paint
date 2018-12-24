import * as React from 'react';
import Icon from "../icon";

interface IProps {
    fillColor: string,
    setFillColor: (fillColor: string) => void
}

export default class ColorPopup extends React.Component<IProps> {
    public render() {
        const { fillColor, setFillColor } = this.props;
        const colors = ['black', 'white', 'red', 'orange', 'green', 'blue', 'indigo', 'violet'];

        return (
            <div className="choice-color">
                {
                    colors.map((item: string, i : number) => {
                        if (fillColor !== item) {
                            return (
                                <Icon key={i} className={"choice-color__inline-block choice-color__color_" + item}
                                      onClick={() => setFillColor(item)}
                                      active={false}/>
                            );
                        } else {
                            return "";
                        }
                    })
                }
            </div>
        );
    }
}