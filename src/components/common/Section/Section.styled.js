import styled from 'styled-components';

export const AppSection = styled.section`
    padding: ${({ theme }) => theme.spacing(10, 0, 0, 0)};
`;
export const SectionTitle = styled.h1`
    margin-bottom: ${({ theme }) => theme.spacing(7)};
    text-align: center;
    color: #ffffff;
`;