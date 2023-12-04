import { Link } from 'react-router-dom'
import './App_Navigator.scss';


const App_Navigator = () => {
  const setActiveLink = (event) => {
    console.log(event.target);
    if (event.target) {
    }
  }

  return (
    <ul className='nav_wrapper' onClick={setActiveLink}>
      <li className='nav_item'>
        <Link to='/'>
          <div className="home_icon">

          </div>
        </Link>
      </li>
      <li className='nav_item'><Link to='/service_copy' >Печать, копии</Link>   </li>
      <li className='nav_item'> <Link to='/service_pc' >Программные услуги</Link></li>
      <li className='nav_item'><Link to='/service_print'>Ремонт, техобслуживание</Link>      </li>
      <li className='nav_item'> <Link to='/service_web'>WEB - верстка</Link></li>
      <li className='nav_item'> <Link to='/goods_kanc' >Канцтовары</Link></li>
      <li className='nav_item'> <Link to='/goods_pc' >Компьютерные аксессуары</Link></li>
      <li className='nav_item'> <Link to='/goods_to' >Расходники</Link></li>
      <li className='nav_item'> <Link to='/about_us' >О нас</Link></li>
    </ul>

  )
}

export default App_Navigator;