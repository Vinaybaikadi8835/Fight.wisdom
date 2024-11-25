import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import logo from "../assets/logo.png";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        const response = await fetch("https://fight-wisdom-ugmr.vercel.app/api/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          setEmail("");
        } else {
          alert(data.error || "Something went wrong.");
        }
      } catch (error) {
        console.error("Error submitting email:", error);
        alert("Email saved succesfully.");
      }
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className="landing-container">
      <div className="content-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>FIGHT WISDOM</h1>
        <p>Unleash Your Potential ↓ (coming soon)</p>
        <form onSubmit={handleEmailSubmit} className="email-form">
          <input
            type="email"
            placeholder="Enter your best email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Join Now</button>
        </form>
        
        <button onClick={() => navigate('/ecommerce')} className="shop-btn">Go to Store</button>
      </div>
    </div>
  );
};

export default LandingPage;
