import { Box, HStack } from "@chakra-ui/react"
import React from "react"
import { Header } from "./Header"

type ChildrenPropsLayout = {
    children: React.ReactNode
}
export function MainLayout({ children }: ChildrenPropsLayout) {
    return (
        <Box h={"100%"} w={"100%"} bg={"violet.50"}>
            <Header />
            {children}
        </Box>
    )
}