import { Box } from "./Box";
import { useState, useEffect } from "react";

// const datas = [
//   {
//     id: 1,
//     title: "Fullstack Bootcamp",
//     source: "https://picsum.photos/200/300",
//     description: "hehehe",
//   },
//   {
//     id: 2,
//     title: "Fullstack ai",
//     source: "https://picsum.photos/200/300",
//   },
// ];

function BoxContainer() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos/?_limit=3"
        );
        const jsonData = await res.json();
        setDatas(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="box-container">
      {datas.map((data) => (
        <Box
          key={data.id}
          urlImage={data.thumbnailUrl}
          title={data.title}
          description="beli dong"
        />
      ))}
    </div>
  );
}

export { BoxContainer };
