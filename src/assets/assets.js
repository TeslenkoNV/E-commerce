import back1 from './back1.jpg'
import back2 from './back2.jpg'
import back3 from './back3.jpg'
import back4 from './back4.jpg'
import blazer1 from './blazer1.jpg'
import blazer2 from './blazer2.jpg'
import blazer3 from './blazer3.jpg'
import dress1_1 from'./dress1_1.jpg'
import dress1_2 from'./dress1_2.jpg'
import dress1_3 from'./dress1_3.jpg'
import dress2_1 from'./dress2_1.jpg'
import dress2_2 from'./dress2_2.jpg'
import dress3_1 from'./dress3_1.jpg'
import dress3_2 from'./dress3_2.jpg'
import dress3_3 from'./dress3_3.jpg'
import dress4_1 from'./dress4_1.jpg'
import dress4_2 from'./dress4_2.jpg'
import dress4_3 from'./dress4_3.jpg'
import skirt1_1 from './skirt1_1.jpg'
import skirt1_2 from './skirt1_2.jpg'
import skirt1_3 from './skirt1_3.jpg'
import jacket1_1 from './jacket1_1.jpg'
import jacket1_2 from './jacket1_2.jpg'
import jacket1_3 from './jacket1_3.jpg'
import jacket2_1 from './jacket2_1.jpg'
import jacket2_2 from './jacket2_2.jpg'
import jacket2_3 from './jacket2_3.jpg'
import jacket3_1 from './jacket3_1.jpg'
import jacket3_2 from './jacket3_2.jpg'
import jacket3_3 from './jacket3_3.jpg'
import jacket4_1 from './jacket4_1.jpg'
import jacket4_2 from './jacket4_2.jpg'
import shirt1_1 from './shirt1_1.jpg'
import shirt1_2 from './shirt1_2.jpg'
import shirt1_3 from './shirt1_3.jpg'
import trousers1_1 from './trousers1_1.jpg'
import trousers1_2 from './trousers1_2.jpg'
import trousers1_3 from './trousers1_3.jpg'
import shorts1_1 from './shorts1_1.jpg'
import shorts1_2 from './shorts1_2.jpg'
import shorts1_3 from './shorts1_3.jpg'
import hoodie1_1 from './hoodie1_1.jpg'
import hoodie1_2 from './hoodie1_2.jpg'
import hoodie1_3 from './hoodie1_3.jpg'
import hoodie2_1 from './hoodie2_1.jpg'
import hoodie2_2 from './hoodie2_2.jpg'
import hoodie2_3 from './hoodie2_3.jpg'
import coat1_1 from './coat1_1.jpg'
import coat1_2 from './coat1_2.jpg'
import coat1_3 from './coat1_3.jpg'
import jeans1_1 from './jeans1_1.jpg'
import jeans1_2 from './jeans1_2.jpg'
import jeans1_3 from './jeans1_3.jpg'
import jeans2_1 from './jeans2_1.jpg'
import jeans2_2 from './jeans2_2.jpg'
import jeans2_3 from './jeans2_3.jpg'
import tshirt1_1 from './tshirt1_1.jpg'
import tshirt1_2 from './tshirt1_2.jpg'
import store from './store.jpg'
import logoFull from './logoFull.png'
import close from './close.png'
import cart from './cart.png'
import profile from './profile.png'
import menu from './menu.png'
import search from './search.png'
import dropdown from './dropdown.png'
import shipping from './shipping.svg'
import easyReturn from './easyReturn.svg'
import payment from './payment.svg'
import arrow from './arrow.png'
import star from './star.png'
import star_dull from './star_dull.png'
import bin from './bin.png'
import mastercard from './mastercard.png'
import visa from './visa.png'
import mir from './mir.png'

export const assets = {
back1,
back2,
back3,
back4,
blazer1,
blazer2,
blazer3,
dress1_1,
dress1_2,
dress1_3,
dress2_1,
dress2_2,
dress3_1,
dress3_2,
dress3_3,
dress4_1,
dress4_2,
dress4_3,
skirt1_1,
skirt1_2,
skirt1_3,
jacket1_1,
jacket1_2,
jacket1_3,
jacket2_1,
jacket2_2,
jacket2_3,
jacket3_1,
jacket3_2,
jacket3_3,
jacket4_1,
jacket4_2,
shirt1_1,
shirt1_2,
shirt1_3,
trousers1_1,
trousers1_2,
trousers1_3,
shorts1_1,
shorts1_2,
shorts1_3,
hoodie1_1,
hoodie1_2,
hoodie1_3,
hoodie2_1,
hoodie2_2,
hoodie2_3,
coat1_1,
coat1_2,
coat1_3,
jeans1_1,
jeans1_2,
jeans1_3,
jeans2_1,
jeans2_2,
jeans2_3,
tshirt1_1,
tshirt1_2,
store,
logoFull,
close,
cart,
profile,
menu,
search,
dropdown,
shipping,
easyReturn,
payment,
arrow,
star,
star_dull,
bin,
mastercard,
visa,
mir
}

