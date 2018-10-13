import Card from '../../../components/Atoms/Card.jsx';

describe('<Card /> tests', function () {
    it('renders Card', function () {
        const wrapper = mount(<Card />);

        expect(wrapper.find(Card)).to.have.length(1);

        wrapper.unmount();
    });
});