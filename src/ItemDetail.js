import React, { useState, useEffect } from "react";
import "./App.css";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await data.json();
    setItem(item.data.item);
  };
  return (
    <div>
      <h3>Name: {item.name}</h3>
      <img src={item.images.icon} alt="Fortnite api calls" />
    </div>
  );
}

export default ItemDetail;
