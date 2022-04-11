import styled from 'styled-components'

export const Container = styled.div`
    border: 0;
    background-color: #0077C0;
    color: #FFFFFF;
    height: 11.2vh;
    padding: 2em 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;

    display: flex;
    padding: 30px;

    ul { 
        list-style: none;
        display: flex;
    }
    li {
        padding-right: 3rem;
        cursor: pointer;
        :hover,:focus {
  text-decoration: underline;
}
    }
`
export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #FFFFFF;
`
export const LogoName = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: #FFFFFF;
    margin-left: 20px;
`