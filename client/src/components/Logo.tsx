import { FC } from "react";
import narnetixLogo from "../assets/narnetix-logo.png";
import { SITE_NAME } from "@/lib/constants";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo: FC<LogoProps> = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  return (
    <div className="flex items-center space-x-2">
      <img 
        src={narnetixLogo} 
        alt={SITE_NAME} 
        className={`${sizeClasses[size]}`} 
      />
      <span className="text-white font-bold text-xl">Narnetix AI</span>
    </div>
  );
};

export default Logo;
