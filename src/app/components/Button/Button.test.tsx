import EnzymeConfig from "../../../EnzymeConfig";
import { shallow } from "enzyme";
import Button from "./Button";
import React from "react";
import * as mockActions from "../actions/mockActions";
EnzymeConfig();

const quan = 1;
const id = 1;

const createProps = (quantity = quan) => {
  return {
    uprops: {
      actions: {
        DeleteBookCart: mockActions.DeleteBookCart,
        DecreBook: mockActions.DecreBook,
        IncreBook: mockActions.IncreBook
      }
    },
    id: id,
    quantity
  };
};

describe("Checking quantity value", () => {
  it("Quantity is showing correctly", () => {
    const wrapper = shallow(<Button {...createProps()} />);
    expect(wrapper.contains(<span className="quantity">{quan}</span>)).toEqual(
      true
    );
  });

  it("Delete action is called when quantity is 1 and decreased further", () => {
    const wrapper = shallow(<Button {...createProps(1)} />);
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(mockActions.DeleteBookCart.mock.results[0].value).toBe("deleted");
  });

  it("Decrement action when quantity is more than 1", () => {
    const wrapper = shallow(<Button {...createProps(2)} />);
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(mockActions.DecreBook.mock.results[0].value).toBe("decremented");
  });

  it("Increment action works", () => {
    const wrapper = shallow(<Button {...createProps()} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(mockActions.IncreBook.mock.results[0].value).toBe("incremented");
  });
});
