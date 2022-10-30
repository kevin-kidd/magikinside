import styled from "styled-components";
import {FunctionComponent} from "react";


const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: linear-gradient(130deg, 232526, #414345);
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  transform: ${(props: { right?: boolean }) => (props.right ? "translateX(calc(50% + 45px))" : "translateX(calc(-50% - 45px))")};
  & > * {
    z-index: 1;
  }
  h1 {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  p {
    margin: 0;
  }

  .date {
    text-transform: uppercase;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    filter: brightness(0.2);
    transition: 0.25s ease;
    object-fit: cover;
  }

  :hover {
    .stick::after {
      box-shadow: 0 0 10px red;
    }
    img {
      filter: brightness(0.3);
    }
  }

  @media (max-width: 768px) {
    transform: none;
    left: 0;
    position: relative;
    padding: 10px;
  }

  @media (min-width: 769px) and (max-width: 990px) {
    max-width: 300px;
  }
`;

const Stick = styled.div`
  position: absolute;
  background-color: #ffffff;
  left: ${(props: { right?: boolean }) => props.right && 0};
  right: ${(props: { right?: boolean }) => !props.right && 0};
  top: 25px;
  height: 1px;
  width: 40px;
  transform: ${(props: { right?: boolean }) => (props.right ? "translateX(-100%)" : "translateX(100%)")};
  ::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    top: 50%;
    left: ${(props: { right?: boolean }) => props.right && 0};
    right: ${(props: { right?: boolean }) => !props.right && 0};
    transform: ${(props: { right?: boolean }) => (props.right ? "translateX(-100%) translateY(-50%)" : "translateX(100%) translateY(-50%)")};
    box-sizing: border-box;
    transition: 0.25s ease;
  }

  @media (max-width: 768px) {
    width: 20px;
    transform: translateX(-100%);
    left: 0;
    right: auto;
    ::after {
      transform: translateX(-100%) translateY(-50%);
      left: 0;
      right: auto;
    }
  }
`;

const RoadmapCard: FunctionComponent<{
    date: string,
    title: string,
    body: string,
    right: boolean
}> = ({ date, title, body, right }) => {
    return (
        <Card right={right}>
            <Stick className="stick" right={right} />
            {date && <p className="date text-sm">{date}</p>}
            <h1 className="text-tiny sm:text-lg mb-1">{title}</h1>
            <p className="text-xs">{body}</p>
            <img src={"/roadmap-card-bg.webp"} loading="lazy" alt="" />
        </Card>
    );
};

export default RoadmapCard;
