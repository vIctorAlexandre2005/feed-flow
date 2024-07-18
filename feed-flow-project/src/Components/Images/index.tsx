/* import { Box } from "@chakra-ui/react";
import axios from "axios";
import { createClient } from "pexels";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { getPhotosBrabo } from "../services/PexelsImage";

export function RenderImages() {

    useEffect(() => {
        getPhotosBrabo(500);
    }, []);

    if (photos.length < 100) {
        return (
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={"16rem"}>
                <ClipLoader size={40} color='green' />
            </Box>
        );
    };

    return (
        <div>
            <h1>Unsplash Photos</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {photos.map((photo) => (
                    <div key={photo.id}>
                        <a href={photo?.photographer_url} target="_blank">{photo?.photographer}</a>
                        <img src={photo?.src?.original} style={{ width: '100%' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}
 */