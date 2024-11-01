import "./HeaderLinks.css"

const HeaderLinks = ({id, name}: any) => {
  return (
    <a href={ id } className="header-link" >{ name }</a>
  )
}

export default HeaderLinks