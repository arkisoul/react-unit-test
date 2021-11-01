import { shallow } from "enzyme";
import Container from "./Container";

describe("test cases for container component", () => {
  const onClickHandler = jest.fn();
  const ContainerComponent = shallow(<Container onClick={onClickHandler} />);
  it("container component is render properly", () => {
    expect(ContainerComponent.getElements()).toMatchSnapshot();
  });
  
  it("container component should have a button element", () => {
    const buttonElement = ContainerComponent.find("button");
    expect(buttonElement.length).toEqual(1);
    expect(buttonElement.text()).toEqual('Click me');
  });

  it('onclick of button should update clicked state from false to true', () => {
    const buttonElement = ContainerComponent.find("button");
    expect(ContainerComponent.state('clicked')).toEqual(false)
    // buttonElement.props().onClick(onClickHandler)
    buttonElement.simulate("click");
    expect(ContainerComponent.state("clicked")).toEqual(true);
    // expect(onClickHandler).toBeCalledTimes(1);
  })

});

describe('container component input elements', () => {
  const ContainerComponent = shallow(<Container />);
  it('should have two input elements', () => {
    const inputs = ContainerComponent.find('input').length
    expect(inputs).toEqual(2)
  })
  
  it('should have one input[type="text"] element', () => {
    const inputs = ContainerComponent.find('input[type="text"]').length
    expect(inputs).toEqual(1)
  })
  
  it('should have one input[type="text"] element handle change event', () => {
    const input = ContainerComponent.find('input[type="text"]')
    input.props().onChange({
      target: { name: "username", value: "johndoe" },
    });
    expect(ContainerComponent.state('username')).toEqual("johndoe");
  })
  
  it('should have one input[type="password"] element', () => {
    const inputs = ContainerComponent.find('input[type="password"]').length
    expect(inputs).toEqual(1)
  })
  
  it('should have one input[type="password"] element handle change event', () => {
    const input = ContainerComponent.find('input[type="password"]')
    input.props().onChange({
      target: { name: "password", value: "12345678" },
    });
    expect(ContainerComponent.state('password')).toEqual('12345678')
  })
})
