import { useState, useEffect } from "react";

const Parallax = ({ children, value }) => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        transform: `translateY(${offset * value}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
