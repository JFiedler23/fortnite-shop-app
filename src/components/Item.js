
function Item(props){
    return (
        <div className="item" id={props.rarity}>
            <p className="item-name">{props.name}</p>
            <img className="item-image" src={props.image} alt={props.name}></img>
            <p className="item-price">{props.price}</p>
        </div>
    )
}

export default Item;