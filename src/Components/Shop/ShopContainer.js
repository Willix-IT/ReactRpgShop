import React from 'react'
import ItemCard from '../Shop/ItemCard';
import InfoCard from '../Shop/InfoCard';
import { makeStyles } from '@material-ui/core/styles';


export default function ShopContainer() {
    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <ItemCard id="1" img={process.env.PUBLIC_URL + "/sword1.png"}></ItemCard>
                <ItemCard id="2" img={process.env.PUBLIC_URL + "/sword1.png"}></ItemCard>
                <ItemCard id="3" img={process.env.PUBLIC_URL + "/sword1.png"}></ItemCard>
                <ItemCard id="4" img={process.env.PUBLIC_URL + "/sword1.png"}></ItemCard>
            </div>
            <div>
                <InfoCard/>
            </div>
        </div>
    )
}
