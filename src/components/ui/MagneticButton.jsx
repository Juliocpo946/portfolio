import { motion } from 'framer-motion';

const MagneticButton = ({ children, className, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={className}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

export default MagneticButton;