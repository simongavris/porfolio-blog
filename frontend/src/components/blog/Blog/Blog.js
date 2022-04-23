import React from 'react';
import {Outlet} from "react-router-dom";
import Container from "react-bootstrap/Container";


function Blog() {
    return (
        <div className="home">
        <Container>
            <Outlet/>
        </Container>
        </div>
    );
}

Blog.propTypes = {};

Blog.defaultProps = {};

export default Blog;
