import React from 'react'
import './Service_Copy.scss';


const Service_Copy = ({ title }) => {
  return (
    <div className='page_wrapper'>
      <h2>{title}</h2>
      <ul>
        <li>Ксерокопия</li>
        <li>Набор и редактирование текстов</li>
        <li>Печать текстов</li>
        <li>Печать фотографий</li>
        <li>Печать информации из интернета</li>
        <li>Печать из вайбера, электронной почты</li>
        <li>Сканирование документов</li>

        <li>Ламинирование</li>
      </ul>
      <p>Максимальный формат черно-белой печати - А3</p>
      <p>Максимальный формат цветной печати - А4</p>
    </div>

  )
}

export default Service_Copy;