import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

export const Msg = ({ children }: any) => {
  const el = useRef(document.createElement("div"));
  useEffect(() => {
    const current = el.current;
    modalRoot.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, []);
  return createPortal(children, el.current);
};

export function PopUp() {
  const [showMsg, setShowMsg] = React.useState(false);
  return (
    <div>
      {showMsg && (
        <Msg>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              height: "100px",
              width: "100px",
              background: "rgba(0,0,0,0.1)",
              zIndex: 999,
            }}
          >
            Msg
            <button
              style={{ background: "papyawhip" }}
              onClick={() => setShowMsg(false)}
            >
              close
            </button>
          </div>
        </Msg>
      )}
      <button onClick={() => setShowMsg(true)}>Show Msg</button>
    </div>
  );
}
