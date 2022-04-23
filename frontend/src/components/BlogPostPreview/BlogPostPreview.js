import React from 'react';
import styles from './BlogPostPreview.module.css';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";


const BlogPostPreview = ({blog}) => (
  <div className={styles.BlogPostPreview}>
      <Card style={{ width: '18rem' }}>
          <Card.Body>
              <Card.Title>{/(?<=#).*/m.exec(blog.content)}</Card.Title>
              <Card.Subtitle><Moment format="DD.MM.YYYY">{blog.date}</Moment></Card.Subtitle>
              <Card.Text>
                  {String(/(\n)[\s\S]*/m.exec(blog.content)).substring(0, 200)+ "..."}
              </Card.Text>
              <Button>Read more</Button>
          </Card.Body>
      </Card>
  </div>
);

BlogPostPreview.propTypes = {};

BlogPostPreview.defaultProps = {};

export default BlogPostPreview;
