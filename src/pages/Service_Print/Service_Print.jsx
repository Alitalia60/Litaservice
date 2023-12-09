import React from 'react'
import './Service_Print.scss';


const Service_Print = ({ title }) => {
  return (
    <div className='page_wrapper'>
      <h2>{title}</h2>
      <ul>
        <li>Ремонт компьютеров, ноутбуков</li>
        <li>Ремонт лазерных принтеров, МФУ</li>
        <li>Ремонт и заправка картриджей</li>
      </ul>
    </div>
  )
}

export default Service_Print;