import React from "react";

const Footer = () => {
  return (
    <footer className="left-[50%] translate-x-[-50%] flex absolute bottom-0 text-white py-6">
      <p className="text-sm text-center">© {new Date().getFullYear()} Created By Achmad Rendra Artama </p>
    </footer>
  );
};

export default Footer;
