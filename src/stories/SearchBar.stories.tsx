import React from "react";
import { Story, Meta, storiesOf } from "@storybook/react";
// import { SearchBar, SearchBarProps } from "../components/SearchBar";

const stories = storiesOf("Landing Page", module);

stories.add("Search Bar", () => {
  return (
    <div>
      <h1>Search bar goes here</h1>
      {/* <SearchBar /> */}
    </div>
  );
});
