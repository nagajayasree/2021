export interface InputInterface {
  value?: string | number;
  type?: string;
  placeholder?: string;
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
}

export const Input = ({
  type,
  value,
  placeholder,
  onChange,
}: InputInterface) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
