import React from 'react';
import Container from "react-bootstrap/Container";
import * as styles from "./Home.module.css"

const Home = () => (
    <Container className="d-flex flex-column">
        <header className={"w-100 d-flex align-items-center " + styles.HomeHeader}>
            <div className="align-middle">
                <h1>Simon Gavris</h1>
                <h2>Blog, Portfolio, ...</h2>
            </div>
        </header>
        <section>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
            </p>
        </section>
    </Container>
);
export default Home;
