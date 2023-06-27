import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import globe from "../../assessts/globe.png";
import shop from "../../assessts/shop.png";

const LeftSidebar = () => {
  const handleBuyButtonClick = async () => {
    // Make an API call to your server-side endpoint to initiate the payment process
    try {
      const response = await fetch("/api/razorpay/payment", {
        method: "POST",
        // You can pass any necessary data to the server-side endpoint here
        // For example, you may pass the item details, amount, etc.
        // body: JSON.stringify({ item: "example", amount: 100 }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      // After receiving the response from the server-side, you can redirect the user to the Razorpay payment page
      window.location.href = data.redirectUrl;
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClassName="active" style={{ paddingLeft: "40px" }}>
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink to="/Questions" className="side-nav-links" activeClassName="active">
            <img src={globe} alt="Globe" />
            <p style={{ paddingLeft: "10px" }}>Questions</p>
          </NavLink>
          <NavLink to="/Tags" className="side-nav-links" activeClassName="active" style={{ paddingLeft: "40px" }}>
            <p>Tags</p>
          </NavLink>
          <NavLink to="/Users" className="side-nav-links" activeClassName="active" style={{ paddingLeft: "40px" }}>
            <p>Users</p>
          </NavLink>
          <NavLink to="https://6497311cce5f6e0617761084--chic-gumption-a6267f.netlify.app/" className="side-nav-links" activeClassName="active" style={{ paddingLeft: "40px" }}>
           <img src={shop} alt="shop" width="30px" height="30px" />
            <p style={{ paddingLeft: "10px" }}>Buy</p>
            </NavLink>
        
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
