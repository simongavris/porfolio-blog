import React from 'react';
import styles from './BlogPost.module.css';
import ReactMarkdown from 'react-markdown';
import Moment from "react-moment";
import { useParams } from "react-router";


const BlogPost = ({blog}) => {
    let { postSlug } = useParams();

    useEffect(() => {
        // Fetch post using the postSlug
    }, [postSlug]);

    return (

        <div className={styles.BlogPost}>
            <div className={styles.BlogHeader}>
                <Moment format="DD.MM.YYYY">{blog.date}</Moment>
            </div>
            <div className={styles.BlogContent}>
                <ReactMarkdown children={blog.content}/>
            </div>
            <hr/>
        </div>
    );
};

BlogPost.propTypes = {};

BlogPost.defaultProps = {};

export default BlogPost;
