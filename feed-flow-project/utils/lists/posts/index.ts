import { IconType } from "react-icons";
import { BiLike } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

export interface PropsContentPost {
    publishedAt: string;
    author: string;
    image: string;
    description: string;
    iconHeart: IconType;
    iconLike: IconType;
}

export const contentPost: PropsContentPost[] = [
    {
        author: 'Victor',
        publishedAt: Date(),
        image: '/favicon.ico',
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
    {
        author: 'Tu',
        publishedAt:  Date(),
        image: '/exemplo-else.png',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?',
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
    },
    {
        author: 'Victor',
        publishedAt: Date(),
        image: '/favicon.ico',
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
    {
        author: 'Victor',
        publishedAt: Date(),
        image: '/favicon.ico',
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
    {
        author: 'Victor',
        publishedAt: Date(),
        image: '/favicon.ico',
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
    {
        author: 'Victor',
        publishedAt: Date(),
        image: '/favicon.ico',
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
    {
        author: 'Victor',
        publishedAt: Date(),
        image: '/favicon.ico',
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
    {
        author: 'Victor',
        publishedAt: Date(),
        image: '/favicon.ico',
        iconHeart: FaRegHeart,
        iconLike: BiLike, 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus, mollitia magnam amet totam, doloribus culpa error ex delectus molestiae dolorum cumque porro voluptates rem? Doloribus a maxime assumenda laudantium?'
    },
]