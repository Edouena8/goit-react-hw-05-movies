import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Section, Link, Main } from "./Layout.styled";
import Loader from "components/Loader";

const Layout = () => {
    return (
        // <Container>
        <>
        <Header>
            <Container>
            <ul>
                <li>
                    <Link to="">Home</Link>
                </li>
                <li>
                    <Link to="movies">Movies</Link>
                </li>
            </ul>
            </Container>
        </Header>
        <Main>
            <Section>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
            </Section>
        </Main>
        </>
        // </Container>
    )
};

export default Layout;