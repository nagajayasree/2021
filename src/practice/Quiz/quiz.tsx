import * as React from "react";
export interface QuizProps {
  title: string;
}

export interface QuizState {
  question: string;
  options: string[];
  answer: string;
  score: number;
}

class Quiz extends React.Component<QuizProps, QuizState> {
  constructor(props: QuizProps) {
    super(props);
    this.state = {
      question: "What is your national bird?",
      options: ["parrot", "peacock", "crow", "pegion"],
      answer: "peacock",
      score: 0,
    };
  }

  onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let result =
      e.currentTarget.innerText == this.state.answer ? "correct" : "wrong";
    if (e.currentTarget.innerText === this.state.answer) {
      this.setState({ score: this.state.score + 1 });
    }
    console.log(result);
  };

  render() {
    return (
      <>
        {this.props.title}
        <div>
          <p>Q:{this.state.question}</p>
          Options:
          {this.state.options.map((opt) => {
            return <button onClick={this.onButtonClick}>{opt}</button>;
          })}
          <p>
            Score:
            {this.state.score}
          </p>
        </div>
      </>
    );
  }
}

export default Quiz;
