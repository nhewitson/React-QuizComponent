import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option) => {
              return <QuizQuestionButton button_text={answer_option[0]} />
            })}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