export const products = [
    {
        _id: "1",
        name: "Blazer",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "79",
        image: [blazer1,blazer2,blazer3],
        category: "Women",
        subcategory: "Jackets",
        color: "Beige",
        sizes: ["XS", "S", "M", "L"],
        bestseller: true
    },
    {
        _id: "2",
        name: "Dress",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "89",
        image: [dress1_1,dress1_2,dress1_3],
        category: "Women",
        subcategory: "Dresses",
        color: "Black",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false
    },
    {
        _id: "3",
        name: "Dress",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "99",
        image: [dress3_1,dress3_2,dress3_3],
        category: "Women",
        subcategory: "Dresses",
        color: "Grey",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false
    },
    {
        _id: "4",
        name: "Dress",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "109",
        image: [dress4_1,dress4_2,dress4_3],
        category: "Women",
        subcategory: "Dresses",
        color: "Beige",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false
    },
    {
        _id: "5",
        name: "Skirt",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "79",
        image: [skirt1_1,skirt1_2,skirt1_3],
        category: "Women",
        subcategory: "Skirts",
        color: "Black",
        sizes: ["XS", "S", "M", "L"],
        bestseller: true
    },
    {
        _id: "6",
        name: "Reversible Cotton Bomber Jacket",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "350",
        image: [jacket1_1,jacket1_2,jacket1_3],
        category: "Men",
        subcategory: "Jackets",
        color: "Brown",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true
    },
    {
        _id: "7",
        name: "Cotton Oxford Shirt",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "150",
        image: [shirt1_1,shirt1_2,shirt1_3],
        category: "Men",
        subcategory: "Shirts",
        color: "Beige",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true
    },
    {
        _id: "8",
        name: "Straight-Leg Twill Trousers",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "170",
        image: [trousers1_1,trousers1_2,trousers1_3],
        category: "Men",
        subcategory: "Trousers",
        color: "Brown",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true
    },
    {
        _id: "9",
        name: "Wide-Leg Shell Shorts",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "109",
        image: [shorts1_1, shorts1_2, shorts1_3],
        category: "Men",
        subcategory: "Shorts",
        color: "Grey",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false
    },
    {
        _id: "10",
        name: "Cotton-Jersey Hoodie",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "150",
        image: [hoodie1_1,hoodie1_2,hoodie1_3],
        category: "Men",
        subcategory: "Hoodies",
        color: "Grey",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false
    },
    {
        _id: "11",
        name: "Oversized Coat",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "499",
        image: [coat1_1,coat1_2,coat1_3],
        category: "Men",
        subcategory: "Jackets",
        color: "Beige",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false
    },
    {
        _id: "12",
        name: "Distressed Straight-Leg Jeans",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "99",
        image: [jeans1_1,jeans1_2,jeans1_3],
        category: "Men",
        subcategory: "Jeans",
        color: "Blue",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false
    },
    {
        _id: "13",
        name: "Dress with Heart",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "130",
        image: [dress2_1,dress2_2],
        category: "Kids",
        subcategory: "Dresses",
        color: "White",
        sizes: ["98", "104", "110", "116"],
        bestseller: true
    },
    {
        _id: "14",
        name: "Faux Fur Coat",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "199",
        image: [jacket2_1,jacket2_2,jacket2_3],
        category: "Kids",
        subcategory: "Jackets",
        color: "White",
        sizes: ["98", "104", "110", "116"],
        bestseller: true
    },
    {
        _id: "15",
        name: "Padded Jacket",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "159",
        image: [jacket3_1,jacket3_2,jacket3_3],
        category: "Kids",
        subcategory: "Jackets",
        color: "Brown",
        sizes: ["98", "104", "110", "116"],
        bestseller: false
    },
    {
        _id: "16",
        name: "Faux Fur Coat",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "179",
        image: [jacket4_1,jacket4_2],
        category: "Kids",
        subcategory: "Jackets",
        color: "White",
        sizes: ["98", "104", "110", "116"],
        bestseller: false
    },
    {
        _id: "17",
        name: "Wide-Leg Jeans",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "99",
        image: [jeans2_1,jeans2_2,jeans2_3],
        category: "Kids",
        subcategory: "Jeans",
        color: "Blue",
        sizes: ["98", "104", "110", "116"],
        bestseller: false
    },
    {
        _id: "18",
        name: "T-Shirt",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Class ultrices rutrum est vulputate eros curabitur inceptos vel. Phasellus congue aenean proin ex interdum augue scelerisque ultricies.",
        price: "89",
        image: [tshirt1_1,tshirt1_2],
        category: "Kids",
        subcategory: "T-Shirts",
        color: "White",
        sizes: ["98", "104", "110", "116"],
        bestseller: false
    }
]
