import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
import axios from "axios";
import { fetchPosts, fetchSinglePost } from "./service";

jest.mock("axios");

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn angular/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders react logo", () => {
  render(<App />);
  const imgElement = screen.getByAltText("logo");
  expect(imgElement).toBeInTheDocument();
});

test("renders the component correctly", () => {
  const output = shallow(<App />);
  expect(output.getElements()).toMatchSnapshot();
});

describe("Axios", () => {
  it("fetch posts data", async () => {
    const mockRes = {
      data: [
        {
          userId: 1,
          id: 1,
          title: "title one",
          body: "post one body",
        },
        {
          userId: 1,
          id: 2,
          title: "title two",
          body: "post two body",
        },
      ],
    };
    try {
      await axios.get.mockResolvedValue(mockRes);
      const posts = await fetchPosts();
      expect(posts).toEqual(mockRes.data);
    } catch (error) {
      
    }
  });

  it("fetch a single post", async () => {
    const mockRes = {
      data: {
        userId: 1,
        id: 1,
        title: "title one",
        body: "post one body",
      },
    };
    try {
      await axios.get.mockResolvedValue(mockRes);
      const posts = await fetchSinglePost();
      expect(posts).toEqual(mockRes.data);
    } catch (error) {
      
    }
  });
});
