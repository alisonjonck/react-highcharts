import ScatterPlotChart from '../../../components/Mols/ScatterPlotChart.jsx';
import HighchartsReact from 'highcharts-react-official';

describe('<ScatterPlotChart /> tests', function () {
    it('renders Hello World', function () {
        const wrapper = mount(<ScatterPlotChart/>);

        expect(wrapper.find(ScatterPlotChart)).to.have.length(1);

        wrapper.unmount();
    });

    it('renders StatterPlotChart after loading', function() {
        const wrapper = shallow(<ScatterPlotChart/>);

        wrapper.setState({
            notReady: false
        });

        wrapper.instance().forceUpdate();
        
        expect(wrapper.find(HighchartsReact)).to.have.length(1);
        
        wrapper.unmount();
    });
});