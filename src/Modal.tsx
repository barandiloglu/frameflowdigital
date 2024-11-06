import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './css/ContactUs.css'; 
import { IoIosClose } from "react-icons/io";
import ThreeDotsWave from './ThreeDotsWave';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const contactVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
  exit: { scale: 0 },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showServiceSelection, setShowServiceSelection] = useState(false);
  const [showMessageInput, setShowMessageInput] = useState(false);
  const [showFinalConfirmation, setShowFinalConfirmation] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const inputRefName = useRef<HTMLInputElement>(null);
  const inputRefEmail = useRef<HTMLInputElement>(null);
  const inputRefMessage = useRef<HTMLInputElement>(null);

  const [inputCountName, setInputCountName] = useState(0);
  const [inputCountEmail, setInputCountEmail] = useState(0);
  const [inputCountMessage, setInputCountMessage] = useState(0);

  const [checkedItems, setCheckedItems] = useState({
    socialMediaManagement: false,
    contentCreation: false,
    seo: false,
    webDesign: false,
    photography: false,
    photoEditing: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  const selectedServices = Object.keys(checkedItems)
    .filter(key => checkedItems[key as keyof typeof checkedItems])
    .map(key => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))
    .join(', ');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
  };

  const handleSendEmail = () => {
    setShowButtons(false);
    setLoading(true);

    const templateParams = {
      from_name: name,
      to_name: 'Frame Flow',
      from_email: email,
      reply_to: email,
      message: `${selectedServices ? 'Selected services: ' + selectedServices + '\n' : ''}Message: ${message}`,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      templateParams, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setShowEmailConfirmation(true);
        setShowButtons(false);
      }).catch((error) => {
        console.error('There was an error sending the email:', error);
      }).finally(() => {
        setLoading(false);
      });
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const isTypingName = document.activeElement === inputRefName.current;
    const isTypingEmail = document.activeElement === inputRefEmail.current;
    const isTypingMessage = document.activeElement === inputRefMessage.current;

    if (isTypingName) {
      if (event.key === 'Enter' && name.trim() !== '') {
        setShowEmailInput(true);
      } else if (event.key === 'Backspace') {
        if (inputCountName > 0) {
          setInputCountName(inputCountName - 1);
        }
      } else if (/^[^\s]$/.test(event.key)) {
        setInputCountName(inputCountName + 1);
      }
    }

    if (isTypingEmail) {
      if (event.key === 'Enter' && isValidEmail(email)) {
        setShowEmailInput(false);
        setShowServiceSelection(true);
      } else if (event.key === 'Backspace') {
        if (inputCountEmail > 0) {
          setInputCountEmail(inputCountEmail - 1);
        }
      } else if (/^[^\s]$/.test(event.key)) {
        setInputCountEmail(inputCountEmail + 1);
      }
    }

    if (isTypingMessage) {
      if (event.key === 'Enter' && message.trim() !== '') {
        setShowMessageInput(false);
        setShowFinalConfirmation(true);
        setShowButtons(true); 
      } else if (event.key === 'Backspace') {
        if (inputCountMessage > 0) {
          setInputCountMessage(inputCountMessage - 1);
        }
      } else if (/^[^\s]$/.test(event.key)) {
        setInputCountMessage(inputCountMessage + 1);
      }
    }
  };

  const resetForm = () => {
    setEmail('');
    setName('');
    setMessage('');
    setInputCountName(0);
    setInputCountEmail(0);
    setInputCountMessage(0);
    setShowEmailInput(false);
    setShowServiceSelection(false);
    setShowMessageInput(false);
    setShowFinalConfirmation(false);
    setShowButtons(false);

    setCheckedItems({
      socialMediaManagement: false,
      contentCreation: false,
      seo: false,
      webDesign: false,
      photography: false,
      photoEditing: false,
    });
    
    if (inputRefName.current) {
      inputRefName.current.focus();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputCountName, inputCountEmail, inputCountMessage]);

  useEffect(() => {
    if (inputRefName.current && !showEmailInput && !showServiceSelection && !showMessageInput) {
      inputRefName.current.focus();
    } else if (inputRefEmail.current && showEmailInput && !showServiceSelection && !showMessageInput) {
      inputRefEmail.current.focus();
    } else if (inputRefMessage.current && showMessageInput) {
      inputRefMessage.current.focus();
    }
  }, [showEmailInput, showServiceSelection, showMessageInput]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      <motion.div 
        className="flex flex-col min-[1280px]:h-[calc(40vw)] h-full p-4 mx-auto mt-20 font-mono text-gray-200 rounded-lg shadow-lg bg-zinc-800 xl:w-2/3 sm:w-full"
        variants={contactVariants}
        transition={{ type: 'spring', stiffness: 225, damping: 20, ease: "easeInOut", duration: 0.5 }}
      >
        <div className="flex flex-row items-center justify-between">
          <div className='flex flex-row space-x-2'>
            <div className="flex items-center justify-center w-4 h-4 bg-red-500 rounded-full">
              <button
                className="text-red-500 text-md hover:text-red-950"
                onClick={onClose}
              >
                <IoIosClose />
              </button>
            </div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
          <span>contact@frameflow.ca</span>
          <span className="text-2xl">🔗</span>
        </div>
        <hr className="my-4 border-gray-700" />
        <p>Hey there! We're excited to link</p>
        <p className='mt-2'>--------------------------------------------------------------</p>
        {!showFinalConfirmation && (
          <form onSubmit={handleSubmit} className="mt-2">
            {!showEmailInput && !showServiceSelection && !showMessageInput && (
              <>
                <label htmlFor="name" className="block">
                  To start, could you give us <span className="text-blue-400">your name?</span>
                </label>
                <div className="flex items-center mt-2">
                  <div className='flex flex-row'>
                    <span className="mr-2 font-bold text-green-500">➜</span>
                    <span className="mr-2 text-[#00FFFF] font-bold">~</span>
                    <span className="mr-2 font-bold text-gray-200">Enter your name:</span>
                  </div>
                  <div className="relative flex items-center w-1/2">
                    <input
                      id='name'
                      ref={inputRefName}
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-2 py-1 text-gray-200 bg-transparent border-none rounded custom-input focus:ring-2 focus:ring-transparent focus:outline-none caret-transparent"
                      placeholder=""
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                    />
                    <div
                      className="caret absolute left-1 h-5 w-[8px] bg-white z-10"
                      style={{ transform: `translateX(${inputCountName * 10}px)` }}
                    ></div>
                  </div>
                </div>
              </>
            )}
            {showEmailInput && !showServiceSelection && !showMessageInput && (
              <>
                <label htmlFor="contact" className="block mt-2 space-x-2">
                  <span className='text-green-500'>Perfect! Nice to meet you {name}.</span>
                  <motion.span
                    animate={{ rotate: [0, 0, 15, -15, 15, -15, 0, 0], scale: [1, 1.5, 1.5, 1.5, 1.5, 1]}}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    style={{ display: 'inline-block', transformOrigin: 'bottom' }}
                  >
                    👋{" "}
                  </motion.span>  
                  <span className="text-blue-400">Where can we contact with you?</span>
                </label>
                <div className="flex items-center mt-2">
                  <div className='flex flex-row'>
                    <span className="mr-2 font-bold text-green-500">➜</span>
                    <span className="mr-2 text-[#00FFFF] font-bold">~</span>
                    <span className="mr-2 font-bold text-gray-200">Enter email:</span>
                  </div>
                  <div className="relative flex items-center w-1/2">
                    <input
                      id='email'
                      ref={inputRefEmail}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-2 py-1 text-gray-200 bg-transparent border-none rounded custom-input focus:ring-2 focus:ring-transparent focus:outline-none caret-transparent"
                      placeholder=""
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                    />
                    <div
                      className="caret absolute left-1 h-5 w-[8px] bg-white z-10"
                      style={{ transform: `translateX(${inputCountEmail * 10}px)` }}
                    ></div>
                  </div>
                </div>
              </>
            )}
            {showServiceSelection && !showMessageInput && (
              <>
                <label htmlFor="contact" className="block mt-2 space-x-2">
                  <span className='text-green-500'>Perfect! Nice to meet you {name}.</span>
                  <motion.span
                    animate={{ rotate: [0, 0, 15, -15, 15, -15, 0, 0], scale: [1, 1.5, 1.5, 1.5, 1.5, 1]}}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    style={{ display: 'inline-block', transformOrigin: 'bottom' }}
                  >
                    👋{" "}
                  </motion.span>  
                  <span className="text-blue-400">Where can we contact with you?</span>
                </label>
                <label htmlFor="email" className="block mt-2 space-x-2">
                  <span className='text-green-500'>Got it! We will contact with you on "{email}".</span>
                </label>
                <div className="flex flex-col items-start justify-start mt-2">
                  <div className='flex flex-row'>
                    <span className="mr-2 font-bold text-green-500">➜</span>
                    <span className="mr-2 text-[#00FFFF] font-bold">~</span>
                    <span className="mr-2 font-bold text-gray-200">How can we assist you? </span>
                  </div>
                  <div className="flex flex-col justify-center mt-2 space-y-2 text-green-500">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none w-5 h-5 border rounded-md border-green-500 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-green-500 checked:border-green-500 checked:before:bg-green-500"
                        name="socialMediaManagement"
                        checked={checkedItems.socialMediaManagement}
                        onChange={handleCheckboxChange}
                      />
                      <span className='text-blue-400'>Social Media Management</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none w-5 h-5 border rounded-md border-green-500 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-green-500 checked:border-green-500 checked:before:bg-green-500"
                        name="contentCreation"
                        checked={checkedItems.contentCreation}
                        onChange={handleCheckboxChange}
                      />
                      <span className='text-blue-400'>Content Creation</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none w-5 h-5 border rounded-md border-green-500 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-green-500 checked:border-green-500 checked:before:bg-green-500"
                        name="seo"
                        checked={checkedItems.seo}
                        onChange={handleCheckboxChange}
                      />
                      <span className='text-blue-400'>Search Engine Optimization</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none w-5 h-5 border rounded-md border-green-500 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-green-500 checked:border-green-500 checked:before:bg-green-500"
                        name="webDesign"
                        checked={checkedItems.webDesign}
                        onChange={handleCheckboxChange}
                      />
                      <span className='text-blue-400'>Web Design</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none w-5 h-5 border rounded-md border-green-500 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-green-500 checked:border-green-500 checked:before:bg-green-500"
                        name="photography"
                        checked={checkedItems.photography}
                        onChange={handleCheckboxChange}
                      />
                      <span className='text-blue-400'>Photography/Videography</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none w-5 h-5 border rounded-md border-green-500 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-green-500 checked:border-green-500 checked:before:bg-green-500"
                        name="photoEditing"
                        checked={checkedItems.photoEditing}
                        onChange={handleCheckboxChange}
                      />
                      <span className='text-blue-400'>Photo/Video Editing</span>
                    </label>
                  </div>
                  <button 
                    className='flex px-4 py-2 mt-4 bg-blue-600 rounded-lg hover:bg-blue-700'
                    onClick={() => setShowMessageInput(true)}
                  >
                    Done
                  </button>
                </div>
              </>
            )}
            {showMessageInput && (
              <>
                <label htmlFor="contact" className="block mt-2 space-x-2">
                  <span className='text-green-500'>Perfect! Nice to meet you {name}.</span>
                  <motion.span
                    animate={{ rotate: [0, 0, 15, -15, 15, -15, 0, 0], scale: [1, 1.5, 1.5, 1.5, 1.5, 1]}}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    style={{ display: 'inline-block', transformOrigin: 'bottom' }}
                  >
                    👋{" "}
                  </motion.span>  
                  <span className="text-blue-400">Where can we contact with you?</span>
                </label>
                <label htmlFor="email" className="block mt-2 space-x-2">
                  <span className='text-green-500'>Got it! We will contact with you on "{email}".</span>
                </label>
                <label htmlFor="categories" className="block mt-2 space-x-2">
                  <span className='text-green-500'>Selected services: </span>
                  <span className='text-blue-400'>{selectedServices}</span>
                </label>
                <div className='flex flex-row items-center'>
                  <span className="mr-2 font-bold text-green-500">➜</span>
                  <span className="mr-2 text-[#00FFFF] font-bold">~</span>
                  <span className="mr-2 font-bold text-gray-200">Your message to us: </span>
                  <div className="relative flex items-center w-1/2">
                    <input
                      id='message'
                      ref={inputRefMessage}
                      type="text"
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-2 py-1 text-gray-200 bg-transparent border-none rounded custom-input focus:ring-2 focus:ring-transparent focus:outline-none caret-transparent"
                      placeholder=""
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                    />
                    <div
                      className="caret absolute left-1 h-5 w-[8px] bg-white z-10"
                      style={{ transform: `translateX(${inputCountMessage * 10}px)` }}
                    ></div>
                  </div>
                </div>
              </>
            )}
          </form>
        )}
        {showFinalConfirmation && (
          <>
            <label htmlFor="contact" className="block mt-2 space-x-2">
              <span className='text-green-500'>Perfect! Nice to meet you {name}.</span>
              <motion.span
                animate={{ rotate: [0, 0, 15, -15, 15, -15, 0, 0], scale: [1, 1.5, 1.5, 1.5, 1.5, 1]}}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                style={{ display: 'inline-block', transformOrigin: 'bottom' }}
              >
                👋{" "}
              </motion.span>  
              <span className="text-blue-400">Where can we contact with you?</span>
            </label>
            <label htmlFor="email" className="block mt-2 space-x-2">
              <span className='text-green-500'>Got it! We will contact with you on "{email}".</span>
            </label>
            <label htmlFor="categories" className="block mt-2 space-x-2">
              <span className='text-green-500'>Selected services: </span>
              <span className='text-blue-400'>{selectedServices}</span>
            </label>
            <label htmlFor="email" className="block mt-2 space-x-2">
              <span className='text-green-500'>Your message: {message}.</span>
            </label>
          </>
        )}
        {showButtons && (
          <div className='flex flex-row justify-between w-full mt-4 md:w-1/2 lg:w-1/2 xl:w-1/2'>
            <button className='flex px-12 py-2 bg-red-500 rounded-lg hover:bg-red-600' onClick={resetForm}>Start Over</button>
            <button className='flex px-12 py-2 bg-green-600 rounded-lg hover:bg-green-700' onClick={handleSendEmail}>Looks Good!</button>
          </div>
        )}
        {loading && (
          <div className='flex items-center justify-center'>
            <ThreeDotsWave />
          </div>
        )}
        {showEmailConfirmation && (
          <motion.div className='flex flex-col w-full mt-4'>
            <TypingEffect text="EMAIL SENT! We will get back to you as soon as possible." />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

interface TypingEffectProps {
  text: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 30); 
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return (
    <motion.h1
      className='text-green-500 text-[calc(2vw)]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.h1>
  );
};

export default Modal;
