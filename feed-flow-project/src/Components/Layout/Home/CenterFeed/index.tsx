import { Fragment, useEffect, useState } from "react";
import { PropsContentPost, contentPost } from "../../../../../utils/lists/posts";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Icon, Img, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { BiHeart } from "react-icons/bi";
import { GrLike } from "react-icons/gr";
import { BsChat } from "react-icons/bs";
import { RenderNewsOne } from "./newsOne";
import { RenderNewsTwo } from "./newsTwo";
import { RenderNewsThree } from "./newsThree";

export function CenterFeed() {

    const [combinedData, setCombinedData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const [
                    usersResponse, 
                    usersResponse200, 
                    newsResponseBr, 
                    newsResponseApple, 
                   /*  newsResponseUs */
                ] = await Promise.all([
                    axios.get("https://randomuser.me/api/?results=100"),
                    axios.get("https://randomuser.me/api/?results=200"),
                    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=343a4fdb5cf14397a3f251cba8370a51"),
                    axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-07-23&to=2024-07-23&sortBy=popularity&apiKey=343a4fdb5cf14397a3f251cba8370a51"),
                    /* axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=343a4fdb5cf14397a3f251cba8370a51"), */
                ]);

                const usersData = usersResponse.data?.results;
                const userData100 = usersResponse200.data?.results
                const newsDataBr = newsResponseBr.data?.articles;
                const newsApple = newsResponseApple.data.articles;
                /* const newsDataUs = newsResponseUs.data?.results; */

                // Combine the data as needed
                const combined = usersData.map((user: any, index: number) => ({
                    user,
                    user100: userData100[index % userData100?.length], 
                    newsBr: newsDataBr[index % newsDataBr?.length], // Just an example of combininga
                    newsAp: newsApple[index % newsApple?.length],
                    /* newsUs: newsDataUs[index % newsDataUs?.length] */
                }));

                setCombinedData(combined);
                console.log(combined);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    if (combinedData?.length === 0) {
        return (
            <Flex justify={"center"}>
                <PulseLoader size={24} color="blue" />
            </Flex>
        )
    }

    return (
        <>
            {combinedData?.map((item, idx) => (
                <Fragment key={idx}>
                    <RenderNewsOne item={item} />
                    <RenderNewsTwo item={item} />
                    {/* <RenderNewsThree item={item} /> */}
                </Fragment>
            ))}
        </>
    )
}