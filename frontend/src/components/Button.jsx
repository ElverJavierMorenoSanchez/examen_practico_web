import clsx from "clsx";
import React from "react";

const Button = ({ children, variant, onClick, className }) => {
  return (
    <button
      className={clsx(
        "rounded-full shadow-md hover:shadow-lg inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none text-black disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-9 px-8 ",
        variant === "success" && "bg-green-400",
        variant === "danger" && "bg-red-400",
        variant === "warning" && "bg-yellow-400",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
