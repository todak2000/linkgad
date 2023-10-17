import React from "react";
import { FooterText, Copyright } from "@/constant";

const Footer: React.FC = () => {
  return (
    <div className=" layout relative bottom-2 flex  flex-col items-center justify-center py-4 text-center ">
      <footer className=" text-gray-700">
        {Copyright}© {FooterText}
      </footer>
    </div>
  );
};

export default React.memo(Footer);
