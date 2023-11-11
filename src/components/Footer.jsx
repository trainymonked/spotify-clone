import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import RepeatIcon from '@mui/icons-material/Repeat'
import { Grid, Slider } from '@mui/material'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img
                    className='footer__albumCover'
                    src='https://pyxis.nymag.com/v1/imgs/5a1/58c/580de90bf142c7660dcbaf8faa789a61b1-20-taylor-swift-1989.2x.w710.png'
                    alt='Album Cover'
                />
                <div className='footer__songInfo'>
                    <h4>Shake It Off</h4>
                    <p>Taylor Swift</p>
                </div>
            </div>
            <div className='footer__center'>
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__green' />
            </div>
            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
