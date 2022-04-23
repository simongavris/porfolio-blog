import React from 'react';
import * as styles from './BlogPostPreview.module.css';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";


const BlogPostPreview = ({blog}) => (
  <div>
      <Card style={{ width: '18rem' }}>
          <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Subtitle><Moment format="DD.MM.YYYY">{blog.date}</Moment></Card.Subtitle>
              <ReactMarkdown children={blog.teaser.substring(0, 200) + "..."}/>
              <Link to={"/blog/" + blog.title.replace(/[^A-Z0-9]+/ig, "_")}>
                  <Button>Read more</Button>
              </Link>
          </Card.Body>
      </Card>
  </div>
);

BlogPostPreview.propTypes = {};

BlogPostPreview.defaultProps = {};

export default BlogPostPreview;
