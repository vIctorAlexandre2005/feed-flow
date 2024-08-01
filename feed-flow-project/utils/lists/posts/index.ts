import { IconType } from "react-icons";
import { BiLike } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

export interface PropsContentPost {
    publishedAt: string;
    author: string;
    image: string;
    description: string;
    iconHeart: IconType;
    titleHeart: string;
    iconLike: IconType;
    titleLike: string;
    iconComment: IconType;
    titleComment: string;
}

export const contentPost: PropsContentPost[] = [
    {
        author: 'Victor',
        publishedAt: Date(),
        image: '/favicon.ico',
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
        titleLike: 'Curtir',
        titleComment: 'Comentar',
        titleHeart: 'Favoritar',
        iconComment: BsChatSquareText,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
    {
        author: 'Tu',
        publishedAt:  Date(),
        image: '/exemplo-else.png',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?',
        iconHeart: FaRegHeart,
        titleLike: 'Curtir',
        titleComment: 'Comentar',
        titleHeart: 'Favoritar',
        iconComment: BsChatSquareText,
        iconLike: BiLike, 
    },
    {
        author: 'Victor',
        publishedAt: Date(),
        image: '/favicon.ico',
        iconHeart: FaRegHeart,
        titleLike: 'Curtir',
        titleComment: 'Comentar',
        titleHeart: 'Favoritar',
        iconLike: BiLike, 
        iconComment: BsChatSquareText,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
    {
        author: 'Victor',
        publishedAt: Date(),
        image: '/favicon.ico',
        iconComment: BsChatSquareText,
        iconHeart: FaRegHeart,
        titleLike: 'Curtir',
        titleComment: 'Comentar',
        titleHeart: 'Favoritar',
        iconLike: BiLike, 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
    {
        author: 'Victor',
        publishedAt: Date(),
        image: '/favicon.ico',
        titleLike: 'Curtir',
        titleComment: 'Comentar',
        titleHeart: 'Favoritar',
        iconComment: BsChatSquareText,
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
    {
        author: 'Victor',
        publishedAt: Date(),
        iconComment: BsChatSquareText,
        titleLike: 'Curtir',
        titleComment: 'Comentar',
        titleHeart: 'Favoritar',
        image: '/favicon.ico',
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
    {
        author: 'Victor',
        publishedAt: Date(),
        iconComment: BsChatSquareText,
        image: '/favicon.ico',
        titleLike: 'Curtir',
        titleComment: 'Comentar',
        titleHeart: 'Favoritar',
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
    {
        author: 'Victor',
        publishedAt: Date(),
        iconComment: BsChatSquareText,
        image: '/favicon.ico',
        titleLike: 'Curtir',
        titleComment: 'Comentar',
        titleHeart: 'Favoritar',
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
]