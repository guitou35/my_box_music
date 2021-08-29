import styled from "styled-components";

export default function Footer({handleToggleTheme, isLight}) {

    return (
        <Wrapper>
            <button onClick={handleToggleTheme}>
                Switch to {isLight ? "dark" : "light"}
            </button>
        </Wrapper>
    )
};

const Wrapper = styled.footer`
    height: 80px;   
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.mainColor};
    `;
