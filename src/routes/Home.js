import React from 'react';
import TypingText from 'react-text-typing-animation';
import './Home.css';
import SlideCarousel from '../components/SlideCarousel';

function Home() {

  return (
    <section className='home home-bg'>
      <div className='home-container'>
        <h1 className="home-welcome">Welcome to</h1>
        <h2 className="home-poesia"><TypingText
          text={"Poesias"}
          loop={true}
          speed={4} />
        </h2>
        <div className="home-svg">
          <svg viewBox="0 0 324 329" fill="none" >
            <path className="path" d="M0 4.00001H323C214.745 1.31575 163.749 5.77753 161 68V108M161 326H14C13.4477 326 13 325.552 13 325V109C13 108.448 13.4477 108 14 108H54M161 326V306M161 326H304C304.552 326 305 325.552 305 325V109C305 108.448 304.552 108 304 108H267M54 108V90.9456C54 90.415 54.4257 89.9762 54.9554 89.9468C104.505 87.2031 130.567 88.0097 161 108M54 108V285.94C54 286.515 54.4994 286.971 55.0738 286.938C106.769 284.002 128.699 289.593 161 306M161 108C194.434 84.8156 219.856 85.6132 266.083 89.9145C266.597 89.9623 267 90.3947 267 90.9109V108M161 108V306M161 306C196.034 287.759 220.294 285.566 265.957 286.967C266.521 286.985 267 286.533 267 285.968V108" stroke="#F5F5F5" strokeWidth="5" pathLength="1" />
          </svg>
        </div>
        <h2 className='daily-poems'>Daily Poems</h2>
      </div>
      <SlideCarousel />
      <div className='home-footer'></div>
    </section>
  )
}

export default Home
