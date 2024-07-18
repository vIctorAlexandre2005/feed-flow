import { Box, HStack } from "@chakra-ui/react"
import React from "react"

type ChildrenPropsLayout = {
    children: React.ReactNode
}
export function MainLayout({ children }: ChildrenPropsLayout) {
    return (
        <Box h={"100%"} w={"100%"} bg={"black.50"}>
            {children}
        </Box>
    )
}