/* import { createClient } from "pexels";
import { useState } from "react";

export function getPhotosBrabo(length: number) {
    const [videosLoaded, setvideosLoaded] = useState<Boolean>(false);
    const [photos, setPhotos] = useState([]);
    const randomQuery = () => {
        const queries = [
            "Funny",
            "Art",
            "Animals",
            "Coding",
            "Space",
            "Nature",
            "Night",
            "Underwater",
            "Adult"
        ];
        return queries[Math.floor(Math.random() * queries.length)];
    };
    const client = createClient('cRMrkHJu2v1W9pEgo8w4SpybDYQE6k2v1Zq5LPpqUiP72esLQVIXjiph');
    const query = randomQuery();
    client.photos.search({ query, per_page: length }).then((result) => {
        if ('photos' in result) {
            setPhotos((oldPhotos: any) => [...oldPhotos, ...result.photos])
        }
        setvideosLoaded(true);
    })
} */