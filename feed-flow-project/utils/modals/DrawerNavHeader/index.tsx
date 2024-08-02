import { Avatar, Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Icon, Popover, PopoverTrigger, Text, useDisclosure } from "@chakra-ui/react";
import { HeaderPopover } from "../PopoverHeader";
import { useContextFeedContext } from "@/Components/Context";
import { menuItemHeader } from "../../lists/menuListsHeader";
import { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaCaretDown } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { ModalAbout } from "../about";
import { ModalAboutMobile } from "../aboutMobile";

interface PropsDrawerHeader {
    handleOpenDrawer: () => void;
    handleClose: () => void;
    open: boolean;
};

export function DrawerNavHeader({ handleOpenDrawer, handleClose, open }: PropsDrawerHeader) {
    const { user } = useContextFeedContext();
    const { onOpen, isOpen, onClose } = useDisclosure();
    const router = useRouter();

    const [openAbout, setIsOpenAbout] = useState<boolean>(false);

    function handleOpenAbout() {
        setIsOpenAbout(true);
    };

    function handleCloseAbout() {
        setIsOpenAbout(false);
    }

    //HOME
    const routeHome = '/';
    const isRouteHome = router.pathname === routeHome;

    //IMAGES
    const routeImage = '/images';
    const isRouteImage = router.pathname === routeImage;

    //VIDEOS
    const routeVideos = '/videos';
    const isRouteVideos = router.pathname === routeVideos;

    return (
        <Drawer placement="left" isOpen={open} onClose={handleClose}>
            <DrawerOverlay />
            <DrawerContent bg={"white"}>
                <DrawerHeader mb={"2.5rem"}>
                    <Popover>
                        <PopoverTrigger>
                            <Button
                                alignItems={"center"}
                                flexDir={"column"}
                                display={"flex"}
                                justifyContent={"center"}
                                onClick={onOpen}
                                _hover={{
                                    color: 'black'
                                }}
                                bg={"transparent"}
                                color={"black.700"}
                                _focusVisible={"none"}
                                _focus={"none"}
                            >
                                {user ? (
                                    <Box mt={"2rem"}>
                                        <Avatar src={user?.photoURL || undefined} objectFit={"cover"} />
                                        <Box mt={"0.5rem"}>
                                            <Text fontWeight={"500"}>{user?.displayName}</Text>
                                            <Text display={"flex"} fontWeight={"500"} alignItems={"center"} fontSize={"0.75rem"}>{user?.email} <FaCaretDown size={16} color="purple" /></Text>
                                        </Box>
                                    </Box>
                                ) : (
                                    <Flex alignItems={"center"} gap={2}>
                                        <Avatar h={"32px"} w={"32px"} />
                                        <Text>Visitante</Text>
                                    </Flex>
                                )}
                            </Button>
                        </PopoverTrigger>
                        {isOpen && (
                            <HeaderPopover user={user} />
                        )}
                    </Popover>
                    <DrawerCloseButton />
                </DrawerHeader>
                <Divider />
                <DrawerBody p={"2"} mt={"1rem"}>
                    {menuItemHeader.map((item, idx) => (
                        <Fragment key={idx}>
                            {item.link && (
                                <Link href={item.link}>
                                    <Box w={"100%"}
                                        onClick={handleClose}
                                        padding={"0.5rem"}
                                        display={"flex"}
                                        justifyContent={"left"}
                                        alignItems={"center"}
                                        gap={8}
                                        color={
                                            isRouteHome && item.link === routeHome ||
                                                isRouteImage && item.link === routeImage ||
                                                isRouteVideos && item.link === routeVideos ? 'violet.700' : 'black'
                                        }
                                        _hover={{
                                            color: 'violet.700'
                                        }}
                                        borderRadius={"12px"}
                                        bg={isRouteHome && item.link === routeHome ||
                                            isRouteImage && item.link === routeImage ||
                                            isRouteVideos && item.link === routeVideos ? 'violet.300' : ''}
                                    >
                                        <Icon boxSize={"2rem"} as={item.icon} />
                                        <Text
                                            fontSize={"1rem"}
                                            fontWeight={"bold"}
                                        >
                                            {item.title}
                                        </Text>
                                    </Box>
                                </Link>
                            )}
                        </Fragment>
                    ))}
                    <Box w={"100%"}
                        onClick={
                            handleOpenAbout
                        }
                        padding={"0.5rem"}
                        display={"flex"}
                        justifyContent={"left"}
                        alignItems={"center"}
                        _hover={{
                            color: 'white',
                            bg: 'violet.600',
                        }}
                        borderRadius={"12px"}
                    >
                        <Button
                            fontSize={"1rem"}
                            display={"flex"}
                            gap={8}
                            fontWeight={"bold"}
                            onClick={
                                handleOpenAbout
                            }
                            _hover={{
                                bg: 'transparent',
                                color: 'white'
                            }}
                            p={0}
                            bg={"transparent"}
                            alignItems={"center"}
                        >
                            <FcAbout size={"2rem"} /> Sobre
                        </Button>
                    </Box>
                </DrawerBody>

                <Divider />

                <DrawerFooter display={"flex"} justifyContent={"center"}>
                    <Text>Desenvolvido por: Victor Alexandre</Text>
                </DrawerFooter>

            </DrawerContent>
            {openAbout && (
                <ModalAboutMobile  isOpen={openAbout} onClose={handleCloseAbout} />
            )}
        </Drawer>
    )
}