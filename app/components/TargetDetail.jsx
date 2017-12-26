import React from 'react';
import TargetElement from "./TargetElement";

export default class TargetDetail extends React.Component {
    render() {
        let targets = this.props.targetDetail;
        let target = targets.map((target2, index) => {
            let mykey = "" + index;
            return (
                <TargetElement target = {target2} key={mykey} />
            );
        });
        return (
            <div>
                <h4>
                    {target}
                </h4>
            </div>
        );
    }
}
