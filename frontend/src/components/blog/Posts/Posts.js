import React, {useEffect} from 'react';
import Container from "react-bootstrap/Container";
import axios from 'axios';
import CardGroup from "react-bootstrap/CardGroup";
import BlogPostPreview from "../BlogPostPreview/BlogPostPreview";

function Posts() {
    const [posts, setPosts] = React.useState(null);

    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URL;
        console.log("posts url: " + url);
        axios.get(url + '/posts').then((response) => {
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
