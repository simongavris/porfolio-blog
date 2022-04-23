import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BlogPost from "./components/BlogPost/BlogPost";
import Container from "react-bootstrap/Container";
import React from "react";
import axios from 'axios';

function App() {

    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:5000/posts").then((response) => {
            setPosts(response.data.posts);
        });
    }, []);

    if (!posts) return null;

    return (
        <Container>
            <header className="MainHeader d-flex align-items-center">
                <div>
                    <h1>Simon Gavris</h1>
                    <h2>Projects, Portfolio, ...</h2>
                </div>
            </header>
            <section>
                {posts.map((p) => (
                    <BlogPost blogContent={p}/>
                ))}
            </section>
        </Container>
    );
}

export default App;
