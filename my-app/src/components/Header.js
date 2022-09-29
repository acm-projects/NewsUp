import Button from "./Button"
import  PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
      <header className='header' >
    <h1 style = {headingStyle} >{title} </h1>
          <Button color = 'lightgray'  text ='Landing Page'  />
      </header>
    
    ) 
  }

  Header.defaultProps =  {
    title: 'News UP', 
  }

 

  const headingStyle = {
    color : 'black', 
  }

 
  
   
  export default Header
  