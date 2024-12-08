"use client"

import faq from "@config/faq.json"
import { useState } from "react";

export default function Faq() {
  const [data, setData] = useState(faq)

  const handleStateChange = (index) => {
    const updatedFaqData = data.map((item, i) =>
      i === index ? { ...item, state: !data[index].state } : item
    );
    setData(updatedFaqData);
  };



  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="container mb-2">
          <div className="flex border-2 border-black p-2 rounded-lg cursor-pointer" onClick={() => handleStateChange(index)}>
            <h4 className="">{item.question}</h4>
            <svg className={`h-8 w-8 font-bold ml-8 text-black fill-current transition-all duration-500 ${item.state && "rotate-180"} `} viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
          <p className={`w-11/12 ml-3 font-bold border-black overflow-hidden rounded-b-lg transition-all duration-500 ${item.state ? "p-2 h-fit border-x-2 border-b-2" : "p-0 h-0 border-x-0 border-b-0"}`}>{item.answer}</p>
        </div>
      ))}
    </>
  );
}
