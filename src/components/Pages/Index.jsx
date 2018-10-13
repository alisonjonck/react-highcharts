import React from 'react';
import Card from '../Atoms/Card.jsx';
import HelloWorld from '../Atoms/HelloWorld.jsx';
import ScatterPlotChart from '../Mols/ScatterPlotChart.jsx';

const fakeLoadData = () => {
    return new Promise(function(resolve, reject) {  
        setTimeout(() => resolve('_'), 2500);
     });
};

const Index = () => {
    return (
        <Card>
            <Card>
                <HelloWorld />
            </Card>
            <Card>
                <ScatterPlotChart loadDataAsync={fakeLoadData} />
            </Card>
        </Card>
        );
}

export default Index;
