import * as React from "react";
type Props = { children: React.ReactNode; type: "button" | "submit" };
export type Ref = HTMLButtonElement;
export const FancyButton = React.forwardRef<Ref, Props>((props, ref) => (
  <button ref={ref} type={props.type}>
    {props.children}
  </button>
));

export class Input extends React.Component {
  private input = React.createRef<HTMLInputElement>();
  componentDidMount() {
    if (this.input.current) {
      this.input.current.focus();
    }
  }
  render() {
    return (
      <form>
        <input ref={this.input} type="type" />
      </form>
    );
  }
}
