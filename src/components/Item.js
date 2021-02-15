
function Item(props){
    return (
        <div className={"item-" + props.class} id={props.rarity}>
            <img className="item-image" src={props.image} alt={props.name}></img>
            <div className="item-content">
                <span className="item-name">{props.name}</span>
                <span className="item-price">
                    <img className="price-icon" src="https://image.fnbr.co/price/icon_vbucks_50x.png"></img>
                    {props.price}
                </span>
            </div>
        </div>
    )
}

export default Item;