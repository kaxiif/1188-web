import styled from 'styled-components';
import ContactForm from './ContactForm';
import Title from "./styles/Title";

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: var(--spacing-large);
  padding: var(--spacing-large);
  @media (min-width: 768px) {
    grid-template-columns: repeat(4,1fr);
    grid-column-gap: var(--spacing-huge);
  }
`;

const Copy = styled.div`
  p {
    color: var(--color-black);
    font-size: 1.8rem;
    line-height: 3.2rem;
    margin: 0;
    a {
      color: var(--color-primary);
    }
  }
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const StyledContactForm = styled(ContactForm)`
  @media (min-width: 768px) {
    grid-column: 3 / -1;
  }
`;

const Contact = ({ className }) => (
  <Wrapper className={className} id="contact">
    <Title>Holla.</Title>
    <Copy>
      <p>
        Great idea for the next big thing? Let us help you bring it to life. Send us a quick message and we'll get back to you as soon as we can. The more detail the better, but if you're still not 100% sure on all the specifics, thats fine too. Alternatively you can shoot us an email at <a href="mailto:info@1188.agency">info@1188.agency</a>.
      </p>
    </Copy>
    <StyledContactForm />
  </Wrapper>
);

export default Contact;
