import { shallow, mount } from "enzyme";
import Container from "../../../components/container/Container";

describe("test cases for container component", () => {
  it("container component is render properly", () => {
    const ContainerComponent = shallow(<Container />);
    expect(ContainerComponent.getElements()).toMatchSnapshot();
  });
  
  // it("container component should have a button element", () => {
  //   const ContainerComponent = mount(<Container />);
  //   const buttonElement = ContainerComponent.find("button");
  //   expect(buttonElement.length).toEqual(2);
  //   expect(buttonElement.at(0).text()).toEqual("Click me");
  //   expect(buttonElement.at(1).text()).toEqual("Set name");
  //   ContainerComponent.unmount()
  // });

  it("onclick of button should update clicked state from false to true", () => {
    const ContainerComponent = shallow(<Container />);
    const buttonElement = ContainerComponent.find("button");
    expect(ContainerComponent.state("clicked")).toEqual(false);
    buttonElement.simulate("click");
    expect(ContainerComponent.state("clicked")).toEqual(true);
  });

  it("onclick of button should update clicked", () => {
    const spy = jest
      .spyOn(Container.prototype, "handleClick")
      .mockImplementation((a) => a);
    const ContainerComponent = shallow(<Container />);
    const buttonElement = ContainerComponent.find("button");
    buttonElement.simulate("click");
    expect(spy).toHaveBeenCalled();
    expect(spy).toBeCalledTimes(1);
  });
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
