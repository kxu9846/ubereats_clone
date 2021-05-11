const app = document.querySelector("#App")!;

import React from "react";
import ReactDOM from "react-dom";

export type SearchBarProps = {
  [key: string]: string;
};
export class SearchBar extends React.Component<SearchBarProps> {
  state: SearchBarProps = {
    inputValue: "Search..",
    dropDownValue: "Deliver now",
  };

  handleChange = (event: any) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event: any) => {
    const time =
      this.state.dropDownValue === "Deliver now"
        ? " for delivery now"
        : " for delivery later";
    app.textContent = "You searched " + this.state.inputValue + time;
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form id="search-bar" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            name="inputValue"
            value={this.state.inputValue}
            onChange={this.handleChange.bind(this)}
          />
          <select
            name="dropDownValue"
            value={this.state.dropDownValue}
            onChange={this.handleChange.bind(this)}
          >
            <option value="deliver_now">Deliver now</option>
            <option value="schedule_for_later">Schedule for later</option>
          </select>
          <input type="submit" value="Find Food" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(SearchBar), app);
