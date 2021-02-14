import React from 'react';
import axios from 'axios';
import Item from './Item';

function Home(){
    const [featuredItems, setFeaturedItems] = React.useState([]);
    const [dailyItems, setDailyItems] = React.useState([]);

    const getItems = async () => {
        const { data } = await axios('https://fortnite-api.com/v2/shop/br');
        setFeaturedItems(data.data.featured.entries);
        setDailyItems(data.data.daily.entries);
    }

    React.useEffect(() => {
        getItems();
    }, []);

    const featured = featuredItems.map(item => {
        let index = item.items[0].rarity.backendValue.lastIndexOf(":");

        return(
            <Item key={item.offerId} 
            name={item.bundle ? item.bundle.name : item.items[0].name} 
            price={item.finalPrice} 
            image={item.bundle ? item.bundle.image : item.items[0].images.icon} 
            rarity={item.items[0].rarity.backendValue.slice(index+1).toLowerCase()} />
        )
    });

    const daily = dailyItems.map(item => {    
        let index = item.items[0].rarity.backendValue.lastIndexOf(":");

        return(
            <Item key={item.offerId} 
            name={item.bundle ? item.bundle.name : item.items[0].name} 
            price={item.finalPrice} 
            image={item.bundle ? item.bundle.image : item.items[0].images.icon} 
            rarity={item.items[0].rarity.backendValue.slice(index+1).toLowerCase()} />
        )
    });

    return(
        <div className="container">
            <h1 id="page-greeting">Welcome to the Fortnite Mini Shop!</h1>
            <h3>Featured Items</h3>
            <div className="item-list">
                {featured}
            </div>
            <h3>Daily Items</h3>
            <div className="item-list">
                {daily}
            </div>
        </div>
    )
}

export default Home;