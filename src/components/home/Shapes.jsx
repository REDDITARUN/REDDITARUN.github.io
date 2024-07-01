import React, { useEffect } from 'react';
import { FaRobot, FaChartLine, FaNetworkWired } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { GiRobotGrab } from "react-icons/gi";
import { MdGraphicEq } from "react-icons/md";
import { FaPenNib } from "react-icons/fa6";
import { PiGraphFill } from "react-icons/pi";
import { RiRobot2Line } from "react-icons/ri";
import { IoIosApps } from "react-icons/io";
import { BiCodeAlt } from "react-icons/bi"; 





const Shapes = () => {
  useEffect(() => {
    const shapes = document.querySelectorAll('.shape');

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const movementFactor = 1.5; // Adjust this factor to increase or decrease movement

      shapes.forEach((shape) => {
        const speed = shape.getAttribute('data-speed');
        const x = ((window.innerWidth - clientX * speed) / 100) * movementFactor;
        const y = ((window.innerHeight - clientY * speed) / 100) * movementFactor;

        shape.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='shapes'>
      <div className="shape s1" data-speed="2">
        <PiGraphFill size={30} color="#D0D0C4" />
      </div>

      <div className="shape s2" data-speed="3">
        <FaChartLine size={30} color="#D0D0C4" />
      </div>

      <div className="shape s3" data-speed="1.5">
        <MdGraphicEq size={30} color="#D0D0C4" />
      </div>

      <div className="shape s4" data-speed="2.5">
        <GiArtificialIntelligence size={30} color="#D0D0C4" />
      </div>

      <div className="shape s5" data-speed="2">
        <RiRobot2Line size={30} color="#D0D0C4" />
      </div>

      <div className="shape s6" data-speed="3.5">
        <BiCodeAlt size={30} color="#D0D0C4" />
      </div>

      <div className="shape s7" data-speed="1.7">
        <FaPenNib size={30} color="#D0D0C4" />
      </div>

      <div className="shape s8" data-speed="2.2">
        <GiArtificialIntelligence size={30} color="#D0D0C4" />
      </div>

      <div className="shape s9" data-speed="1.8">
        <GiRobotGrab size={30} color="#D0D0C4" />
      </div>

      <div className="shape s10" data-speed="1.3">
        <IoIosApps size={30} color="#D0D0C4" />
      </div>

      <div className="shape s11" data-speed="1.5">
        <FaNetworkWired size={30} color="#D0D0C4" />
      </div>
    </div>
  );
};

export default Shapes;
