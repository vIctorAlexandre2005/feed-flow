import { Box, HStack } from "@chakra-ui/react"
import React from "react"
import { Header } from "./Header"

type ChildrenPropsLayout = {
    children: React.ReactNode
}
export function MainLayout({ children }: ChildrenPropsLayout) {
    return (
        <Box h={"100vh"} w={"100%"} bg={"black.50"}>
            <HStack>
                <Header />
            </HStack>
            {children}
        </Box>
    )
}