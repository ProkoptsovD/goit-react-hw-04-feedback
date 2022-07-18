import styled from 'styled-components';

export const Btn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    font: inherit;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    background-color: #cacaca;
    color: #27acb3;

    cursor: pointer;

    &:active {
        box-shadow: inset 0px 0px 4px 0px #fafafa;
    }
`;