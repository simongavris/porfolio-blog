import React from 'react';
import {FaGithub, FaLinkedin, FaStackExchange} from 'react-icons/fa';

const Footer = () => (
    <footer className="text-center text-lg-start bg-light text-muted mt-auto">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
                <span>Simon Gavris – Vienna, Austria</span>
            </div>
            <div>
                <a href="https://github.com/simongavris" target="_blank" rel="noopener noreferrer"
                   className="me-4 text-reset">
                    <FaGithub/>
                </a>
                <a href="https://stackexchange.com/users/3059754/simon?tab=accounts" target="_blank"
                   rel="noopener noreferrer" className="me-4 text-reset">
                    <FaStackExchange/>
                </a>
                <a href="https://www.linkedin.com/in/simon-gavris-723554a9/" target="_blank" rel="noopener noreferrer"
                   className="me-4 text-reset">
                    <FaLinkedin/>
                </a>
            </div>
        </section>
    </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
