"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, .hover-target');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div 
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    />
  );
}
