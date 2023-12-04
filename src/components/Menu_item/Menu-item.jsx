import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
import './Menu_item_styles.scss'


const MenuItem = ({ goto, title }) => {
  return (
    <Link to={goto}>
      <div className='menu_item'>
        <h4>{title}</h4>
      </div>
    </Link>
  )
}

export default MenuItem;