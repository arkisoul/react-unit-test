import {shallow} from 'enzyme';

import Counter from './Counter'

describe('test suit for counter component', () => {
    const counter = shallow(<Counter />)
    it('should render properly', () => {
        expect(counter.getElements()).toMatchSnapshot()
    })
    
    it('should have a heading (h1) tag', () => {
        expect(counter.find('h1.count').length).toEqual(1)
    })
    
    it('should have text 4 inside h1 tag', () => {
        expect(counter.setProps({count: 4}).find('h1.count').text()).toEqual("4")
        expect(counter.setProps({count: 8}).find('h1.count').text()).toEqual("8")
    })

    it('should have a name state', () => {
        expect(counter.username).toEqual("hello");
        counter.find('button').simulate('click')
        expect(counter.username).toEqual("greet");
    })
})