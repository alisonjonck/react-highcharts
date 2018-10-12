import HelloWorld from '../../components/Atoms/HelloWorld.jsx';

describe('<HelloWorld /> tests', function () {
    it('renders Hello World', function () {
        const wrapper = mount(<HelloWorld>Hello World!</HelloWorld>);

        expect(wrapper.find(HelloWorld)).to.have.length(1);
    });
});