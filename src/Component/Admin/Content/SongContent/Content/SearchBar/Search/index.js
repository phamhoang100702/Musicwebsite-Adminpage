import Search from "antd/es/input/Search"
import { useDispatch } from "react-redux"
import { searchSong } from "../../../../../../../redux/actions/admin/song/SearchSong"
import { useState } from "react"

const SearchBar = ({submitSearch})=>{
    const [searchText,setSearchText] = useState("")
    const dispatch = useDispatch();
    const onChange = (e)=>{
        setSearchText(e.target.value)
        dispatch(searchSong(searchText))
    }
    return (
        <Search 
        style={{width:"300px"}} 
        enterButton="Search" 
        placeholder="input search text" 
        color="green"
        onSearch={submitSearch}
        onChange={onChange}
        />
    )
}

export default SearchBar