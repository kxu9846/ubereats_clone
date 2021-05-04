const app = document.querySelector("#App")!;

type MyProps = {
  message: string;
};
type MyState = {
  [key: string]: string;
};
class App extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      inputValue: "Search..",
      dropDownValue: "Deliver now",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
        <form id="search-bar" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="inputValue"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <select
            name="dropDownValue"
            value={this.state.dropDownValue}
            onChange={this.handleChange}
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

ReactDOM.render(React.createElement(App), app);
