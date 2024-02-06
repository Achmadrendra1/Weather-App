import React from "react";

const Footer = () => {
  return (
    <footer className="flex mx-auto  md:w-1/2 justify-center text-white py-4">
      <p className="text-[11px] text-center">© {new Date().getFullYear()} Created By Achmad Rendra Artama </p>
    </footer>
  );
};

export default Footer;
