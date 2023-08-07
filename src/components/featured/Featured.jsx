import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './featured.scss';

export default function Featured({type}) {
  return (
    <div className='featured'>

            {type &&(
                <div className="category">
                    <span>{type==="movie" ? title="Movies": "Series"}</span>
                    <select name="genre" id="genre"></select>
                </div>

            )}
        <img src='https://w0.peakpx.com/wallpaper/407/697/HD-wallpaper-interstellar-movie-wide-interstellar-movies.jpg'  alt='featured' />
        <div className="info">
            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/0/02/Interstellar.svg/1280px-Interstellar.svg.png" alt="Movie logo" />
            <span className='desc'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Cum odit deleniti temporibus fuga minima laborum pariatur molestias accusantium, 
            fugit, repellendus sapiente expedita harum provident iure porro a, 
            nemo possimus eligendi.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>

                </button>
            </div>
        </div>
    </div>
  )
}
