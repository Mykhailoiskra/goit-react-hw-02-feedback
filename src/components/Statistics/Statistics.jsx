import PropTypes from "prop-types";

function Statisctics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Posivite feedback: {positivePercentage}%</p>
    </>
  );
}

export default Statisctics;

Statisctics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
