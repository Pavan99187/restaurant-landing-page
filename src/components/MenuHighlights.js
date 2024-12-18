import React from "react";
import "../styles/MenuHighlights.css";
import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";

const MenuHighlights = () => {
  const dishes = [
    {
      name: "Spaghetti Bolognese",
      description: "Traditional Italian pasta",
      image: dish1,
    },
    {
      name: "Grilled Chicken",
      description: "Served with seasonal veggies",
      image: dish2,
    },
  ];

  return (
    <section id="menu" className="menu-highlights">
      <h2>Menu Highlights</h2>
      <div className="dishes">
        {dishes.map((dish, index) => (
          <div key={index} className="dish">
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuHighlights;
