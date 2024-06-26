'use client'

import Link from 'next/link';
import {useEffect, useState} from 'react'; 
import {FaArrowCircleUp} from 'react-icons/fa'; 
  
const ScrollButton = () =>{ 
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // window is accessible here.
    window.addEventListener('scroll', toggleVisible); 
  }, []);

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    scrolled > 300 ? setVisible(true) : setVisible(false)
  }; 

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'auto'
    }); 
  }; 

  return (
    <div className={`fixed bottom-0 right-0 pb-8 pr-6 ${visible ? 'inline' : 'hidden'}`}>
      {/* <Link href='/#home'> */}
        <button className='btn btn-lg opacity-80 glass' onClick={scrollToTop}>
          Scroll to Top <FaArrowCircleUp />
        </button>
      {/* </Link> */}
  </div>
)

  
  
  

  
} 
  
export default ScrollButton; 