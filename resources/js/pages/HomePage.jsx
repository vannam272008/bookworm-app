import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Feature from "../components/feature/Feature";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <Banner />
                <Feature />
            </Container>
            <Footer />
        </Fragment>
    );
};

export default HomePage;
