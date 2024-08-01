import { IconType } from "react-icons";
import { BiCamera } from "react-icons/bi";
import { ImNewspaper } from "react-icons/im";
import { LiaVideoSolid } from "react-icons/lia";
import { MdDynamicFeed, MdNewspaper, MdOutlineNewspaper, MdVideoLibrary } from "react-icons/md";
import { PiNewspaperBold } from "react-icons/pi";
import { Url } from "url";

export type ModalLinksProps = {
	icon: IconType;
	title: string;
	link?: string;
};

export const menuItemHeader: ModalLinksProps[] = [
    {
        title: 'Notícias',
        icon: MdOutlineNewspaper,
        link: '/' 
    },
    {
        title: 'Fotos',
        icon: MdDynamicFeed,
        link: '/images'
    },
    {
        title: 'Videos',
        icon: MdVideoLibrary,
        link: '/videos'
    }
]