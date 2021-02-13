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
        {
          question: "Simple Math 2 + 3 = ?",
          options: [{ op1: "8", op2: "10", op3: "5", op4: "15" }],
          answer: "5",
        },
      ],
      score: 0,
    };
  }
  onButtonClick = (opt: any) => {
    let selected = opt;
    console.log(selected);
    let ans = this.state.quesArr
      .filter((i) => i.answer === selected)
      .map((i) => {
        // console.log("answer" + ":" + i.answer);
        return i.answer;
      });
    console.log(ans.toString());
    if (selected == ans.toString()) {
      console.log("correct ans");
      this.setState({ score: this.state.score + 1 });
    } else {
      alert("wrong ans");
      console.log("wrong answer");
    }
    // let getAns = this.state.quesArr.map((item, index) => {
    //   return item.answer;
    // });
    // console.log(ans.toString());
    // let ans = this.state.quesArr.map((i) => {
    //   return i.answer;
    // });
    // let ans = this.state.quesArr.forEach((item, index) => {
    //   if (item.answer === selected) {
    //     console.log("correct");
    //   }
    //   return item.answer, index;
    // });
    // if (selected === ans) {
    //   console.log("correct");
    //   this.setState({ score: this.state.score + 1 });
    // } else {
    //   console.log("wrong");
    // }
    // console.log(ans);
    // console.log(typeof ans);
    // console.log(ans[0].toString());
    // // console.log(typeof selected);
    // console.log(ans.toString());
  };

  render() {
    return (
      <>
        {this.props.title}
        <div>
          {this.state.quesArr.map((i) => {
            return (
              <>
                <div>
                  <p>Q:{i.question}</p>
                  <p>
                    {i.options.map((opt) => {
                      return (
                        <div>
                          <button onClick={() => this.onButtonClick(opt.op1)}>
                            {opt.op1}
                          </button>
                          <button onClick={() => this.onButtonClick(opt.op2)}>
                            {opt.op2}
                          </button>
                          <button onClick={() => this.onButtonClick(opt.op3)}>
                            {opt.op3}
                          </button>
                          <button onClick={() => this.onButtonClick(opt.op4)}>
                            {opt.op4}
                          </button>
                        </div>
                      );
                    })}
                  </p>
                </div>
              </>
            );
          })}
          <p>Score:{this.state.score}</p>
        </div>
      </>
    );
  }
}

export default Quiz;
