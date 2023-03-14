import PropTypes from 'prop-types';
import './Statistics.css';

//generate random color
// const getRandom = (min, max) => {
//   return Math.round(Math.random() * (max - min)) + min;
// };

// const getRandomRGBAColor = (min = 50, max = 135, alpha = 1) => {
//   return `rgba(${getRandom(min, max)}, ${getRandom(min, max)}, ${getRandom(
//     min,
//     max
//   )}, ${alpha})`;
// };

const Statistics = ({ title, stats = [] }) => {
  return (
    <section className="statistics">
      {stats.length > 0 ? (
        <>
          {title && <h2 className="title">{title}</h2>}
          <ul className="stat-list">
            {stats.map(stat => (
              <li
                key={stat.id}
                className="item"
                // style={{ backgroundColor: getRandomRGBAColor() }}
              >
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}%</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>NO RECORD</p>
      )}
    </section>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
