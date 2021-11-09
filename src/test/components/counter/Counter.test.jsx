import React from "react";
import Enzyme from "enzyme";
import renderer from "react-test-renderer";
import CounterComponent from "../../../components/counter/Counter";
import axios from "axios";
import { act } from "@testing-library/react";

jest.mock("axios");

describe("<CounterCompnent />", () => {
  let setState;

  const waitForComponentToPaint = async (wrapper) => {
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      wrapper.update();
    });
  };

  let component;
  it("should render post data", async () => {
    const mockRes = {
      data: {
        title: "Post title",
        userId: 1,
        body: "Post body",
        id: 1,
      },
    };
    await axios.get.mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve(mockRes);
        })
    );
    setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    component = Enzyme.mount(<CounterComponent />);
    expect(component.debug()).toMatchSnapshot();
    await waitForComponentToPaint(component);
    expect(setState).toHaveBeenCalledWith({title: "Post title", author: 1});
    expect(component.debug()).toMatchSnapshot();
  });
});

// describe("<CounterComponent />", () => {
//   let wrapper;
//   let setState;

//   beforeEach(() => {
//     setState = jest.fn();
//     const useStateSpy = jest.spyOn(React, "useState");
//     useStateSpy.mockImplementation((init) => [init, setState]);
//     wrapper = Enzyme.shallow(<CounterComponent />);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   describe("Count Up", () => {
//     it("calls setCount with count + 1", () => {
//       wrapper.find("#count-up").props().onClick();
//       expect(setState).toHaveBeenCalledWith(1);
//     });
//   });

//   describe("Count Down", () => {
//     it("calls setCount with count - 1", () => {
//       wrapper.find("#count-down").props().onClick();
//       expect(setState).toHaveBeenCalledWith(-1);
//     });
//   });

//   describe("Zero", () => {
//     it("calls setCount with 0", () => {
//       wrapper.find("#zero-count").props().onClick();
//       expect(setState).toHaveBeenCalledWith(0);
//     });
//   });
// });

// describe("various state of component", () => {
//   it("should renders", () => {
//     const component = renderer.create(<CounterComponent />);

//     let tree = component.toJSON()
//     expect(tree).toMatchSnapshot();

//     tree.props.incrementCount();

//     tree = component.toJSON()
//     expect(tree).toMatchSnapshot();

//     tree.props.incrementCount();

//     tree = component.toJSON()
//     expect(tree).toMatchSnapshot();

//     tree.props.decrementCount();

//     tree = component.toJSON()
//     expect(tree).toMatchSnapshot();

//     tree.props.resetCount();

//     tree = component.toJSON()
//     expect(tree).toMatchSnapshot();
//   });
// });
