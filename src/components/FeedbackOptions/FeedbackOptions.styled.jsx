import styled from 'styled-components';

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const OptionButton = styled.button`
    padding: 4px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;

    &:first-letter {
        text-transform: uppercase;
    }
    &:active {
        background-color: blue;
        color: white;
    }
`;
