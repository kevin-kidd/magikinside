import {FunctionComponent} from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";

export const Hero: FunctionComponent = () => {

    return (
        <div className="w-full h-screen -mt-20 relative hero overflow-x-hidden">
            <Fade right>
                <img src="/head.png" width={1125} height={1163} alt="HEAD" className="hidden sm:flex absolute w-[40%] h-auto
                    right-0 right-10 bottom-10" />
            </Fade>
            <Fade bottom>
                <img src="/head.png" width={1125} height={1163} alt="HEAD" className="sm:hidden absolute bottom-[20%] w-full px-20 left-0 right-0 mx-auto" />
            </Fade>
            <div className="absolute sm:left-[20%] top-[15%] sm:top-[25%] flex flex-col gap-y-10 text-gray-300 text-3xl sm:text-6xl font-Roboto-2">
                <Fade top cascade>
                    <div className="text-center flex flex-col gap-y-4">
                        <h2>
                            Welcome To
                        </h2>
                        <h1 className="text-white">
                            Magik Inside
                        </h1>
                    </div>
                </Fade>
                <Fade bottom>
                    <p className="ml-4 text-base w-[90%] px-10 sm:px-0 text-center sm:text-start sm:w-96">
                        Explore a new dimension of collectibles. Dive deep into your imagination and immerse yourself in a world where everything is yours to explore, evolve and experience.
                    </p>
                </Fade>
            </div>
        </div>
    )
};