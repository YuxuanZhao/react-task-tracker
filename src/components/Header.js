import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header>
        <h1>
            {title}
        </h1>
        <Button color='green' text='Hello'/>
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