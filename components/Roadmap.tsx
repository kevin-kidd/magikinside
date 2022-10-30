import {FunctionComponent} from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";
import RoadmapCard from "./RoadmapCard";
import styled from "styled-components";

type Orb = {
    bottom?: string
    top?: string
}

const roadmap = [
    {
        date: "Q4 2022",
        title: "Magik Inside",
        body: "Step into the Magic Circle and join the dark revolution!"
    },
    {
        date: "Q1 2023",
        title: "Free NFT Drop",
        body: "All MagikInside holders will get first dibs. Yet unnamed, for names are but words for the forces of Nature themselves."
    },
    {
        date: "Q1 2023",
        title: "Black Mass",
        body: "Get into the Spirit with the MagikInside crew. Learn that the key of joy is disobedience."
    },
    {
        date: "Q3 2023",
        title: "Tetra Cards",
        body: "A single ego is an absurdly narrow vantage point from which to view the world."
    }
];

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 30px 0;
  width: 100%;
  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: #ffffff;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    padding-left: 25px;
    ::before {
      left: 0;
    }
  }
`;

const Orb = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 50%;
  top: ${(props: Orb) => props.top};
  bottom: ${(props: Orb) => props.bottom};
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 0;
  }
`;

export const Roadmap: FunctionComponent = () => {

    return (
        <div className="w-full h-screen relative roadmap-section" id="roadmap">
            <div className="h-full w-full px-2 absolute left-0 top-0">
                <h1 className="text-6xl text-white font-AHS w-full text-center my-4 sm:my-12">
                    ROADMAP
                </h1>
                <div className="h-full my-auto">
                    <div className="sm:hidden flex w-[90%]">
                        <Container>
                            <Orb top="0" />
                            {roadmap.map((section, i) => (
                                <Fade bottom key={`roadmap-${i}`}>
                                    <RoadmapCard {...section} right={true} />
                                </Fade>
                            ))}
                        </Container>
                    </div>
                    <div className="hidden sm:flex w-full overflow-x-hidden">
                        <Container>
                            <Orb top="0" />
                            {roadmap.map((section, i) => {
                                if(i % 2 === 0) {
                                    return (
                                        <Fade right key={`roadmap-${i}`}>
                                            <RoadmapCard {...section} right={true} />
                                        </Fade>
                                    )
                                } else {
                                    return (
                                        <Fade left key={`roadmap-${i}`}>
                                            <RoadmapCard {...section} right={false} />
                                        </Fade>
                                    )
                                }
                            })}
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
};