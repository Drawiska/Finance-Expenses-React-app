import React from 'react';

import DiagramBar from './DiagramBar';
import './Diagram.css';

const Diagram = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return(
        <div className="diagram">
        {props.dataPoints.map((dataPoint) => (
            <DiagramBar 
                key={dataPoint.label} //id
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                label={dataPoint.label}
            />
        ))}
        </div>
    )
};

export default Diagram;