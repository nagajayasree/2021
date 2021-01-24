import { FunctionComponent } from "react";

export type NameProps = { firstName: string; lastName: string };
export const Name = ({ firstName, lastName }: NameProps) => (
  <div>
    <p>
      Full Name : {firstName} {lastName}
    </p>
  </div>
);

export interface ICar {
  name: string;
  color: string;
}
export const Car: FunctionComponent<ICar> = ({ name, color }) => (
  <div>
    <p>
      Car Name : {name},Color: {color}
    </p>
  </div>
);
