import Listitems from "./Listitems"

const Content = ({items,handleCheck,handleDelete}) => {
 
  return (
    <>
      {items.length?(
         <Listitems 
         items={items}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
          />    
    ):(
      <p style={{marginTop:"2rem"}}>Your list is empty</p>
    )}

    </>
  )
}

export default Content