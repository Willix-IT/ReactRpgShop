import React from 'react'
import ItemCard from '../Shop/ItemCard';
import InfoCard from '../Shop/InfoCard';
import { makeStyles } from '@material-ui/core/styles';


export default function ShopContainer() {
    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <ItemCard id={1} price={10.5} tva={0.12} name ={"Epée Kari"} img={process.env.PUBLIC_URL + "/sword1.png"}></ItemCard>
                <ItemCard id={2} price={12.4} tva={0.12} name ={"Excalibur"} img={process.env.PUBLIC_URL + "/sword1.png"}></ItemCard>
                <ItemCard id={3} price={14.5} tva={0.12} name ={"Penetrator 5"} img={process.env.PUBLIC_URL + "/sword1.png"}></ItemCard>
                <ItemCard id={4} price={10.3} tva={0.12} name ={"9 Queues"} img={process.env.PUBLIC_URL + "/sword1.png"}></ItemCard>
                <ItemCard id={5} price={17.7} tva={0.12} name ={"Kikrac"} img={process.env.PUBLIC_URL + "/sword1.png"}></ItemCard>
                <ItemCard id={6} price={20.5} tva={0.12} name ={"Excalibur"} img={process.env.PUBLIC_URL + "/sword1.png"}></ItemCard>
                <ItemCard id={7} price={10.5} tva={0.12} name ={"Penetrator 5"} img={process.env.PUBLIC_URL + "/sword1.png"}></ItemCard>
                <ItemCard id={8} price={17.7} tva={0.12} name ={"9 Queues"} img={process.env.PUBLIC_URL + "/sword1.png"}></ItemCard>
            </div>
            <div>
                <InfoCard/>
            </div>
        </div>
    )
}
