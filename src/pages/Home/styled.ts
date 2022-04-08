import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
export const Main = styled.div`
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 50px;
`
export const SectionLeft = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;


`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: flex-start;

    width: 80%;
    height: 50%;
`
export const Sectionright = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Title = styled.div`
  
font-style: normal;
font-weight: 600;
font-size: 69px;
line-height: 125%;

letter-spacing: -0.222222px;

color: #116FA8;
margin-bottom: 30px;

`
export const P = styled.div`
   font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 125%;

letter-spacing: -0.222222px;

color: #116FA8;
margin-bottom: 30px;

    
`
export const Button = styled.div`
    background: #0077C0;
    border-radius: 4px;
    padding: 20px 50px;
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 18px;
    /* or 63% */

    text-align: center;

    color: #FFFFFF;
`