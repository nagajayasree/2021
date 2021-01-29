import * as React from "react";

interface IPerson {
  name?: string;
  age?: number;
  place?: string;
}

const personContext = React.createContext<IPerson | null>(null);

const PersonDetails = () => {
  const personCtxt = React.useContext(personContext);
  return (
    <div>
      Name:{personCtxt?.name},Age:{personCtxt?.age},Place:{personCtxt?.place}
    </div>
  );
};

const personInfo: IPerson = {
  name: "personName",
  age: 26,
  place: "xyz",
};
export class Person extends React.Component<IPerson> {
  render() {
    return (
      <div>
        <personContext.Provider value={personInfo}>
          <PersonDetails />
        </personContext.Provider>
      </div>
    );
  }
}

export class Person2 extends React.Component<IPerson> {
  render() {
    return (
      <div>
        <personContext.Provider
          value={{ name: "abc", age: 25, place: "fdgfj" }}
        >
          <PersonDetails />
        </personContext.Provider>
      </div>
    );
  }
}

export class PersonProps extends React.Component<IPerson> {
  render() {
    return (
      <div>
        <personContext.Provider value={this.props}>
          <PersonDetails />
        </personContext.Provider>
      </div>
    );
  }
}
