import womanJeans from '../../assets/images/women-jeans.png'
import womanSweatshirt from '../../assets/images/women-sweatshirt.png'
import womanCoat from '../../assets/images/women-coat.png'
import manJeans from '../../assets/images/men-jeans.png'
import manSweatshirt from '../../assets/images/men-sweatshirt.png'
import manJacket from '../../assets/images/men-jacket.png'


const Clothes = [
    {
        id: 1,
        name: "Jeans high waist flare",
        price: 749,
        color: "mazarine",
        image: womanJeans,
        sex: "women"
    },
    {
        id: 2,
        name: "Sweatshirt with embroidery",
        price: 599,
        color: "gray",
        image: womanSweatshirt,
        sex: "women"
    },
    {
        id: 3,
        name: "Double-breasted coat",
        price: 1399,
        color: "beige",
        image: womanCoat,
        sex: "women"
    },
    {
        id: 4,
        name: "Jogger jeans",
        price: 779,
        color: "black",
        image: manJeans,
        sex: "men"
    },
    {
        id: 5,
        name: "Sweatshirt",
        price: 699,
        color: "gray",
        image: manSweatshirt,
        sex: "men"
    },
    {
        id: 6,
        name: "Parka jacket",
        price: 2299,
        color: "beige",
        image: manJacket,
        sex: "men"
    }
] 
export default  Clothes;