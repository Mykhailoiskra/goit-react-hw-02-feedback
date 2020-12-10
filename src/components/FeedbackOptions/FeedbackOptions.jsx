import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="buttons-wrapper">
      {options.map((option) => (
        <button
          className="feedbackBtn"
          type="button"
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
