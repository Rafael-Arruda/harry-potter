import styled from "styled-components";

export const Container = styled.div`
    width: 180px;
    text-align: center;
    transform: scale(0.95);
    transition: 0.2s all;

    :hover {
        transform: scale(1);
    }

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
`;