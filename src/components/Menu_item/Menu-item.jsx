import { Link } from 'react-router-dom'
import './Menu_item_styles.scss'


const MenuItem = ({ goto, title }) => {
  const setActiveLink = (event) => {
    console.log(event.target);
    if (event.target) {
    }
  }

  return (
    <div className='menu_item' onClick={setActiveLink}>
      <Link to={goto}>
        <h4>{title}</h4>
      </Link>
    </div>
  )
}

export default MenuItem;