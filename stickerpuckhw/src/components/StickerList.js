import styled from "styled-components";

const Box = styled.div`
    padding: 10px;
    background:rgb(189, 214, 129);
    width: 300px;
    text-align: center;
`;

const Photo = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 40px;
`;

export const StickerList = ({ img, label }) => {
  return (
    <Box>
      <Photo src={img} alt={label} />
    </Box>
  );
};