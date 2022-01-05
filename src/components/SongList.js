import React from "react";
import SongCard from "./SongCard";
import { useEffect } from 'react';
import '../css/SongList.scss';
import { Carousel, rightArrow } from '@trendyol-js/react-carousel';
import useFetch from './useFetch'

export default function SongList({ loading, heading, data}) {

    if (loading) return <div>Loading...</div>

    return (
        <div className="m-10">
            <div>
                <p className="font-bold text-2xl mb-6">{heading}</p>
            </div>

            {!loading ? (<Carousel show={8} useArrowKeys={true} slide={1} swiping={true}>
                {data.map((item, index) => {
                    const  {album, image, title} = item;
                    console.log();
                    return (
                        <SongCard key={index} album={album} image={image} title={title}/>
                    )
                })}
            </Carousel>) : null}

        </div>
    );
}
