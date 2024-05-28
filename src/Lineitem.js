import{FaTrashAlt} from "react-icons/fa"
const Lineitem = ({item,handleCheck,handleDelete,}) => {
  return (
    <li className="item" >
            <div>
            <input type="checkbox"
            onChange={()=>handleCheck(item.id)}
            checked={item.checked}/>
        <label onDoubleClick={()=>handleCheck(item.id)} style={(item.checked)?{textDecoration:'line-through'}:null}>{item.item}</label>
            </div>

        <FaTrashAlt 
        role="button"
        tabIndex="0"
        onClick={()=>handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}

            />
    </li>
  )
}

export default Lineitem