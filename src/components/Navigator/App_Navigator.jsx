import { Link } from 'react-router-dom'
import './App_Navigator.scss';
import { useState } from 'react';

const App_Navigator = () => {

  const itemsList = [
    { linkTo: '/', linkImg: '', },
    { linkTo: '/service_copy', linkImg: '', },
    { linkTo: '/service_pc', linkImg: '', },
    { linkTo: '/service_print', linkImg: '', },
    { linkTo: '/service_web', linkImg: '', },
    { linkTo: '/goods_kanc', linkImg: '', },
    { linkTo: '/goods_pc', linkImg: '', },
    { linkTo: '/goods_rasx', linkImg: '', },
    { linkTo: '/about_us', linkImg: '', },
  ]

  const [activeLink, setActiveLink] = useState('/');

  const setActveItem = (_link) => {
    setActiveLink(_link)
  }

  return (
    <ul className='nav_wrapper' onClick={setCurrentPage}>
      <li className='nav_item'>
        <Link to='/'>           <div className="home_icon">           </div>
        </Link>
      </li>
      <li className='nav_item'><Link to='/service_copy' >Печать, копии</Link>   </li>
      <li className='nav_item'> <Link to='/service_pc' >Программные услуги</Link></li>
      <li className='nav_item'><Link to='/service_print'>Ремонт, техобслуживание</Link>      </li>
      <li className='nav_item'> <Link to='/service_web'>WEB - верстка</Link></li>
      <li className='nav_item'> <Link to='/goods_kanc' >Канцтовары</Link></li>
      <li className='nav_item'> <Link to='/goods_pc' >Компьютерные аксессуары</Link></li>
      <li className='nav_item'> <Link to='/goods_rasx' >Расходники</Link></li>
      <li className='nav_item'> <Link to='/about_us' >О нас</Link></li>
    </ul>

  )
}

export default App_Navigator;