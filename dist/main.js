"use strict";
const app = document.querySelector("#App");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            event.preventDefault();
            this.setState({ [event.target.name]: event.target.value });
        };
        this.handleSubmit = (event) => {
            const time = this.state.dropDownValue === "Deliver now"
                ? " for delivery now"
                : " for delivery later";
            app.textContent = "You searched " + this.state.inputValue + time;
            event.preventDefault();
        };
        this.state = {
            inputValue: "Search..",
            dropDownValue: "Deliver now",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("form", { id: "search-bar", onSubmit: this.handleSubmit },
                React.createElement("input", { type: "text", name: "inputValue", value: this.state.inputValue, onChange: this.handleChange }),
                React.createElement("select", { name: "dropDownValue", value: this.state.dropDownValue, onChange: this.handleChange },
                    React.createElement("option", { value: "deliver_now" }, "Deliver now"),
                    React.createElement("option", { value: "schedule_for_later" }, "Schedule for later")),
                React.createElement("input", { type: "submit", value: "Find Food" }))));
    }
}
ReactDOM.render(React.createElement(App), app);
//# sourceMappingURL=main.js.map