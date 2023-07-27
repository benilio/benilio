"use client";

import { useEffect, useState } from "react";
import { fetchRandomTrack } from "@/utils/fetchData";
import Image from "next/image";

const RandomTrack = () => {
  const [randomTrack, setRandomTrack] = useState<any>(null);

  useEffect(() => {
    const getRandomTrack = async () => {
      const track = await fetchRandomTrack();
      setRandomTrack(track);
    };

    getRandomTrack();
  }, []);

  return (
    <>
      {randomTrack ? (
        <div className="relative overflow-clip">
          <Image
            className="rounded-md"
            width={200}
            height={200}
            src={randomTrack.image[3]["#text"]}
            alt={randomTrack.album["#text"]}
          />
          <div className="rounded-sm absolute bottom-0 h-full w-full bg-gradient-to-t from-gray-900/90 to-transparent"></div>

          <div className="absolute bottom-0 p-4">
            <p className="font-bold">{randomTrack.name}</p>
            <p>{randomTrack.artist["#text"]}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default RandomTrack;
