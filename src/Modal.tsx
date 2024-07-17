import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const modalVariants = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: { opacity: 1, y: "0" },
  exit: { opacity: 0, y: "100vh" },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      <motion.div
        className="relative p-8 bg-white rounded-lg shadow-lg"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
      >
        <button
          className="absolute top-0 right-0 mt-4 mr-4"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
