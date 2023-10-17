import React, { useEffect, useState } from "react";
import { ResultText } from "@/constant";
import { PieChart, Pie } from 'recharts';

const ResultCard = () => {
  const [data, setData] = useState<any[]>([]);
  const  [resultText, setResultText] = useState<string>('');

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let fill
    if (randomNumber > 0 && randomNumber <= 40) {
      fill = '#FF8042';
      setResultText('No reputation')
    } else if (randomNumber > 40 && randomNumber <= 79) {
      fill = '#FFBB28';
      setResultText('Poor reputation')
    } else if (randomNumber > 79) {
      fill = '#00C49F';
      setResultText('Good reputation')
    } 
    const data = [
      { name: 'score', value: randomNumber, fill: fill },
      { name: 'other', value: 100 - randomNumber, fill: "#f9f9f9" }
    ];
    setData(data);
  }, []);

  return (
    <div className="py-8 px-10 m-6 relative mb-3 h-[350px] rounded-lg md:w-[1/3] shadow-2xl flex flex-col justify-center items-center">
     <p className="text-sm my-6 font-primary">{ResultText}</p>
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
     <p className="absolute top-[45%] text-3xl font-bold font-primary">{data[0]?.value}</p>
     <p className="py-6 text-lg font-bold font-primary">{resultText}</p>
    </div>
  );
};

export default React.memo(ResultCard);


// import React from "react";
// import { ResultText } from "@/constant";
// import { PieChart, Pie } from 'recharts';

// const ResultCard = () => {
//   const data = [
//     { name: 'score', value: 60, fill: "#00C49F" },
//     { name: 'other', value: 40, fill: "#f9f9f9"  }
// ];

//   return (
//     <div className="py-8 px-10 relative mb-3 h-[350px] rounded-lg md:w-[1/3] shadow-2xl">
//      <p className="text-sm">{ResultText}</p>
//      <PieChart width={300} height={300}>
//             <Pie 
//               data={data} 
//               outerRadius={150} 
//               innerRadius={50} 
//               fill="#8884d8"
//               paddingAngle={0}
//               dataKey="value"
//             />
//         </PieChart>
//     </div>
//   );
// };

// export default React.memo(ResultCard);
