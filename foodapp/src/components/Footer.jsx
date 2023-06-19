import React from "react";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <footer>Zomato &copy; {year}</footer>
    </div>
  );
}

export default Footer;
