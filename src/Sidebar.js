import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
import dLogo from './tempSVGvalue';

function Sidebar() {
  const [{ playlists }] = useDataLayerValue();

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

      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
