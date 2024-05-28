const Header = ({title}) => {
  return (
    <header >
        <h2>{title}</h2> 
    </header>
  )
}
Header.defaultProps={
  title:"default list"
}

export default Header




