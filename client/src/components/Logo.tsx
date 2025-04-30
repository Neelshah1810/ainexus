import { FC } from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo: FC<LogoProps> = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-lg",
    md: "w-10 h-10 text-xl",
    lg: "w-12 h-12 text-2xl",
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center`}
      >
        <span className="text-white font-bold">A</span>
      </div>
      <span className="text-white font-bold text-xl">AgentAI</span>
    </div>
  );
};

export default Logo;
