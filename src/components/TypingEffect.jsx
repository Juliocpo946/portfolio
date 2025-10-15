import React, { useState, useEffect } from 'react';

const TypingEffect = ({ className }) => {
  const text = "juliocpo.dev";
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < text.length) {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(text.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  return (
    <div className={className}>
      <span className="font-bold text-2xl tracking-wider">
        {displayedText}
      </span>
      <span className="animate-blink border-r-2 border-white ml-1" aria-hidden="true"></span>
    </div>
  );
};

export default TypingEffect;