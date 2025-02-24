import React from 'react';
import { Link } from 'react-router-dom';
import './BoxLinks.css';

const BoxLinks = () => {
    return (
        <div className="outer-box-container">
            <div className="box-links-container">
                {/* Box for Projects */}
                <Link to="/projects" className="box-link">
                    <div className="box">
                        <h3>Projects</h3>
                    </div>
                </Link>

                {/* Box for Social Media */}
                <Link to="/social-media" className="box-link">
                    <div className="box">
                        <h3>Social Media</h3>
                    </div>
                </Link>

                {/* Box for Certificates */}
                <Link to="/certificates" className="box-link">
                    <div className="box">
                        <h3>Certificates</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BoxLinks;
