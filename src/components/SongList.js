import React from "react";
import SongCard from "./SongCard";
import { useEffect } from 'react';
import TinySlider from "tiny-slider-react";
import '../css/SongList.scss'

export default function ItemsList() {

    const SliderConfig = {
        lazyload: true,
        nav: true,
        mouseDrag: true,
        loop: false,
        items: 1,
        slideBy: 'page',
        autoplay: false,
        speed: 100,
        autoplayButtonOutput: false,
        responsive: {
            320: {
                items: 1,
            },
            533: {
                items: 2,
            },
            640: {
                items: 3,
            },

            768: {
                items: 5,
            }
        }
    };


    return (
        <div className="px-5">
            <div>
                <p className="font-bold text-2xl mb-3">Heading</p>
            </div>
            {/* // settings for the tiny slider */}

            <div className="slider-wrapper">
                <TinySlider settings={SliderConfig} >
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                </TinySlider>
            </div>

        </div>
    );
}


{/* <div className="relative w-screen m-10">
            <div className="flex items-center " >
                <p className="text-lg font-semibold " >Heading</p>
                <div className="w-3/6   mx-3 border-2 border-grey-700 " ></div>
            </div> */}