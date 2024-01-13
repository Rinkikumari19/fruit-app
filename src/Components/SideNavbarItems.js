import React from "react";

export const SideNavbarItems = ({ food, setFood }) => {
  return (
    <div className="sideMenu">
      <div className="fruit-item heading">Your Items</div>
      <div
        className={`fruit-item ${food === "available" ? "active" : ""}`}
        onClick={() => {
          setFood("available");
        }}
      >
        Available Fruits
      </div>
      <div
        className={`fruit-item ${food === "offer" ? "active" : ""}`}
        onClick={() => {
          setFood("offer");
        }}
      >
        Offers on Fruits
      </div>
      <div
        className={`fruit-item ${food === "healthy" ? "active" : ""}`}
        onClick={() => {
          setFood("healthy");
        }}
      >
        Most healthy Fruits
      </div>
      <div
        className={`fruit-item ${food === "upcoming" ? "active" : ""}`}
        onClick={() => {
          setFood("upcoming");
        }}
      >
        Upcoming Fruits
      </div>
      <div
        className={`fruit-item ${food === "outOfStock" ? "active" : ""}`}
        onClick={() => {
          setFood("outOfStock");
        }}
      >
        Out of Stock Fruits
      </div>
    </div>
  );
};
