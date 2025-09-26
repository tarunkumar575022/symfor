import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div className='card'>
      <div>
        <h3 className='flex-items'>Hot Recipies</h3>
        <h1 className='flex-items main-heading'>Spicy delicious <br/>Chicken wings</h1>
        <p className='para'>Lorem ipsum dolor sit amet, consectetuipising elit, sed do eiusmod <br/>
          tempor incididunt ut labore magna aliqut enimad minim
        </p>
        <div className='fonts icon-container'><div className='time'><i class="fa-solid fa-clock"></i>30 min</div>
        <div className='spoon'><i class="fa-solid fa-spoon"></i>Chicken</div>
        <div><h1 className='user'>Tarun Kumar</h1></div>
         <img src={`${process.env.PUBLIC_URL}/images/Crispy-Baked-Chicken-Wings-9.webp.png`} alt='name' className='doctor-image' />
      
        </div>
      </div>
    </div>
  )
}

export default Home
