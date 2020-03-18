import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, box }) => {

    const isCalculated = box.isCalculated;

    if(isCalculated) {
        return (
            <div className="center ma">
                <div className="absolute mt2">
                    <img id="faceRecognition-image" className="br2 shadow-5" src={ imageURL } alt=" " width="400px" height="auto" />
                        <div className="bounding-box" style={ { top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol } } >
                            <div className="bounding-box-concepts">
                                <div className="bounding-box__concept" title={ `${ box.age } : ${ box.probability }` }>
                                    <span>{ box.age }</span>
                                    <span style={ { fontSize: '0.625rem', marginLeft: '0.5rem' } }>{ `% ${ box.probability }` }</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className="center ma">
                <div className="absolute mt2">
                    <img id="faceRecognition-image" className="br2 shadow-5" src={ imageURL } alt=" " width="400px" height="auto" />
                </div>
            </div>
        );
    }
}

export default FaceRecognition;