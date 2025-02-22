import { Avatar, Box, Button, Flex, HStack, Icon, Img, Popover, PopoverTrigger, Text, useDisclosure } from "@chakra-ui/react";
import { ImNewspaper } from "react-icons/im";
import { menuItemHeader } from "../../../../utils/lists/menuListsHeader";
import { Fragment, useState } from "react";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderPopover } from "../../../../utils/modals/PopoverHeader";
import { RiArrowDownSFill } from "react-icons/ri";
import { useContextFeedContext } from "@/Components/Context";
import { DrawerNavHeader } from "../../../../utils/modals/DrawerNavHeader";
import { BsMenuButton } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

interface MobileProps {
    isMobile: boolean;
};

export function Header({ isMobile } : MobileProps) {

    const { isOpen, onOpen, onClose} = useDisclosure();
    const router = useRouter();
    const { user } = useContextFeedContext();
    const [open, setOpen] = useState<boolean>(false);
    
    function handleOpenDrawer() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    // variaveis para condição de rota

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
        <Flex
            zIndex={1}
            justify={"space-around"}
            position={"fixed"}
            top={0}
            align={"center"}
            bg={"white"}
            w={"100%"}
            borderBottom={"1px solid"} borderBottomColor={"black.100"}
            pb={"0.2rem"} pl={"0.2rem"} pt={"0.2rem"}
        >
            {isMobile ? (
                <>
                <Button bg={"violet.600"} onClick={handleOpenDrawer}>
                        <IoMenu size={24} color="white" />
                    </Button>
                <Box>
                <Text color={"violet.700"} fontSize={"2rem"} fontWeight={"bold"}>
                    FeedFlow
                </Text>
            </Box>
                    
                </>
            ) : (
                <>
                <Box>
                <Text color={"violet.700"} fontSize={"2rem"} fontWeight={"bold"}>
                    FeedFlow
                </Text>
            </Box>

            <HStack gap={16}>
                {menuItemHeader.map((item, idx) => (
                    <Fragment key={idx}>
                        {item.link && (
                            <Link href={item.link}>
                                <Box w={"100%"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    flexDir={"column"}
                                    color={
                                        isRouteHome && item.link === routeHome || 
                                        isRouteImage && item.link === routeImage || 
                                        isRouteVideos && item.link === routeVideos ? 'violet.600' : ''
                                    }
                                    _hover={{
                                        color: 'violet.700'
                                    }}
                                    borderBottom={
                                        isRouteHome && item.link === routeHome || 
                                        isRouteImage && item.link === routeImage || 
                                        isRouteVideos && item.link === routeVideos ? '2px solid' : ''
                                    }
                                    borderBottomColor={
                                        isRouteHome && item.link === routeHome || 
                                        isRouteImage && item.link === routeImage || 
                                        isRouteVideos && item.link === routeVideos ? 'violet.500' : ''
                                    }
                                >
                                    <Icon boxSize={"1.5rem"} as={item.icon} />
                                    <Text
                                        fontSize={"0.75rem"}
                                    >
                                        {item.title}
                                    </Text>
                                </Box>
                            </Link>
                        )}
                    </Fragment>
                ))}
            </HStack>
                </>
            )}

            <Box>
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
                                <Avatar src={user?.photoURL || undefined} objectFit={"cover"} />
                            ) : (
                                <Flex alignItems={"center"} gap={2}>
                                    <Avatar h={"32px"} w={"32px"}/>
                                    <Text>Visitante</Text>
                                </Flex>
                            )}
                        </Button>
                    </PopoverTrigger>
                    {isOpen && (
                        <HeaderPopover user={user} />
                    )}
                </Popover>
            </Box>
            {open && (
                <DrawerNavHeader handleClose={handleClose} handleOpenDrawer={handleOpenDrawer} open={open} />
            )}
        </Flex>
    );
};