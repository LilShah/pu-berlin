import React from "react";
function Footer() {
  return (
    <footer className="py-10  text-white bg-footer object-bottom">
      <div className="flex flex-row px-44 object-bottom">
        <div>
          <h1 className="text-xl  text-left  font-bold  pb-10">Address</h1>
          <p>Erasmusstrasse 10553 Berlin</p>
        </div>
        <div className="px-20">
          <h1 className="text-xl text-left  font-bold pb-10">Contact</h1>
          <p>Email: info@pu-berlin.com</p>
          <p>Phone: +49 30 2356 8139</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
