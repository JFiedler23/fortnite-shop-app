import React from 'react';
import axios from 'axios';
import Item from './Item';

function Home(){
    const [featuredItems, setFeaturedItems] = React.useState([]);
    const [dailyItems, setDailyItems] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);
    const [buttonText, setButtonText] = React.useState("Show more");

    const getItems = async () => {
        const { data } = await axios('https://fortnite-api.com/v2/shop/br');

        //sorting by price descending
        setFeaturedItems([...data.data.featured.entries, ...data.data.specialFeatured.entries].sort((a, b) => {
            return b.finalPrice - a.finalPrice;
        }));

        setDailyItems(data.data.daily.entries);
    }

    React.useEffect(() => {
        getItems();
    }, []);

    const featured = featuredItems.map((item, i) => {
        let index = item.items[0].rarity.backendValue.lastIndexOf(":");

        return(
            <Item key={item.offerId}
            class={i < 8 ? "show" : clicked} 
            name={item.bundle ? item.bundle.name : item.items[0].name} 
            price={item.finalPrice} 
            image={item.bundle ? item.bundle.image : item.items[0].images.icon} 
            rarity={item.items[0].rarity.backendValue.slice(index+1).toLowerCase()} />
        )
    });

    const daily = dailyItems.map((item,i) => {    
        let index = item.items[0].rarity.backendValue.lastIndexOf(":");

        return(
            <Item key={item.offerId}
            class={i < 8 ? "show" : clicked}
            name={item.bundle ? item.bundle.name : item.items[0].name} 
            price={item.finalPrice} 
            image={item.bundle ? item.bundle.image : item.items[0].images.icon} 
            rarity={item.items[0].rarity.backendValue.slice(index+1).toLowerCase()} />
        )
    });

    const handleClick = () =>{
        if(!clicked){
            setButtonText("Show less");
        }
        else{
            setButtonText("Show more");
        }
        setClicked(!clicked);
    }

    return(
        <div className="container">
            <h1 id="page-greeting">Welcome to the Fortnite Mini Shop!</h1>
            <h2>Featured Items</h2>
            <div className="item-list">
                {featured}
            </div>
            <button onClick={handleClick}>{buttonText}</button>
            <h2>Daily Items</h2>
            <div className="item-list">
                {daily}
            </div>
        </div>
    )
}

export default Home;