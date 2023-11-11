import { useDataContextValue } from '../api/DataContext'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import dLogo from './tempSVGValue'
import './Sidebar.css'

function Sidebar() {
    const [{ playlists }] = useDataContextValue()

    return (
        <div className='sidebar'>
            <svg viewBox='0 0 1120 340' className='sidebar__logo'>
                <title>Spotify</title>
                <path fill='currentColor' d={dLogo}></path>
            </svg>
            <SidebarOption title='Home' Icon={HomeIcon} />
            <SidebarOption title='Search' Icon={SearchIcon} />
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />
            <br />
            <strong className='sidebar__title'>Playlists</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} key={playlist.id} />
            ))}
        </div>
    )
}

export default Sidebar
