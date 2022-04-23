import React, {useEffect} from 'react';
import Container from "react-bootstrap/Container";
import axios from 'axios';
import CardGroup from "react-bootstrap/CardGroup";
import BlogPostPreview from "../BlogPostPreview/BlogPostPreview";

function Posts() {
    const [posts, setPosts] = React.useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/posts").then((response) => {
            setPosts(response.data.posts);
        });
    }, []);

    if (!posts) return null;
    return (
        <div className="home">
            <Container>
                <CardGroup>
                    {posts.map((p) => (
                        <BlogPostPreview blog={p} key={p.title.replace(/[^A-Z0-9]+/ig, "_")}/>
                    ))}
                </CardGroup>
            </Container>
        </div>
    );
}

export default Posts;
