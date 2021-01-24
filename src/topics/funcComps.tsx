import { FunctionComponent, ReactElement, PropsWithChildren } from "react";

type pet = {
  name: string;
};
export const Pet = ({ name }: pet) => {
  return <div>My pet name is {name}</div>;
};

export type NameProps = {
  firstName: string;
  lastName?: string;
  children?: string; //without this prop type,children will not be displayed,throws error
  //and it should be named children only,it's not accepting any other name
};
export const Name = ({ firstName, lastName, children }: NameProps) => (
  <div>
    <h3>{children}</h3>
    <p>
      Full Name : {firstName} {lastName}
    </p>
  </div>
);

interface ICar {
  name: string;
  color?: string;
}
export const Car: React.FunctionComponent<ICar> = ({
  name,
  color,
  children,
}) => (
  <div>
    <h3>{children}</h3>
    <p>Name:{name}</p>
    {color == undefined ? <p>{""}</p> : <p>Color:{color}</p>}
  </div>
);

type HomeProps = {
  name: string;
  place: string;
};
export const Home: React.FC<HomeProps> = ({ name, place, children }) => (
  <div>
    <h3>{children}</h3>
    {name},{place}
  </div>
);

type Name = { name: string };
export function MyComponent({
  name,
  children,
}: //here,it is accepting children prop only in the presence of PropsWithChildren,
//otherwise it's showing error
PropsWithChildren<Name>): React.ReactElement {
  return (
    <p>
      {children}, Hello {name}
    </p>
  );
}
