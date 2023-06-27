import React from "react";
import './RightSidebar.css'
import comment from "../../assessts/comment.png"
import pen from "../../assessts/pen.png"
import black from "../../assessts/black.jpg"
const Widget = () => {
    return(
        <div className="widget">
            <h4>The overflow blog</h4>
            <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width="18"></img>
           <p>
The people most affected by the tech layoffs</p>
</div>
           
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width="18"></img>
           <p>
How to keep the servers running when your Mastodon goes viral</p>
</div>
            </div>
            <h4>Featured on Meta</h4>
            <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={black} alt="black" width="18"></img>
           <p>
Do you observe increased relevance of Related Questions with our Machine...</p>
</div>
           
            <div className="right-sidebar-div-2">
                <img src={black} alt="back" width="18"></img>
           <p>
Temporary policy: ChatGPT is banned</p>
</div>
<div className="right-sidebar-div-2">
                <img src={black} alt="back" width="18"></img>
           <p>
Plagiarism flag and moderator tooling has launched to Stack Overflow!
</p>
</div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <p>18</p>
           <p>
How should we handle answers that don't answer the question, but evaluate the...</p>
</div>

            </div>
        </div>
    )
}
export default Widget