import React from 'react'
import ItemCard from '../Shop/ItemCard';
import InfoCard from '../Shop/InfoCard';
import { useParams } from "react-router-dom";
import data from '../../data.json'


export default function ShopContainer() {
    let { sort } = useParams();
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {sort === "all" || sort === "swords" ?
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {data.Swords.map((item, index) => (
                        <ItemCard id={item.id} price={item.price} tva={item.tva} name={item.name} img={process.env.PUBLIC_URL + item.image} description={item.description}> </ItemCard>
                    ))}
                </div>
                :
                null}

            {sort === "all" || sort === "rings" ?
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {data.Rings.map((item, index) => (
                        <ItemCard id={item.id} price={item.price} tva={item.tva} name={item.name} img={process.env.PUBLIC_URL + item.image} description={item.description}> </ItemCard>
                    ))}
                </div>
                :
                null}

            {sort === "all" || sort === "armors" ?
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {data.Armor.map((item, index) => (
                        <ItemCard id={item.id} price={item.price} tva={item.tva} name={item.name} img={process.env.PUBLIC_URL + item.image} description={item.description}> </ItemCard>
                    ))}
                </div>
                :
                null}

            {sort === "all" || sort === "pets" ?
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {data.Pets.map((item, index) => (
                        <ItemCard id={item.id} price={item.price} tva={item.tva} name={item.name} img={process.env.PUBLIC_URL + item.image} description={item.description}> </ItemCard>
                    ))}
                </div>
                :
                null}

            <div>
                <InfoCard />
                {sort}
            </div>
        </div>
    )
}
