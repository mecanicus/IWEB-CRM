import React from 'react';
import TargetElement from "./TargetElement";
import { Glyphicon, Row, Col } from 'react-bootstrap';

export default class TargetDetail extends React.Component {
    render() {
        let targets = this.props.targetDetail;
        if(targets.length === 0) {
            return(
                <div />
            );
        }
        let target = targets.map((target2, index) => {
            let mykey = "" + index;
            return (
                <Col xs={12} md={6} lg={6}>
                <TargetElement target = {target2} key={mykey} />
                </Col>
            );
        });
        return (
            <div>
                <p id="target"><Glyphicon glyph="pushpin" className="info"/> Target</p>
                <Row>

                        {target}

                </Row>

            </div>
        );
    }
}
