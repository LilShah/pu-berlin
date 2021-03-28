import "./App.css";
import "react-headroom";
import { Link, animateScroll } from "react-scroll";
import Headroom from "react-headroom";
import React from "react";

const textStyle = { color: "#353636" };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headroom
          style={{
            webkitTransition: "all .5s ease-in-out",
            color: "#FFFFFF",
            backgroundColor: "#303030",
            width: "100%",
          }}
        >
          <Link
            activeClass="active"
            to="textBox1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ padding: "20px" }}
          >
            sec1
          </Link>

          <Link
            activeClass="active"
            to="sec2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            sec2
          </Link>
        </Headroom>
        <div className="textBox1" style={textStyle}>
          <p>
            The Pu-Berlin is a consulting company founded in 2008 and based in
            Berlin Germany. It’s run by the owner himself and his Team. We look
            after the highest level of trust and confidence in our work as well
            with our clients.
          </p>
          <p>
            Our goal is to offer our clients the level of security in their
            financial questions they need. We stand for trust and reliability.
            All projects are selected and, after personal contacts have been
            held, started with transparency and trust.
          </p>
          <p>
            It is not the absolute number of projects that is important for us,
            but the quality we offer to each individual client is decisive for
            us.
          </p>
          <p>
            Our success is the result of understanding client’s needs, tailoring
            corporate structures in order to satisfy the needs of our clients
            using legal entities and good tax planning both in Berlin Germany
            and abroad.
          </p>
        </div>
        <p className="sec2 " style={textStyle}></p>
      </header>
    </div>
  );
}

export default App;
