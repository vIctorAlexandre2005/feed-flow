import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";

const customTheme = extendTheme({
	breakpoints,
	colors,
});

export { customTheme };
