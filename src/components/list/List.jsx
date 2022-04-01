import { ArrowBackIosOutlined, ArrowForwardIosOutlined,} from "@material-ui/icons";
  import { useRef, useState } from "react";
  import ListItem from "../listItem/ListItem";
  import "./list.scss";
  
export default function List() {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
  
    const listRef = useRef();
  
    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };
    return (
      <div className="list">
        <span className="listTitle">Continue to watching for __sujan__</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="container" ref={listRef}>
            <ListItem index={0} imgsrc="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" />
            <ListItem index={1} imgsrc="https://vistapointe.net/images/the-blind-side-wallpaper-6.jpg"/>
            <ListItem index={2} imgsrc="https://w0.peakpx.com/wallpaper/331/346/HD-wallpaper-movie-dune-2021.jpg"/>
            <ListItem index={3} imgsrc="https://wallpaperaccess.com/thumb/2547735.jpg" />
            <ListItem index={4} imgsrc="https://www.techbuzzonline.com/wp-content/uploads/2018/06/19-Doctor-Strange-Marvel-Comic-HD-Wallpaper.jpg"/>
            <ListItem index={5} imgsrc="https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr.jpg"/>
            <ListItem index={6} imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_72jMKbcdba26Nf7Eq47-ThETj8DVpu4uyNRPGWy0NKAzXgIFitf3qa19tJGC9V9G0g&usqp=CAU"/>
            <ListItem index={7} imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ORSsKBBuFdyDP0Clb_s1XlrmuQBZHgwDXQ&usqp=CAU"/>
            <ListItem index={8} imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AmqOz_F_DBhKbgW5EGwVShUL9VKwU0kszA&usqp=CAU"/>
          </div>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    );
  }