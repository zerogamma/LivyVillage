import React , { useState } from 'react';
import {
    Card,
    CrdData,
    CrdMedia,
    CrdInfo,
    CrdAccord,
    CrdAccordSummary,
    CrdAccordDetails,
    CrdDetails
} from './style'



const VillageCard = (props) => {

const [expand, setExpand] = useState(false)


return  <Card>
                <CrdMedia image={props.data.thumbnail}/>
                <CrdDetails>
                <CrdData>
                    <CrdInfo gutterBottom variant="h6" component="h2">{props.data.name}</CrdInfo>
                    <CrdInfo><span>Age: </span>{props.data.age}</CrdInfo>
                    <CrdInfo><span>Weight: </span>{props.data.weight}</CrdInfo>
                    <CrdInfo><span>Height: </span>{props.data.height}</CrdInfo>
                    <CrdInfo><span>Hair Color: </span>{props.data.hair_color}</CrdInfo>
                </CrdData> 
                
                <CrdAccord>
                    <CrdAccordSummary onClick={()=> setExpand(!expand)}>
                        <CrdInfo><span>Profession</span></CrdInfo>
                    </CrdAccordSummary>
                    <CrdAccordDetails expand={expand}>
                        {props.data.professions.map( (prof,i) => <CrdInfo key={prof+'_'+i} >{prof}</CrdInfo>)}
                    </CrdAccordDetails>
                </CrdAccord>
                </CrdDetails>        
            </Card>
}

export default VillageCard