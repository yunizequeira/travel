import React from "react";

const Wrapper = ({
  children,
  setShow,
}: {
  children: React.ReactNode;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/30 z-40"
      onClick={() => setShow(false)}
    >
      {children}
    </div>
  );
};

export default Wrapper;
