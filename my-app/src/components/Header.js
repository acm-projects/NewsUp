import Button from "./Button"
import  PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
      <header className='header' >
    <h1>{title} </h1>
        <text> News Feed </text>
          <Button color = 'lightblue'  text ='Landing Page' />
      </header>
    
    )
  }

  Header.defaultProps =  {
    title: 'News UP', 
  }

 
/*
  const headingStyle = {
    color : 'red', 
    backgroundColor: 'black',
    
  }

  */
  
   
  export default Header
  