import React from 'react'
import ItemCard from '../Shop/ItemCard';
import InfoCard from '../Shop/InfoCard';
import { makeStyles } from '@material-ui/core/styles';


export default function ShopContainer() {
    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
            </div>
            <div>
                <InfoCard/>
            </div>
        </div>
    )
}
