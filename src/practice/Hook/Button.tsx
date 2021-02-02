export interface ButtonInterface {
  value?: string;
  type?: any;
  children?: string;
  onClick?(): void;
}
export const Button = ({ value, type, onClick, children }: ButtonInterface) => {
  return (
    <button type={type} value={value} onClick={onClick}>
      {children}
    </button>
  );
};
