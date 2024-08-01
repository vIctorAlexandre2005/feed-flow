import { Box, HStack } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { Header } from "./Header"
import { useContextFeedContext } from "../Context"
import { NotFound404 } from "../404"
import { ModalPWA } from "../../../utils/modals/ModalInstallPWA"

type ChildrenPropsLayout = {
    children: React.ReactNode
}
export function MainLayout({ children }: ChildrenPropsLayout) {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const { error, installPrompt, handleInstall} = useContextFeedContext();
    const [isOpen, setIsOpen] = useState(true);

    function handleClose() {
        setIsOpen(false);
    };

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 1024);
    };

    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    if(error) {
        return (
            <Box bg={"transparent"}>
              <NotFound404 />
            </Box>
        );
    };

    return (
        <Box h={"100%"} w={"100%"} bg={"violet.50"}>
            {!error && (
                <>
                <Header isMobile={isMobile} />
                {children}
                </>
            )}
            {installPrompt && (
                    <ModalPWA isOpen={isOpen} onClose={handleClose} />
                )}
        </Box>
    )
}