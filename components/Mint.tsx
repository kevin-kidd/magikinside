import {FunctionComponent} from "react";
// @ts-ignore
import Roll from "react-reveal/Roll";
// @ts-ignore
import Fade from "react-reveal/Fade";
import Image from "next/future/image";
import Countdown, {CountdownRendererFn} from "react-countdown";

export const Mint: FunctionComponent = () => {
    const renderer: CountdownRendererFn = ({ hours, minutes, seconds, completed }) => {
        if (completed) return (
            <div className="w-full flex flex-row items-center gap-x-4 justify-center max-w-lg sm:text-4xl">
                <h4 className="font-AHS text-white">
                    Hours:
                </h4>
                <div className="w-fit h-fit px-3 py-1 timer-box text-lg sm:text-2xl bg-black rounded-btn">
                    <h4 className="text-red-700">
                        6
                    </h4>
                </div>
                <h4 className="font-AHS text-white">
                    Minutes:
                </h4>
                <div className="w-fit h-fit px-3 py-1 timer-box text-lg sm:text-2xl bg-black rounded-btn">
                    <h4 className="text-red-700">
                        6
                    </h4>
                </div>
                <h4 className="font-AHS text-white">
                    Seconds:
                </h4>
                <div className="w-fit h-fit px-3 py-1 timer-box text-lg sm:text-2xl bg-black rounded-btn">
                    <h4 className="text-red-700">
                        6
                    </h4>
                </div>
            </div>
        );
        else return (
            <div className="w-full flex flex-row items-center gap-x-4 justify-center max-w-lg sm:text-4xl">
                <h4 className="font-AHS text-white">
                    Hours:
                </h4>
                <div className="w-fit h-fit px-3 py-1 timer-box text-lg sm:text-2xl bg-black rounded-btn">
                    <h4 className="text-red-700">
                        {hours}
                    </h4>
                </div>
                <h4 className="font-AHS text-white">
                    Minutes:
                </h4>
                <div className="w-fit h-fit px-3 py-1 timer-box text-lg sm:text-2xl bg-black rounded-btn">
                    <h4 className="text-red-700">
                        {minutes}
                    </h4>
                </div>
                <h4 className="font-AHS text-white">
                    Seconds:
                </h4>
                <div className="w-fit h-fit px-3 py-1 timer-box text-lg sm:text-2xl bg-black rounded-btn">
                    <h4 className="text-red-700">
                        {seconds}
                    </h4>
                </div>
            </div>
        );
    };
    return (
        <div className="w-full h-full min-h-screen flex flex-col sm:pb-0 bg-[#171717] overflow-x-hidden" id="mint">
            <h1 className="text-6xl text-white font-AHS w-full text-center mt-16 my-12">
                MINT
            </h1>
            <div className="pb-20 w-full h-full flex flex-col gap-y-8 w-full h-full items-center">
                <Countdown
                    date={Date.now() - 10000} // Add date here
                    renderer={renderer}
                />
                <div className="w-1/2 sm:w-1/5 h-auto flex justify-center items-center">
                    <Roll left>
                        <Image src={"/circle-icon.png"} alt="MINT" width={1200} height={1200} className="w-full h-full mint-button transition duration-300" />
                    </Roll>
                </div>
                <Fade bottom>
                    <h1 className="text-red-700 text-center text-4xl sm:text-7xl font-AHS coming-soon">COMING SOON</h1>
                </Fade>
            </div>
        </div>
    )
};