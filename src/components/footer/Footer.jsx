import React from "react";
import './footer.scss';

export default function Footer() {
    return (
        <div className="footer-wrapper">
        <div className="footer">
            <div className="footer-col">
                <h4>General</h4>
                <ul>
                    <li><a href="#">Audio and subtitles</a></li>
                    <li><a href="#">Media Centre</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Help Centre</h4>
                <ul>
                    <li><a href="#">Live Chat</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Career</h4>
                <ul>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Bug Hunter</a></li>
                </ul>
            </div>
        </div>
        <p>© 1997-2022 Netfilx Inc. BIN React-JS project#4</p>
        </div>
    )
}
