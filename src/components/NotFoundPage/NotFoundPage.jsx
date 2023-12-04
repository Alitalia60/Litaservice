import React from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styles from './NotFoundPage.module.css'


const NotFoundPage = () => {
  return (
    <div>
      <h1>Upsss</h1>
      <h1>404</h1>
      Go <Link to="/"> Home</Link>
    </div>
  )
}

// NotFoundPage.propTypes = {
//   someProps!: PropTypes.string
// }
export default NotFoundPage;