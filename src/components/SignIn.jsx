import { signInUrl } from '../api/spotify'
import './SignIn.css'
import dLogo from './tempSVGvalue'

function SignIn() {
    return (
        <div className='signIn'>
            <svg viewBox='0 0 1120 340' style={{ color: '#1db954', width: '60%' }}>
                <title>Spotify</title>
                <path fill='currentColor' d={dLogo}></path>
            </svg>
            <a href={signInUrl}>Sign in with Spotify</a>
        </div>
    )
}

export default SignIn
