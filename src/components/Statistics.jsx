import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

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
    <section className={styles.statistics}>
      {stats.length > 0 ? (
        <>
          {title && <h2 className={styles.title}>{title}</h2>}
          <ul className={styles['stat-list']}>
            {stats.map(stat => (
              <li
                key={stat.id}
                className={styles.item}
                // style={{ backgroundColor: getRandomRGBAColor() }}
              >
                <span className={styles.label}>{stat.label}</span>
                <span className={styles.percentage}>{stat.percentage}%</span>
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
