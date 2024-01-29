import React, { useEffect, useState } from "react";

export default function Marble() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      "https://gateway.marvel.com:443/v1/public/comics?apikey=15c2dcef51b9cfa7d0c2cf4c017d0494"
    )
      .then((res) => res.json())
      .then((data) => {
        setList(data.data.results);
      });
    console.log(list);
  }, []);
  return (
    <div className="w-full flex justify-center">
      <section className="max-w-[1280px] w-full h-full bg-gray-200 flex flex-wrap gap-4 justify-center py-12">
        {list?.map((item, index) => (
          <article
            key={index}
            className="w-1/5 h-[350px] border border-gray-500 flex flex-col items-center text-center"
          >
            <span className="p-2 h-[80px] flex items-center">{item.title}</span>
            <div className="w-full h-[200px] bg-blue-400">
              <img
                className="w-full h-full object-cover"
                src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                alt="이미지"
              />
            </div>
            <span className="p-2">{item.modified}</span>
          </article>
        ))}
      </section>
    </div>
  );
}
