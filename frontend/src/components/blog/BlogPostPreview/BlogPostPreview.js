import React from 'react';
import styles from './BlogPostPreview.module.css';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import Container from "react-bootstrap/Container";


const BlogPostPreview = ({blog}) => (
  <div className={styles.BlogPostPreview}>
      <Card style={{ width: '18rem' }}>
          <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Subtitle><Moment format="DD.MM.YYYY">{blog.date}</Moment></Card.Subtitle>
              <ReactMarkdown children={blog.teaser.substring(0, 200) + "..."}/>
              <Button>Read more</Button>
          </Card.Body>
      </Card>
  </div>
);

BlogPostPreview.propTypes = {};

BlogPostPreview.defaultProps = {};

export default BlogPostPreview;
