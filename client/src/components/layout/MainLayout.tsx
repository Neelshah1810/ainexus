import { FC, ReactNode } from "react";
import Navbar from "../Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
