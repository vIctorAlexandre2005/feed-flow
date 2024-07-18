import { Box, Button, Flex, HStack, Icon, Img, Popover, PopoverTrigger, Text, useDisclosure } from "@chakra-ui/react";
import { ImNewspaper } from "react-icons/im";
import { menuItemHeader } from "../../../../utils/lists/menuListsHeader";
import { Fragment, useState } from "react";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderPopover } from "../../../../utils/modals/PopoverHeader";
import { RiArrowDownSFill } from "react-icons/ri";

export function Header() {

    const { isOpen, onOpen } = useDisclosure();
    const router = useRouter();

    return (
        <Flex
            justify={"space-around"}
            align={"center"}
            bg={"white"}
            w={"100%"}
            borderBottom={"1px solid"} borderBottomColor={"black.100"}
            pb={"0.2rem"} pl={"0.2rem"} pt={"0.2rem"}
        >
            <Box>
                <Img src="/favicon.ico" h={50} w={50} objectFit={"cover"} />
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
                                    color={"black.700"}
                                    _hover={{
                                        color: 'black'
                                    }}
                                    borderBottom={item.link === '/' ? '2px solid' : ''}
                                        borderBottomColor={item.link === '/' ? 'black.950' : ''}
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
                                color: 'black',
                                bg: 'transparent'
                            }}
                            bg={"transparent"}
                            color={"black.700"}
                            _focusVisible={"none"}
                            _focus={"none"}
                        >
                            <MdDashboard size={24} />
                            <Text
                                textAlign={"center"}
                                display={"flex"}
                                alignItems={"center"}
                                fontWeight={"500"}
                                fontSize={"0.75rem"}
                            >
                                Saiba mais <RiArrowDownSFill size={16} />
                            </Text>
                        </Button>
                    </PopoverTrigger>
                    {isOpen && (
                        <HeaderPopover />
                    )}
                </Popover>
            </Box>
        </Flex>
    );
};