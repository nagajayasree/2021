export interface InputInterface {
  value?: string | number;
  type?: string;
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
}

export const Input = ({ type, value, onChange }: InputInterface) => {
  return <input type={type} value={value} onChange={onChange} />;
};
