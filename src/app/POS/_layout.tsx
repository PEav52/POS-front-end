// src/app/POS/_layout.tsx
import { ReactNode } from "react";
import { FaGlobe } from "react-icons/fa"; // Import FontAwesome icon

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
