import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BlogPost from "./components/BlogPost/BlogPost";
import Container from "react-bootstrap/Container";
import React from "react";


function App() {


    const blog_json_1 = {
        date: "2022-04-01",
        contentMd: "### Blog entry 1\n* asf\n* sdf"
    }

    const blog_json_2 = {
        date: "2022-03-01T12:59-0500",
        contentMd: "### Blog entry 2\n* asf\n* sdf"
    }
    return (
        <body>

        <div className="App">
            <Container>
                <header className="MainHeader d-flex align-items-center">
                    <div>
                        <h1>Simon Gavris</h1>
                        <h2>Projects, Portfolio, ...</h2>
                        asf
                    </div>
                </header>
                <section>
                    <BlogPost blogContent={blog_json_1}/>
                    <BlogPost blogContent={blog_json_2}/>
                    <BlogPost blogContent={blog_json_1}/>
                    <BlogPost blogContent={blog_json_2}/>
                    <BlogPost blogContent={blog_json_1}/>
                </section>
            </Container>
        </div>
        </body>
    );
}

export default App;
