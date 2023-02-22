import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


export const FeedbackOptions = ({ feedbacks, onLeaveFeedback }) => {
feedbacks = [{ id:'good', title: 'good' }, { id:'neutral', title: 'neutral' }, { id: 'bad', title: 'bad' }];
    return <ul className={css.list}>{feedbacks.map(feedback => (<li key={feedback.id} className={css.item}><button className={css.button} name={feedback.title} type='button' onClick={onLeaveFeedback}>{feedback.title}</button></li>))}
            </ul>
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    feedbacks: PropTypes.exact({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })
}

