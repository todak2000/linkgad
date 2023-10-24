import React, { useEffect, useState } from "react";
import { ResultText } from "@/constant";
import { PieChart, Pie } from "recharts";
import {TbServer} from 'react-icons/tb';
import { AiFillCloseCircle } from 'react-icons/ai'
type Props = {
  header: string
  text: string
}

const ShortCard = ({ header, text }: Props) => {


  return (
    <div className="relative">
   <svg width="257" height="271" viewBox="0 0 257 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.74875 70.7378C7.74875 50.5336 7.74875 40.4315 14.0254 34.1548C20.302 27.8782 30.4041 27.8782 50.6083 27.8782H214.14C234.345 27.8782 244.447 27.8782 250.723 34.1548C257 40.4315 257 50.5336 257 70.7378V219.569C257 243.814 257 255.936 249.468 263.468C241.936 271 229.814 271 205.568 271H59.1802C34.9352 271 22.8127 271 15.2807 263.468C7.74875 255.936 7.74875 243.814 7.74875 219.569V70.7378Z" fill="#FFA500"/>
<rect x="3.33794" y="13.9418" width="250.108" height="243.979" rx="21.8584" fill="white" stroke="#0000FF" stroke-width="0.857192"/>
<path d="M0 21.4298C0 9.59445 9.59445 0 21.4298 0H227.821C239.657 0 249.251 9.59445 249.251 21.4298V47.545C249.251 61.7474 237.738 73.2608 223.535 73.2608H25.7157C11.5133 73.2608 0 61.7474 0 47.545V21.4298Z" fill="#F2B038"/>
</svg>
<div className="absolute top-1/3 w-full p-6 flex flex-col justify-center items-center">
<p className="font-primary text-lg font-bold">{header}</p>
<p className="font-primary text-sm mt-4 font-normal">{text}</p>
</div>

    </div>
  );
};

export default React.memo(ShortCard);
