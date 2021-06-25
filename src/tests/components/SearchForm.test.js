import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <SearchForm
        searchText={""}
        setSearchText={jest.fn()}
        onSubmit={jest.fn}
      />
    );
    expect(getByText("Search")).toHaveClass("search-form__button");
  });
});
