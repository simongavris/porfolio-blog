import React from 'react';
import styles from './BlogPostPreview.module.css';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const BlogPostPreview = () => (
  <div className={styles.BlogPostPreview}>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
              <Button>Click</Button>
          </Card.Body>
      </Card>  </div>
);

BlogPostPreview.propTypes = {};

BlogPostPreview.defaultProps = {};

export default BlogPostPreview;
