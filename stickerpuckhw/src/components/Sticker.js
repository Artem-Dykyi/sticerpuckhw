import styled from "styled-components";
import { StickerList } from "./StickerList";
import { Component } from "react";

const Page = styled.div`
    display:flex;
    background:rgb(180, 255, 224);
    width: 1300px;
    padding: 80px;
    margin-left:auto;
    margin-right:auto;
`

const SelectedBox = styled.div`
  margin-top: 40px;
  text-align: center;
  width: 250px;
  height: 250px;
  margin-left:auto;
  margin-right:auto;
  background:rgb(200, 235, 244);
`;

const SelectedImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 30px;
  border: 2px solid #333;
`;

export class Sticker extends Component{
    state = {
         selected: null,
    };

    handleSelect = (sticker) =>{
        this.setState({selected: sticker})
    }

     render() {
        const { stickers } = this.props;
        const { selected } = this.state;

    return(
        <div>
        <Page>
          {stickers.map((s, index) => (
            <div key={index} onClick={() => this.handleSelect(s)}>
              <StickerList img={s.img} label={s.label} />
            </div>
          ))}
        </Page>

          {selected && (
          <SelectedBox>
            <SelectedImg src={selected.img} alt={selected.label} />
            <h2>{selected.label}</h2>
          </SelectedBox>
        )}
        </div>
        )
    
}
}

export default Sticker