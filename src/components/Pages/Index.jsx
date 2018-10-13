import React from 'react';
import Card from '../Atoms/Card.jsx';
import HelloWorld from '../Atoms/HelloWorld.jsx';
import ScatterPlotChart from '../Mols/ScatterPlotChart.jsx';

const Index = () => {
    return (
        <Card>
            <HelloWorld />
            <ScatterPlotChart />
        </Card>
    );
}

export default Index;
