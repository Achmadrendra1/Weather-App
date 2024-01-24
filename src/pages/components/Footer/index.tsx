import React from "react";

const Footer = () => {
  return (
    <footer className="bg-glass text-white mt-12 p-4 text-center">
      <div className="flex flex-col items-center justify-center mb-4 gap-5">
        <p>
          Data cuaca & gempa disediakan oleh{" "}
          <a href="https://www.bmkg.go.id/" target="_blank" rel="noopener noreferrer">
            BMKG
          </a>
        </p>
        <img src="https://data.bmkg.go.id/include/assets/img/logo-bmkg.svg" alt="BMKG Logo" className="h-20 md:mr-2 mb-2 md:mb-0" />
        <p className="text-sm">Created By Achmad Rendra Artama © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
