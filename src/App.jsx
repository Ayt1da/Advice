import React from "react";
import axios from "axios";
import "./styles.css";
class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.getAdvice();
  }
  getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({
          advice,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          advice: "Something went wrong, looks like no advice for you",
        });
      });
  };
  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="advice">{this.state.advice}</h1>
          <button className="btn" onClick={this.getAdvice}>
            More Advice!
          </button>
        </div>
      </div>
    );
  }
}
export default App;
