import { Link } from 'react-router-dom'
import './Menu_item_styles.scss'


const MenuItem = ({ goto, title, setCurrentPage }) => {

  return (
    <div className='menu_item' onClick={setCurrentPage}>
      <Link to={goto}>
        <h4>{title}</h4>
      </Link>
    </div>
  )
}

export default MenuItem;