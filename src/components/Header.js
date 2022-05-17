import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close': 'Add'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Title not set yet',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


// css in js, usually using it dynamically
// const style = {color : 'red', backgroundColor : 'black'}

export default Header