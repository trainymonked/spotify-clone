import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useDataContextValue } from '../api/DataContext'

function Header() {
    const [{ user }, dispatch] = useDataContextValue()

    return (
        <div className='header'>
            <div className='header__left'>
                <SearchIcon />
                <input className='' type='text' placeholder='Search for Artists, Songs, or Albums' />
            </div>
            <div className='header__right'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
