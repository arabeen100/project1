import Lineitem from "./Lineitem"
const Listitems = ({items,handleCheck,handleDelete,}) => {
  return (
    <ul>
        {items.map((item)=>(
         <Lineitem 
         key={item.id}
         item={item}
         handleCheck={handleCheck}
         handleDelete={handleDelete}
         />

        ))}

    
    </ul>
  )
}

export default Listitems