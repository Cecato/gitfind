import React from "react";
import { ItemListStyle } from './styles';

function ItemList({title, description}){
    return(
        <>
            <ItemListStyle>
                <div className="item-list">
                    <strong>{title}</strong>
                    <p>{description}</p>
                    <hr/>
                </div>
            </ItemListStyle>
        </>
    )
}


export default ItemList;