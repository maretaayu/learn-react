/* eslint-disable react/prop-types */

import { Card } from "./Card";
import { useState, useEffect } from "react";

// const dummyData = [
//   {
//     id: 1,
//     label: "beli",
//   },
//   {
//     id: 2,
//     label: "beli2",
//   },
// ];

function CardContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos/?_limit=2"
        );
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((card) => (
        <div key={card.id}>
          <Card
            title="Fullstack Bootcamp"
            source={card.thumbnailUrl}
            label={card.title}
            description="beli dong"
          />
        </div>
      ))}
    </div>
  );
}

export { CardContainer };
