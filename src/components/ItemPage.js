import React from 'react';
import axios from 'axios';
import Item from './Item';

function ItemPage({ match }){
    const [item, setItem] = React.useState({});

    const getItems = async () => {
        const { data } = await axios('https://fortnite-api.com/v2/shop/br/combined');

        let currentItem = [...data.data.featured.entries, ...data.data.daily.entries].find(item => {
            return match.params.id === item.offerId.slice(item.offerId.indexOf("/") + 1);
        });

        setItem(currentItem);
    }

    React.useEffect(() => {
        getItems();
    }, []);

    const MainItem = () => {
        if(item.items){
            let index = item.items[0].rarity.backendValue.lastIndexOf(":");
            let name = item.bundle ? item.bundle.name : item.items[0].name;
            let rarity = item.items[0].rarity.backendValue.slice(index+1).toLowerCase();

            return(
                <>
                <div className="page-container">
                    <div className="page-image-container" id={rarity}>
                            <img className="page-image" 
                            src={item.bundle ? item.bundle.image : item.items[0].images.icon} 
                            alt={name}
                            >
                            </img>
                    </div>
                    <div className="page-content">
                        <h2 id="page-item-name">{name}</h2>
                        <div className="page-content-header">
                            <span id={`${rarity}-text`}>{item.items[0].rarity.backendValue.slice(index+1)}</span>
                            <span id="type-text">{item.bundle ? "Bundle" : item.items[0].type.displayValue}</span>
                        </div>
                        <div className="page-content-price">
                            <img className="page-price-icon" src="https://image.fnbr.co/price/icon_vbucks_50x.png"></img>
                            <span>{item.finalPrice}</span>
                        </div>
                        <div className="page-content-description">
                            <span>Description:</span>
                            <span><i>"{item.bundle ? item.bundle.info : item.items[0].description}"</i></span>
                        </div>
                        <div className="page-content-info">
                            <span>Release date: {item.bundle ? "N/A" : item.items[0].added.slice(0, item.items[0].added.indexOf("T"))}</span>
                            <span>Occurrences: {item.bundle ? 0 : item.items[0].shopHistory.length}</span>
                        </div>
                    </div>
                </div>
                </>
            )
        }
        else{
            return(
                <>
                </>
            )
        }
    }
    
    return(
        <div>
            <MainItem />
        </div>
    )
}

export default ItemPage;