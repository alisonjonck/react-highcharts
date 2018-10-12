import React, {Component} from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import Card from '../Atoms/Card.jsx';
import { PacmanLoader } from 'react-spinners';

class ColumnChart extends Component {

    constructor() {
        super();
        this.state = {
            notReady: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                notReady: false
            });
     
        }, 2000)
    }
    
    render() {
        const me = this, notReady = me.state.notReady,
            style = {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            };
    
        if (notReady)
            return (
                <div style={style}>
                    <PacmanLoader
                        className={'override'}
                        sizeUnit={"px"}
                        size={50}
                        color={'green'}
                        loading={true}
                    />
                </div>
        );
        
        return (
            <p>{'There will be a chart here!'}</p>
        );
    }
};

export default ColumnChart;