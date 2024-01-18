import React from "react";

export const SideNavbarItems = ({
  food,
  setFood,
  updateMenuOpen,
  menuOpen,
}) => {
  return (
    <div className="sideMenu">
      <div className="fruit-item heading">Your Items</div>
      <div
        className={`fruit-item ${food === "available" ? "active" : ""}`}
        onClick={() => {
          setFood("available");
          updateMenuOpen(!menuOpen);
        }}
      >
        Available Fruits
      </div>
      <div
        className={`fruit-item ${food === "offer" ? "active" : ""}`}
        onClick={() => {
          setFood("offer");
          updateMenuOpen(!menuOpen);
        }}
      >
        Offers on Fruits
      </div>
      <div
        className={`fruit-item ${food === "healthy" ? "active" : ""}`}
        onClick={() => {
          setFood("healthy");
          updateMenuOpen(!menuOpen);
        }}
      >
        Most healthy Fruits
      </div>
      <div
        className={`fruit-item ${food === "upcoming" ? "active" : ""}`}
        onClick={() => {
          setFood("upcoming");
          updateMenuOpen(!menuOpen);
        }}
      >
        Upcoming Fruits
      </div>
      <div
        className={`fruit-item ${food === "outOfStock" ? "active" : ""}`}
        onClick={() => {
          setFood("outOfStock");
          updateMenuOpen(!menuOpen);
        }}
      >
        Out of Stock Fruits
      </div>
    </div>
  );
};
