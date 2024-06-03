import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import { GrLinkedin } from "react-icons/gr";
import {AiFillGithub} from 'react-icons/ai'

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#services', title: 'Services'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'}
]


export const socials = [
    {id: 1, link: 'https://www.instagram.com/chasacademy/', icon: <AiOutlineInstagram/>},
    {id: 2, link: 'https://twitter.com', icon: <AiOutlineTwitter/>},
    {id: 3, link: 'https://www.linkedin.com/in/william-janssen-b944a32b6/', icon: <GrLinkedin />},
    {id: 4, link: 'https://github.com/William0209', icon: <AiFillGithub/>}
]