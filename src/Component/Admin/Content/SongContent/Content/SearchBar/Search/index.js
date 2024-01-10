import Search from "antd/es/input/Search"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { searchSong } from "../../../../../../../redux/actions/admin/song"

const SearchBar = ()=>{
    const [searchText,setSearchText] = useState("")
    const dispatch = useDispatch();
    const onChange = (e)=>{
        setSearchText(e.target.value)
        dispatch(searchSong(e.target.value))
    }
    const onSearch = ()=>{
        dispatch(searchSong(searchText))
        setSearchText("")
    }
    
    return (
        <Search 
        style={{width:"300px"}} 
        enterButton="Search" 
        placeholder="input search text" 
        color="green"
        value={searchText}  
        onChange={onChange}
        onSearch={onSearch}
        />
    )
}

export default SearchBar