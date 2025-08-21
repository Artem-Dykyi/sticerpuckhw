import styled from "styled-components";
import { StickerList } from "./StickerList";

const Page = styled.div`
    display:flex;
    background:rgb(180, 255, 224);
    width: 1300px;
    padding: 80px;
    margin-left:auto;
    margin-right:auto;
`

export const Sticker = ({stickers}) =>{
    return(
        <Page>
            {stickers.map((s, index)=>
            <StickerList
                key={index}
                img={s.img}
            />
)}
        </Page>
    )
    
}

export default Sticker