import { useState, useEffect, useRef, FunctionComponent } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import NProgress from "nprogress";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import Nav from "./Nav";
import Hamburger from "./Hamburger";

interface WrapperProps {
  readonly active: boolean;
  readonly sticky: boolean;
  readonly home: boolean;
};

interface LogoProps {
  readonly active: boolean;
};

type HeaderProps = {
  toggleStickyHeader: any
  stickyHeader: boolean
  home: boolean
}

if (typeof window !== "undefined") {
  NProgress.configure({ showSpinner: false });
  
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
}

const Wrapper = styled.header<WrapperProps>`
  z-index: 1;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  place-items: center;
  padding: var(--spacing-medium) var(--spacing-large);
  height: var(--header-height);
  background-color: ${({ sticky }) =>
    sticky ? "var(--color-white)" : "transparent"};
  box-shadow: ${({ sticky }) =>
    sticky ? "rgba(0, 0, 0, 0.1) 0px 2px 1.5rem 0px" : "none"};
  @media (min-width: 768px) {
    padding: var(--spacing-medium) var(--spacing-large);
    position: ${({ sticky, home }) =>
      sticky ? "fixed" : home ? "absolute" : "static"};
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
  }
`;

const Logo = styled.div<LogoProps>`
  display: grid;
  place-items: center;
  z-index: 1;
  margin: 0;
  width: 100px;
  img,
  a {
    width: 100%;
  }
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Header: FunctionComponent<HeaderProps> = ({ home, stickyHeader, toggleStickyHeader } : HeaderProps) => {
  const [active, setActive] = useState(false);
  const headerEl = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll.bind(this));

    if (active) {
      disableBodyScroll(headerEl.current);
    } else {
      enableBodyScroll(headerEl.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearAllBodyScrollLocks();
    };
  }, [active]);

  const toggleActive = option => {
    if (option === "close-nav") {
      setActive(false);
      enableBodyScroll(headerEl.current);

      return;
    }

    setActive(!active);
  };

  const handleScroll = () => {
    if (!headerEl.current) {
      return;
    }

    const el = headerEl.current;
    const elementTop = el.offsetTop;
    const elementBottom = elementTop + el.offsetHeight;
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.outerHeight;

    if (elementBottom > viewportTop && elementTop < viewportBottom) {
      el.classList.remove("is-sticky");
      toggleStickyHeader(false);
    } else {
      el.classList.add("is-sticky");
      toggleStickyHeader(true);
    }
  };

  return (
    <Wrapper active={active} sticky={stickyHeader} home={home} ref={headerEl}>
      <Logo active={active}>
        <Link href="/">
          <a onClick={() => toggleActive("close-nav")}>
            <img src="/static/logos/1188.svg" />
          </a>
        </Link>
      </Logo>
      <Nav
        active={active}
        toggleActive={toggleActive}
        sticky={stickyHeader}
        home={home}
      />
      <Hamburger
        active={active}
        toggleActive={toggleActive}
        sticky={stickyHeader}
      />
    </Wrapper>
  );
};

export default Header;