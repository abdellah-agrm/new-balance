import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { heroImg01, heroImg02, heroImg03, customer1, customer2, product01, product02, product03, product04, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "home", label: "Home" },
    { href: "products", label: "Products" },
    { href: "about-us", label: "About Us" },
    { href: "contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: heroImg01,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: heroImg02,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: heroImg03,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: product01,
        name: "New Balance 550",
        price: "$119.99",
    },
    {
        imgURL: product02,
        name: "New Balance 990v6",
        price: "$119.99",
    },
    {
        imgURL: product03,
        name: "Fresh Foam 680v8",
        price: "$79.99",
    },
    {
        imgURL: product04,
        name: "New Balance 9060",
        price: "$149.99",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "New Balance 550"},
            { name: "New Balance 990v6"},
            { name: "Fresh Foam 680v8"},
            { name: "New Balance 9060"}
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@newbalance.com", link: "mailto:customer@newbalance.com" },
            { name: "+212 656567878", link: "tel:+212 656567878" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
