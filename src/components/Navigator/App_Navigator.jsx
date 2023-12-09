import { Link } from 'react-router-dom'
import './App_Navigator.scss';

import { itemsList } from '../../App'

const App_Navigator = ({ onLinkChange }) => {

  return (
    <>
      <ul className='nav_wrapper' onClick={onLinkChange}>
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