export interface ButtonInterface {
  value?: string;
  type?: any;
  children?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): any;
}
export const Button = ({ value, type, onClick, children }: ButtonInterface) => {
  return (
    <button type={type} value={value} onClick={onClick}>
      {children}
    </button>
  );
};
