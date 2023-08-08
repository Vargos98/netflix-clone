import { useState } from 'react';
import './listitem.scss'
import {
  PlayArrow, 
  ThumbUpAltOutlined, 
  Add, 
  ThumbDownAltOutlined } from "@material-ui/icons"
export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "./trailer.mp4";  
  return (
    <div className='listItem'
    // hover calculations
    style={{left: isHovered && index * 225 -50 + index *2.5}} 
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>
    <img src='https://awbi.org/wp-content/uploads/2023/06/Fast-X-OTT-Release-Date.jpg' />
    
    {isHovered && (

      <>   
    <video src={trailer} autoPlay={true} loop/>
     
      <div className="itemInfo">
          <div className="icons">
            <PlayArrow className='icon'/>
            <Add className='icon'/>
            <ThumbUpAltOutlined className='icon'/> 
            <ThumbDownAltOutlined className='icon'/>
          </div>
          <div className="itemInfoTop">
              <span>1hour 14 mins</span>
              <span className='limit'>+18</span>
              <span>2023</span>

          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
             excepturi error velit cum dolorem at illum facilis, eveniet rerum.
          </div>
          <div className="genre">Action</div>
      </div> 
      </> 
      )}
    </div>
    
  );
}
