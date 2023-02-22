import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notofication/Notification";
import css from "./App.module.css";

export const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
 

    const handleClick = event => {
        const { name } = event.target;
        
        switch (name) {
            case "good":
                setGood(prevState => prevState + 1)
                break;
            case "neutral":
                setNeutral(prevState => prevState + 1)
                break;
            case "bad":
                setBad(prevState => prevState + 1)
                break;
            
            default:
                return;
        }
  }

    const countTotalFeedback = () => {
      return good + neutral + bad;
  }
        
    const countPositiveFeedbackPercentage = () => {
      return Math.floor(good / (good + neutral + bad) * 100) + '%'
  }

      return (
          <div className={css.container}>
              <Section title="Please leave feedback">
                  <FeedbackOptions options={["good", "bad", "neutral"]} onLeaveFeedback={handleClick}/>
              </Section>

              <Section title="Statistics">
                  {countTotalFeedback() >= 1
                  ?
                  <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={countTotalFeedback}
                  positivePercentage={countPositiveFeedbackPercentage} />
                  :
                  <Notification message="There is no feedback" />}
              </Section>
          </div>
      )
   
};
