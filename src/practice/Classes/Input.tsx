import { ChangeEventHandler } from "react";

export type InProps = {
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ name, value, onChange }: InProps) => {
  return <input value={value} name={name} onChange={onChange} />;
};
