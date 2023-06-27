import React from "react";

const widgetTags = () => {
    const tags= ['c','css','express','firebase']
    return(
        <div>
         <div className="widget-tags">
            <h4>Watched tags</h4>
            <div className="widget-tags-div">{
                tags.map((tag)=>(
                    <p key={tag}>{tag}</p>

                ))
            }

            </div>
         </div>

        </div>
    )
}
export default widgetTags