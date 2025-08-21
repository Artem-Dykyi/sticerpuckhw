import styled from "styled-components";

const Box = styled.div`
    padding: 10px;
    background:rgb(180, 255, 224);
    width: 200px;
    text-align: center;
`;

const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 40px;
`;

export const StickerList = ({ img, label }) => {
  return (
    <Box>
      <Photo src={img} alt={label} />
    </Box>
  );
};