import { Fragment, useEffect, useState } from "react";
import { PropsContentPost, contentPost } from "../../../../../utils/lists/posts";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Icon, Img, Text, VStack } from "@chakra-ui/react";
import { PulseLoader } from "react-spinners";
import { RenderNewsOne } from "./newsOne";
import { RenderNewsTwo } from "./newsTwo";
import { RenderNewsThree } from "./newsThree";
import { VariablesContextType, useContextFeedContext } from "@/Components/Context";

export function CenterFeed({ combinedData, setCombinedData, user } : VariablesContextType) {

    if (combinedData?.length === 0) {
        return (
            <Flex justify={"center"}>
                <PulseLoader size={24} color="#8535fd" />
            </Flex>
        );
    };

    return (
        <>
            {combinedData?.map((item, idx) => (
                <Fragment key={idx}>
                    <RenderNewsOne user={user} item={item} idx={idx} />
                    <RenderNewsTwo item={item} user={user} idx={idx} />
                    <RenderNewsThree item={item} user={user} idx={idx} />
                </Fragment>
            ))}
        </>
    )
}