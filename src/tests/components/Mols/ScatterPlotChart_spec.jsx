import ScatterPlotChart from '../../../components/Mols/ScatterPlotChart.jsx';

describe('<ScatterPlotChart /> tests', function () {
    it('renders Hello World', function () {
        const wrapper = mount(<ScatterPlotChart>Hello World!</ScatterPlotChart>);

        expect(wrapper.find(ScatterPlotChart)).to.have.length(1);
    });
});