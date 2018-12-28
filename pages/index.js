import Link from "next/link";
import styled from 'styled-components';
import ScrollDown from '../components/ScrollDown';
import Contact from '../components/Contact';

const Wrapper = styled.div`
`;

const Overlay = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
  background: linear-gradient(
    100deg,
    rgba(251, 84, 43, 0.7) 0%,
    rgba(42, 0, 84, 1) 100%
  );
`;

const Hero = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const HeroTitle = styled.h1`
  grid-row: 2 / span 1;
  grid-column: 1 / -1;
  margin: 0;
  font-size: 4rem;
  color: var(--color-white);
  max-width: 1300px;
  display: grid;
  place-items: center;
  text-align: center;
  @media (min-width: 768px) {
    grid-row: 2 / span 2;
    font-size: 6.4rem;
  }
  @media (min-width: 1024px) {
    font-size: 8.2rem;
  }
`;

const StyledScrollDown = styled(ScrollDown)`
  grid-row: 4 / -1;
  grid-column: 1 / -1;
  align-self: center;
`;

const StyledVideo = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledLink = styled.a`
  grid-row: 3 / span 1;
  grid-column: 1 / -1;
  align-self: end;
  display: grid;
  place-items: center;
  border: 3px solid var(--color-tertiary);
  border-radius: 4px;
  color: var(--color-white);
  background-color: var(--color-tertiary);
  font-size: 22px;
  font-weight: bold;
  padding: var(--spacing-medium) var(--spacing-large);
  color: var(--color-white);
  background-color: var(--color-tertiary);
  @media (min-width: 768px) {
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #6043ed;
      border-color: #6043ed;
      cursor: pointer;
    }
  }
`;

const Index = () => (
  <Wrapper>
    <Hero>
      <StyledVideo autoPlay muted loop playsInline src="/static/videos/hero.mp4" type="video/mp4" />
      <Overlay>
        <HeroTitle>Building a more inclusive internet.</HeroTitle>
        <Link href="/who-we-are">
          <StyledLink>Learn More</StyledLink>
        </Link>
        <StyledScrollDown />
      </Overlay>
    </Hero>
    <Contact />
  </Wrapper>
)

export default Index
