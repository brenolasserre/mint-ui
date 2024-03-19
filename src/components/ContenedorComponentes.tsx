import React from "react";

interface ContenedorProps {
  children: React.ReactNode;
}

const Contenedor = ({ children }: ContenedorProps) => {
  return (
    <div className="bg-[#090E0C] max-w-22 w-full px-24 py-24 rounded-lg relative flex flex-col border border-[#121f1a]">
      <div className="absolute top-0 right-0 p-4">
        <a href="/" className="text-white hover:text-[#c7c3ff] transition ease">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </a>
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
};

export default Contenedor;
