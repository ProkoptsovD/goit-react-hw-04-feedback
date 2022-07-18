import styled from 'styled-components';

export const OptionList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const OptionListItem = styled.li`
    &:not(:last-child) {
        margin-right: ${({ theme }) => theme.spacing(2.5)};
    }
`; 