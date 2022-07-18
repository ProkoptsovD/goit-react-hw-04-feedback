import PropTypes from 'prop-types';
import Container from '../Container';
import { AppSection, SectionTitle } from './Section.styled';

const Section = ({ children, title }) => {
    return (
        <AppSection>
            <Container>
                {
                    title && <SectionTitle>
                                {title}
                            </SectionTitle>
                }
                {children}
            </Container>
        </AppSection>
    )
}

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
}

export default Section;