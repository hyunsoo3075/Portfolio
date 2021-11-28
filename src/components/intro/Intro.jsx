import "./intro.scss"
import { useEffect,useRef } from "react"
import {init} from "ityped";

export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            strings: ["Developer", "Student"],
        })
    }, []);
    return (
        <div className = "intro" id = "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile.jpg" alt = ""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, I'm</h2>
                    <h1>Hyunsoo Im</h1>
                    <h3>Full time <span ref = {textRef}> </span></h3>
                </div>
                <a href="#portfolio">
                <img src = "assets/down-arrow.png" alt = ""/>
                </a>
            </div>
            
        </div>
    )
}
