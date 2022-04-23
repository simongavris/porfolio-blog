import React, {useEffect} from "react";
import {useParams} from "react-router";
import * as styles from "./Post.module.css";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import axios from 'axios';

function Post() {
    let { postSlug } = useParams();
    const [post, setPost] = React.useState(null);
    const base_url = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        const url = base_url + "/posts/" + postSlug;
        console.log("url: " + url);
        axios.get(url).then((response) => {
            setPost(response.data);
        });
        }, []
    );


    if (!post) return null;

    return (
        <div>
            <div className={styles.BlogHeader}>
                <Moment format="DD.MM.YYYY">{post.date}</Moment>
            </div>
            <div>
                <ReactMarkdown children={post.content}/>
            </div>
            <hr/>
        </div>
    );
}

export default Post;
