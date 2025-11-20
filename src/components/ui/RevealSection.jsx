import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RevealSection = ({ children, className = "", delay = 0, type = "default" }) => {
  const ref = useRef(null);
  
  // CAMBIO CLAVE: once: false permite que la animación se ejecute cada vez que el elemento entra/sale
  const isInView = useInView(ref, { once: false, margin: "-10% 0px" });

  // Definimos las variantes de animación según el tipo
  const variants = {
    default: { 
      hidden: { opacity: 0, y: 50 }, 
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay } }
    },
    "slide-right": { 
      hidden: { opacity: 0, x: -50 }, 
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "circOut", delay } } 
    },
    "slide-left": { 
      hidden: { opacity: 0, x: 50 }, 
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "circOut", delay } } 
    },
    scale: { 
      hidden: { opacity: 0, scale: 0.9 }, 
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut", delay } } 
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1, delay } }
    }
  };

  const selectedVariant = variants[type] || variants.default;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Esto hace que vaya "para atrás" (hidden) cuando sales del área
      variants={selectedVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;