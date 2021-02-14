import * as React from "react";

export interface QuizProps {
  title: string;
}

export interface QuizState {
  quesArr: {
    question: string;
    options: { op1: string; op2: string; op3: string; op4: string }[];
    answer: string;
    id: number;
  }[];
  score: number;
  attempts: number;
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
          id: 678434,
        },
        {
          question: "Simple Math 2 + 3 = ?",
          options: [{ op1: "8", op2: "10", op3: "5", op4: "15" }],
          answer: "5",
          id: 344667777,
        },
        {
          question: "Which word starts with letter 'R'",
          options: [{ op1: "Orange", op2: "Green", op3: "Blue", op4: "Red" }],
          answer: "Red",
          id: 4666665,
        },
        {
          question: "What comes after number 5",
          options: [{ op1: "6", op2: "10", op3: "4", op4: "9" }],
          answer: "6",
          id: 856978,
        },
        {
          question: "During which festival does Santa come to visit?",
          options: [
            {
              op1: "Christmas",
              op2: "NewYear",
              op3: "Easter",
              op4: "Halloween",
            },
          ],
          answer: "Christmas",
          id: 589686,
        },
        {
          question: " What do you drink that comes from a cow?",
          options: [{ op1: "Juice", op2: "Water", op3: "Milk", op4: "Petrol" }],
          answer: "Milk",
          id: 68709670,
        },
        {
          question: "How many days are there in a week?",
          options: [{ op1: "8", op2: "5", op3: "7", op4: "9" }],
          answer: "7",
          id: 89214351,
        },
        {
          question: "Which day comes after Friday?",
          options: [
            { op1: "Sunday", op2: "Monday", op3: "Saturday", op4: "Wednesday" },
          ],
          answer: "Saturday",
          id: 342635556,
        },
        {
          question: "We use our eyes to ______",
          options: [{ op1: "see", op2: "hear", op3: "feel", op4: "eat" }],
          answer: "see",
          id: 42465779,
        },
        {
          question: " How many letters are there in the alphabet?",
          options: [{ op1: "24", op2: "30", op3: "28", op4: "26" }],
          answer: "26",
          id: 9243524,
        },
        {
          question: "Which animal is known as ‘Ship of the Desert?’",
          options: [{ op1: "Horse", op2: "Dog", op3: "Lion", op4: "Camel" }],
          answer: "Camel",
          id: 3241353,
        },
        {
          question: " What do we called a Baby Dog?",
          options: [{ op1: "kitten", op2: "puppy", op3: "cub", op4: "chick" }],
          answer: "puppy",
          id: 85437738,
        },
      ],
      score: 0,
      attempts: 0,
    };
  }

  getQuestions = () => {
    let arr = this.state.quesArr;
    let limit = 5;
    // console.log(arr[Math.floor(Math.random() * arr.length)]);
    const shuffled = arr.sort(() => 0.5 - Math.random()).slice(0, limit);
    // console.log(shuffled);
    this.setState({ quesArr: shuffled });
    // return shuffled;
  };

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
      console.log("wrong answer");
    }
    this.setState({ attempts: this.state.attempts + 1 });
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: this.state.score > 0 ? 0 : this.state.score,
      attempts: this.state.attempts > 0 ? 0 : this.state.attempts,
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <>
        {this.props.title}
        <p>Attempts:{this.state.attempts}</p>
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
        </div>
        {this.state.attempts == 5 ? <p>You Scored {this.state.score}/5</p> : ""}
        <button onClick={this.playAgain}>Play Again</button>
      </>
    );
  }
}

export default Quiz;
