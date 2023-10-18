import React, { useEffect, useState } from "react";
import { ResultText } from "@/constant";
import { PieChart, Pie } from "recharts";

const ResultCard = ({url}: { url: string}) => {
  const [data, setData] = useState<any[]>([]);
  const [resultText, setResultText] = useState<string>("");

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let fill;
    if (randomNumber > 0 && randomNumber <= 40) {
      fill = "#FF8042";
      setResultText("No reputation");
    } else if (randomNumber > 40 && randomNumber <= 79) {
      fill = "#FFBB28";
      setResultText("Poor reputation");
    } else if (randomNumber > 79) {
      fill = "#00C49F";
      setResultText("Good reputation");
    }
    const data = [
      { name: "score", value: randomNumber, fill: fill },
      { name: "other", value: 100 - randomNumber, fill: "#f9f9f9" },
    ];
    setData(data);
  }, []);

  return (
    <div className="relative m-6 mb-3 flex flex-col items-center justify-center rounded-lg py-8 px-10 shadow-2xl md:w-[1/3]">
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
      <p className="absolute top-[45%] font-primary text-3xl font-bold">
        {data[0]?.value}
      </p>
      <p className="py-6 font-primary text-sm font-bold">{url}</p>
      <p className="py-6 font-primary text-lg font-bold">{resultText}</p>
    </div>
  );
};

export default React.memo(ResultCard);
