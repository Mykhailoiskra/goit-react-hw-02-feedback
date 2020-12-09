import React from "react";
import Stats from "./components/Statistics/Statistics.jsx";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // addGoodFeedback = () => {
  //   this.setState((prevState) => {
  //     return { good: prevState.good + 1 };
  //   });
  // };
  // addNeutralFeedback = () => {
  //   this.setState((prevState) => {
  //     return { neutral: prevState.neutral + 1 };
  //   });
  // };
  // addBadFeedback = () => {
  //   this.setState((prevState) => {
  //     return { bad: prevState.bad + 1 };
  //   });
  // };

  onLeaveFeedback = (event) => {
    console.log(this.state[event.target.getAttribute("data-type")]);
    this.state[event.target.getAttribute("data-type")] = 1;
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    if (good !== 0) {
      return Math.round((good * 100) / total);
    } else {
      return 0;
    }
  }

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <>
        <section className="section">
          <h2>Please leave feedback</h2>
          <div className="buttons-wrapper">
            <button
              type="submit"
              data-type="good"
              onClick={this.onLeaveFeedback}
            >
              Good
            </button>
            <button
              type="submit"
              data-type="neutral"
              onClick={this.onLeaveFeedback}
            >
              Neutral
            </button>
            <button
              type="submit"
              data-type="bad"
              onClick={this.onLeaveFeedback}
            >
              Bad
            </button>
          </div>
        </section>
        <section>
          <h2>Statistics</h2>
          <Stats
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </section>
      </>
    );
  }
}
export default App;
