import EnzymeConfig from "../../../EnzymeConfig";
import { shallow } from "enzyme";
import React from "react";
import * as mockActions from "../actions/mockActions";
import * as mockData from "../actions/mockData";
import Books, { propsType } from "./Books";
import Button from "../Button/Button";

EnzymeConfig();

const createProps: any = () => {
  return {
    books: [],
    book: {},
    cart: [],
    actions: { InitBooksApi: mockActions.InitBooksApi },
    history: {}
  };
};

describe("Checking quantity value", () => {
  it("Books Initiated", () => {
    const wrapper = shallow(<Books {...createProps()} />);
    expect(mockActions.InitBooksApi.mock.results[0].value).toBe(
      "booksInitiated"
    );
  });

  it("Correct number of books shown", () => {
    const wrapper = shallow(
      <Books
        {...{
          ...createProps(),
          books: mockData.books
        }}
      />
    );
    expect(wrapper.find(".card")).toHaveLength(mockData.books.length);
  });

  it("When cart is empty, AddCartEmpty div is shown for all books", () => {
    const wrapper = shallow(
      <Books
        {...{
          ...createProps(),
          books: mockData.books,
        }}
      />
    );
    expect(wrapper.find(".AddCartEmpty")).toHaveLength(mockData.books.length);
  });

  it("When cart is not empty, ButtonCart div is shown for respective books", () => {
    const wrapper = shallow(
      <Books
        {...{
          ...createProps(),
          books: mockData.books,
          cart: mockData.cart
        }}
      />
    );

    expect(wrapper.find(".ButtonCart")).toHaveLength(mockData.books.length);
  });

  it("No. of button component equals books in cart", () => {
    const wrapper = shallow(
      <Books
        {...{
          ...createProps(),
          books: mockData.books,
          cart: mockData.cart
        }}
      />
    );

    expect(wrapper.find(Button)).toHaveLength(mockData.cart.length);
  });
  
  it("Add book to cart action gets called books-cartbooks times on all Add to Cart button when clicked", () => {
    const wrapper = shallow(
      <Books
        {...{
          ...createProps(),
          books: mockData.books,
          cart: mockData.cart,
          actions: {...createProps().actions, AddBookCart: mockActions.AddBookCart}
        }}
      />
    );
    wrapper.find('a').simulate('click');
    expect(mockActions.AddBookCart.mock.calls.length).toBe(mockData.books.length-mockData.cart.length);
  });
});