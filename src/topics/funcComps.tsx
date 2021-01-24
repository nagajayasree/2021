import { FunctionComponent } from "react";

type pet = {
  name: string;
};
export const Pet = ({ name }: pet) => {
  return <div>My pet name is {name}</div>;
};

export type NameProps = { firstName: string; lastName?: string };
export const Name = ({ firstName, lastName }: NameProps) => (
  <div>
    <p>
      Full Name : {firstName} {lastName}
    </p>
  </div>
);

export interface ICar {
  name: string;
  color?: string;
}
export const Car: FunctionComponent<ICar> = ({ name, color }) => (
  <div>
    <h3>Car Info</h3>
    <p>Name:{name}</p>
    {color == undefined ? <p>{""}</p> : <p>Color:{color}</p>}
  </div>
);
