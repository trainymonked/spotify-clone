import { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

import './App.css'
import { getTokenFromUrl } from './api/spotify'
import { useDataContextValue } from './api/DataContext'
import Player from './components/Player'
import SignIn from './components/Signin'

const spotify = new SpotifyWebApi()

function App() {
    const [{ token }, dispatch] = useDataContextValue()

    useEffect(() => {
        async function fetchData() {
            const hash = getTokenFromUrl()
            location.hash = ''
            // localStorage.setItem(
            //     'token',
            //     JSON.stringify({
            //         value: hash.access_token,
            //         expires: new Date().getTime() + +hash.expires_in * 1000,
            //     })
            // )
            // console.log(JSON.parse(localStorage.getItem('token')).expires)
            const { access_token } = hash

            if (access_token) {
                dispatch({
                    type: 'SET_TOKEN',
                    token: access_token,
                })
                spotify.setAccessToken(access_token)
                const user = await spotify.getMe()
                dispatch({
                    type: 'SET_USER',
                    user: user,
                })
                const playlists = await spotify.getUserPlaylists(user.id)
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists,
                })
            }
        }
        fetchData()
    }, [dispatch])

    return <div className='app'>{token ? <Player spotify={spotify} /> : <SignIn />}</div>
}

export default App
