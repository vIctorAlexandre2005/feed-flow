import { Box, HStack } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { Header } from "./Header"

type ChildrenPropsLayout = {
    children: React.ReactNode
}
export function MainLayout({ children }: ChildrenPropsLayout) {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 560);
    };

    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <Box h={"100%"} w={"100%"} bg={"violet.50"}>
            <Header isMobile={isMobile} />
            {children}
        </Box>
    )
}