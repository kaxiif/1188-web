import { Component } from "react";
import { withRouter } from "next/router";
import styled from "styled-components";
import Meta from "./Meta";
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from "../GlobalStyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
//import { far } from "@fortawesome/pro-regular-svg-icons";

library.add(fab);

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: ${({ stickyHeader, home }) =>
    stickyHeader || home
      ? "1fr minmax(var(--header-height), auto)"
      : "var(--header-height) 1fr minmax(var(--footer-height), auto);"};
  min-height: 100vh;
  @media (min-width: 768px) {
    grid-template-rows: ${({ stickyHeader, home }) =>
      stickyHeader || home
        ? "1fr minmax(var(--header-height-wide), auto)"
        : "var(--header-height-wide) 1fr minmax(var(--header-footer-wide), auto);"};
  }
`;

class Page extends Component {
  state = {
    stickyHeader: false
  };

  toggleStickyHeader = (value) => {
    this.setState({
      stickyHeader: value
    });
  }

  render() {
    const home = this.props.router.pathname === '/';

    return (
      <div>
        <Meta />
        <GlobalStyle />
        <Wrapper home={home} stickyHeader={this.state.stickyHeader}>
          <Header home={home} stickyHeader={this.state.stickyHeader} toggleStickyHeader={this.toggleStickyHeader} />
          {this.props.children}
          <Footer />
        </Wrapper>
      </div>
    );
  }
};

export default withRouter(Page);
