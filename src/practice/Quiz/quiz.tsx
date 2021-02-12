import * as React from "react";
export interface QuizProps {
  title: string;
}

export interface QuizState {
  quesArr: {
    question: string;
    options: { op1: string; op2: string; op3: string; op4: string }[];
    answer: string;
  }[];
  score: number;
}

class Quiz extends React.Component<QuizProps, QuizState> {
  constructor(props: QuizProps) {
    super(props);
    this.state = {
      quesArr: [
        {
          question: "What is your national bird?",
          options: [
            { op1: "parrot", op2: "peacock", op3: "crow", op4: "pegion" },
          ],
          answer: "peacock",
        },
      ],

      score: 0,
    };
  }

  onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let selected = e.currentTarget.innerText;
    let ans = this.state.quesArr.map((i) => {
      return i.answer;
    });
    if (selected === ans.toString()) {
      this.setState({ score: this.state.score + 1 });
      console.log("correct");
    }
    // console.log(selected);
    // console.log(typeof selected);
    // console.log(typeof ans);
    // console.log(ans.toString());
  };

  render() {
    return (
      <>
        {this.props.title}
        <div>
          <p>
            Q:
            {this.state.quesArr.map((i) => {
              return i.question;
            })}
          </p>
          Options:
          {this.state.quesArr.map((i) => {
            return i.options.map((o) => {
              return (
                <div>
                  <button onClick={this.onButtonClick}>{o.op1}</button>
                  <button onClick={this.onButtonClick}>{o.op2}</button>
                  <button onClick={this.onButtonClick}>{o.op3}</button>
                  <button onClick={this.onButtonClick}>{o.op4}</button>
                </div>
              );
            });
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
