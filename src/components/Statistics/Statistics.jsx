import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <ul className={css.list}>
                <li>
                    <p className={css.text}>good: {good}</p>
                </li>
                <li>
                    <p className={css.text}>neutral: {neutral}</p>
                </li>
                <li>
                    <p className={css.text}>bad: {bad}</p>
                </li>
                <li>
                    <p className={css.text}>total: {total()}</p>
                </li>
                <li>
                    <p className={css.text}>positive feedback: {positivePercentage()}</p>
                </li>
            </ul>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}