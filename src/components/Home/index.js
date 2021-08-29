import styled from "styled-components";
import GridButton from "./GridButton";
import useSounds from "hooks/useSounds";

export default function Home() {

    const {buttonsList} = useSounds();
    return <Wrapper>
        <Grid>{buttonsList.map(({soundPlay, isPlayed, id, handleChangeSample}, index)=>{
            return <GridButton
                soundPlay={soundPlay}
                isPlayed={isPlayed}
                key={index}
                id={id}
            handleChangeSample={handleChangeSample}
            />
        })} </Grid>
    </Wrapper>
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const Grid = styled.div`
    display: grid;
    width: 400px;
    height: 400px;
    grid-template-columns: 1fr 1fr;
    column-gap : 12px;
    row-gap : 12px;
    margin: auto;
    
    @media(max-width : 640px){
    width: 300px;
    height: 300px;  
    }
`;