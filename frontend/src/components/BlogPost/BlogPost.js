import React from 'react';
import styles from './BlogPost.module.css';
import ReactMarkdown from 'react-markdown';
import Moment from "react-moment";


const BlogPost = ({blogContent}) => (

    <div className={styles.BlogPost}>
        <div className={styles.BlogHeader}>
            <Moment format="DD.MM.YYYY">{blogContent.date}</Moment>
        </div>
        <div className={styles.BlogContent}>
            <ReactMarkdown children={blogContent.content}/>
        </div>
        <hr/>
    </div>
);

BlogPost.propTypes = {};

BlogPost.defaultProps = {};

export default BlogPost;
