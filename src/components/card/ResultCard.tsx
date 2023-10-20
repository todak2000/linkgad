import React, { useEffect, useState } from "react";
import { ResultText } from "@/constant";
import { PieChart, Pie } from "recharts";
import {TbServer} from 'react-icons/tb';
import { AiFillCloseCircle } from 'react-icons/ai'
type resultCardProps = {
  result?: string
  score: number
  status?: number
  url?: string
  error?: string
}
type resProps = {
  result: resultCardProps
  onClose: ()=> void
}
const ResultCard = ({ result, onClose }: resProps) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string>('');
  const [resultText, setResultText] = useState<string>("");

  useEffect(() => {
    if (result?.status !== 500){
      let fill;
      if (result?.score > 0 && result?.score <= 40) {
        fill = "#FF8042";
        setResultText("No reputation");
      } else if (result?.score > 40 && result?.score <= 79) {
        fill = "#FFBB28";
        setResultText("Poor reputation");
      } else if (result?.score > 79) {
        fill = "#00C49F";
        setResultText("Good reputation");
      }
      const data = [
        { name: "score", value: result?.score, fill: fill },
        { name: "other", value: 100 - result?.score, fill: "#f9f9f9" },
      ];
      setData(data);
    }
    else if (result?.error){
      setError(result?.error)
    }
    
  }, [])

  return (
    <div className="relative m-6 mb-3 flex flex-col items-center justify-center rounded-lg py-8 px-10 shadow-2xl md:w-[1/3]">
      <AiFillCloseCircle className="text-2xl text-red-300 absolute top-1 right-2 cursor-pointer" onClick={onClose}/>
      {error !== '' ? 
      <div className="flex flex-col justify-center items-center p-6">
        <TbServer className="text-6xl text-gray-500" />
        <p className="my-6 font-primary text-sm text-gray-500 text-center">An error occured! Please try again</p>
      </div>
      :
      <>
      <p className="my-6 font-primary text-sm text-center">{ResultText}</p>
      <PieChart width={250} height={250} className="relative">
        <Pie
          data={data}
          outerRadius={100}
          innerRadius={50}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        />
      </PieChart>
      <p className="absolute top-[40%] font-primary text-3xl font-bold">
        {result?.score}%
      </p>
      <p className="py-6 font-primary text-sm font-bold">{result?.url}</p>
      <p className="py-6 font-primary text-lg font-bold">{resultText}</p>
      </>
      }
    </div>
  );
};

export default React.memo(ResultCard);
