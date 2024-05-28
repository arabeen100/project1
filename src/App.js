import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import Search from './Search';
import apiReq from './apiRequest';
import { useState,useEffect } from 'react';
function App() {
  const [fetchError,setFetchError]=useState(null);
  const [isLoading,setIsLoading]=useState(true);
  const [items,setItems]=useState([]);
  const API_URL='http://localhost:3500/items'
  
  useEffect(()=>{
    const fetchItems=async()=>{
      try {
        const response= await fetch(API_URL)
        if(!response.ok)throw Error('Did not recieve expected data')
        const listItems=await response.json();
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)
        
      } catch (err) {
        console.log(err.message)
        setFetchError(err.message)
        
      }finally{
        setIsLoading(false)
      }
    }
    setTimeout(()=>{
      fetchItems();

    },2000)

    

    

  },[])
  const addItem= async(item)=>{
   const id=items.length?items[items.length-1].id +1:1;
   const myNewItem={id,checked:false,item};
   const listItems=[...items,myNewItem];
   setItems(listItems)
   const addOptions={
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(myNewItem)
  };
  const result=await apiReq(API_URL,addOptions)
  if(result) setFetchError(result)

  }
  const[newItem,setNewItem]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem) return;
    setNewItem("")
    addItem(newItem);
    
  }
  const handleCheck= async(id)=>{
    const listItems= items.map((item)=> item.id===id ? { ...item,checked: !item.checked}: item );
    setItems(listItems)
    const myItem=listItems.filter(item=>item.id===id);
    const updateOptions={
      method:"PATCH",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    };
    const reqUrl=`${API_URL}/${id}`
    const result= await apiReq(reqUrl,updateOptions);
    if (result) setFetchError(result);



  }
  const handleDelete=async (id)=>{
    const listItems=items.filter((item)=>item.id!==id);
    setItems(listItems)
    const myItem= listItems.filter(item=>item.id===id)
    const deleteOptions={method:"DELETE"};
    const reqUrl=`${API_URL}/${id}`
    const result= await apiReq(reqUrl,deleteOptions);
    if (result) setFetchError(result);


    
  }
  const[search,setSearch]=useState("");
 
  return (
    <div className="App">
     <Header title="Groceries list" />
     <AddItem
     newItem={newItem}
     setNewItem={setNewItem}
     handleSubmit={handleSubmit} 
     />
     <Search
     search={search}
     setSearch={setSearch} 
     />
     <main>
      {fetchError && <p style={{color:"red"}}>Error:{fetchError}</p>}
      {isLoading &&<p> is Loading...</p> }
      {!fetchError && !isLoading &&
     <Content items={items.filter((item)=>(item.item).toLowerCase().includes(search.toLowerCase()))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
     />}
     </main>
    
     <Footer length={items.length}/>
    </div>
  );
}

export default App;
