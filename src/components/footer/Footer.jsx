import React from "react"
import { BrowserRouter, Link } from "react-router-dom";
import "./footer.css"

const Footer = () =>{
    return(
        <footer className="pv4 ph3 ph5-m ph6-l mid-gray" id="footer">
            <small className="f6 db tc">{ new Date().getFullYear() } <b className="ttu">Aizik projects   Inc</b>., All Rights Reserved</small>
            <div className="tc mt3">
                <BrowserRouter >
                <Link  to = '/' onClick={() => window.open("https://github.com/AizikAizik", "_blank")}>
                    <p className="f6 dib ph2 link mid-gray dim"> My GitHub</p>
                </Link>
                    <Link  to = '/' onClick={() => window.open("https://www.linkedin.com/in/aizik-ogunleye-78749213a", "_blank")}>
                        <p className="f6 dib ph2 link mid-gray dim"> My LinkedIn</p>
                    </Link>
                    <Link  to = '/' onClick={() => alert("isaac.ogunleye@hotmail.com")}>
                        <p className="f6 dib ph2 link mid-gray dim"> Contact</p>
                    </Link>
                </BrowserRouter>

            </div>
        </footer>
    )
}




export default Footer