import { Link } from 'react-router-dom'
import './App_Navigator.scss';
import { useState } from 'react';
import Main from '../../pages/Main/Main';
import Service_Print from '../../pages/Service_Print/Service_Print';
import Service_Copy from '../../pages/Service_Copy/Service_Copy';
import Service_PC from '../../pages/Service_PC/Service_PC';
import Service_WEB from '../../pages/Service_WEB/Service_WEB';
import Goods_Kanc from '../../pages/Goods_Kanc/Goods_Kanc';
import Goods_PC from '../../pages/Goods_PC/Goods_PC';
import Goods_TO from '../../pages/Goods_TO copy/Goods_TO';
import About from '../About/About';

import { itemsList } from '../../App'

const App_Navigator = ({ setCurrentPage }) => {

  return (
    <>
      <ul className='nav_wrapper' onClick={setCurrentPage}>
        {itemsList.map((item, index) => {
          return (<li key={index} className='nav_item'>
            <Link to={item.linkTo}> {item.title} </Link>
          </li>)
        })}
      </ul>
    </>

  )
}

export default App_Navigator;