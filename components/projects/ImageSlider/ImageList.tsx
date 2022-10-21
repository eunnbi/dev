import styled from "styled-components";

interface ImageListProps extends Pick<Project, "images"> {
  position: Position;
}

const ImageList = ({ position, images }: ImageListProps) => {
  return (
    <List>
      {images.map((image, index) => (
        <ImageItem
          key={index}
          index={index}
          position={
            index === position.current
              ? "current"
              : index === position.prev
              ? "prev"
              : "next"
          }
          src={`/images/projects/${image}`}
        />
      ))}
    </List>
  );
};

export default ImageList;

const List = styled.ul`
  width: 100%;
  height: auto;
  max-height: 450px;
  overflow: hidden;
  margin: 0 1rem;
  position: relative;
  display: flex;
  @media screen and (max-width: 1500px) {
    max-width: 600px;
    width: 80vw;
  }
`;

const ImageItem = styled.img<{ position: string; index: number }>`
  object-fit: contain;
  width: 100%;
  transition: all 0.3s ease-in-out;
  opacity: ${({ position }) => (position === "current" ? 1 : 0)};
  transform: ${({ position, index }) =>
    position === "current"
      ? `translateX(${-(index * 100) + 0}%)`
      : position === "prev"
      ? `translateX(${-(index * 100) - 100}%)`
      : `translateX(${-(index * 100) + 100}%)`};
`;
