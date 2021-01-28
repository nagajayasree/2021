import * as React from "react";
export interface AnimalI {
  name?: string;
  age?: number;
  legs?: number;
  status?: string;
  introduce?: () => string;
}

export class Animal extends React.Component<AnimalI, {}> {
  constructor(props: AnimalI) {
    super(props);
  }
  introduce = () => {
    return `${this.props.name} is ${this.props.age}years old,has ${this.props.legs} legs and it is ${this.props.status}`;
  };

  render() {
    return (
      <div>
        <p>{this.introduce()}</p>
      </div>
    );
  }
}
