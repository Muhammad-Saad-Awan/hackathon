import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className = "", children }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
