import styled from "styled-components";

function Error({ children }) {
    return (
        <Wrapper>
            <Alert>!</Alert>
            <Message>{children}</Message>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    color: red;
    background-color: #FEF3D5;
    border-radius: 6px;
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
`;

const Alert = styled.span`
    background-color: white;
    height: 30px;
    width: 30px;
    text-align: center;
    border-radius: 50%;
    font-weight: bold;
    display: grid;
    place-content: center;
`;

const Message = styled.p`
    margin: 0;
`;

export default Error;