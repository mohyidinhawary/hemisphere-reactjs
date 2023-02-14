import React from "react";
import souhimisphere from "./image/main-qimg-964eaa3c13b4b29dfeaeb5c17030a8f4-lq.jfif"
import norhimisphere from "./image/main-qimg-838dee9f9b9c8acee7495179218be9cd.webp"
import "./HemishpereDispaly.css"
const Himesphere = ({ latitude }) => {
    const himesphere = latitude > 0 ? 'Northernhimisphere' : 'southernhimisphere '
    const pichimisphere = latitude > 0 ? norhimisphere : souhimisphere
    return (
        <div className={himesphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={pichimisphere} alt="" />
                </div>
                <div className="ui teal bottom attached label">
                    <h1> {himesphere}</h1>
                </div>

            </div>
        </div>
    )
}
export default Himesphere