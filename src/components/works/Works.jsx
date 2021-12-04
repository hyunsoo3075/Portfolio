import "./works.scss";
import Pdf from "./resume.pdf";

export default function Works() {
    return (
        <div className = "works" id = "works">
            <h1 className='header'>Resume</h1>
            <div className="container">
                <div className="left">
                    <h1>“Believe you can and you’re halfway there.”</h1>
                    <br></br>
                    <h2>– Theodore Roosevelt</h2>
                </div>
                <div className="right">

                    <iframe src={`${Pdf}#view=fitH`} title="testPdf" height="100%" width="100%" />
                    
                </div>

            </div>
               
        </div>
    )
}
