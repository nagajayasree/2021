export interface InputInterface {
  value?: string | number;
  type?: string;
  placeholder?: string;
  name?: string;
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
}

export const Input = ({
  type,
  value,
  name,
  placeholder,
  onChange,
}: InputInterface) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};
