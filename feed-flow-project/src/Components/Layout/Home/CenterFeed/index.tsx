import { Fragment, useEffect, useState } from "react";
import { PropsContentPost, contentPost } from "../../../../../utils/lists/posts";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Icon, Img, Text, VStack } from "@chakra-ui/react";
import { ClipLoader, PulseLoader } from "react-spinners";
import { RenderNewsOne } from "./newsOne";
import { RenderNewsTwo } from "./newsTwo";
import { RenderNewsThree } from "./newsThree";
import { Loader } from "@/Components/Loader";
import { VariablesContextType } from "../../../../../utils/interface/InterfaceContext";

export function CenterFeed({ combinedData, setCombinedData, user } : VariablesContextType) {

    if (combinedData?.length < 1) {
        return (
            <Loader />
        );
    };

    console.log(combinedData)

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