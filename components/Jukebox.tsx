"use client";

import axios from "axios";

export const fetchRandomTrack = async () => {
  try {
    const response = await axios.get("https://ws.audioscrobbler.com/2.0/", {
      params: {
        method: "user.getrecenttracks",
        user: "Fitchz",
        api_key: "e98cb1d6f3ab676472a1881bc1081823",
        format: "json",
        limit: 50, // Range limit
      },
    });

    // Array of recent tracks, until limit
    const recentTracks = response.data.recenttracks.track;

    // Generate a random index to get a random recent track
    const randomIndex = Math.floor(Math.random() * recentTracks.length);

    // Return the random track
    return recentTracks[randomIndex];
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const jukeboxTrack = async () => {
  const response = await axios
    .get("https://ws.audioscrobbler.com/2.0/", {
      params: {
        method: "user.getrecenttracks",
        user: "Fitchz",
        api_key: "e98cb1d6f3ab676472a1881bc1081823",
        format: "json",
        limit: 50, // Range limit
      },
    })
    .then(function (response) {
      // Array of recent tracks, until limit
      const recentTracks = response.data.recenttracks.track;

      // Generate a random index to get a random recent track
      const randomIndex = Math.floor(Math.random() * recentTracks.length);

      console.log(response);

      return recentTracks[randomIndex];
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <section>
      <h1>Jukebox</h1>
      <p>{response}</p>

      {/*{tracks.map((track) => (*/}
      {/*  <p key={track.recenttracks.track[0]}>*/}
      {/*    {track.recenttracks.track[0].name}*/}
      {/*  </p>*/}
      {/*))}*/}
    </section>
  );
};

export default jukeboxTrack();
