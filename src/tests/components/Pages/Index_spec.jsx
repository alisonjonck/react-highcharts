import Index from '../../../components/Pages/Index.jsx';

describe('<Index /> tests', function () {
    it('renders Index', function () {
        const wrapper = mount(<Index />);

        expect(wrapper.find(Index)).to.have.length(1);
    });
});