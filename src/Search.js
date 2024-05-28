

const Search = ({search,setSearch}) => {
    
  return (
    <form className="searchForm" onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="searchItem">Search</label>
        <input
        placeholder="Search"
        type="text"
        
        id="searchItem"
        role="searchbox"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />



    </form>
  )
}

export default Search