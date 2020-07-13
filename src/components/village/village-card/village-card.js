import React , { useState } from 'react';
import {
    Card,
    CrdData,
    CrdMedia,
    CrdInfo,
    CrdAccord,
    CrdAccordSummary,
    CrdAccordDetails,
    CrdDetails,
    CrdInfoFriendTitle,
    CrdExpandM,
    CrdExpandL,
    CrdInfoAction,
    CrdColorPalette,
    CrdColorContent,
} from './style'



const VillageCard = (props) => {

const [expand, setExpand] = useState(false)

const findFriend = (target)=> {
    props.friendSearch(target.currentTarget.innerText);
}

const searchProfession = (target) => {
    const newProfession = [...props.currentFilter.profession];
    if (!newProfession.includes(target.currentTarget.innerText)){
        newProfession.push(target.currentTarget.innerText);
        props.searchProfession(Object.assign({},props.currentFilter,{'profession':newProfession}));
    }
}

return  <Card>
                <CrdMedia image={props.data.thumbnail}/>
                <CrdDetails>
                <CrdData>
                    <CrdInfo gutterBottom variant="h6" component="h2">{props.data.name}</CrdInfo>
                    <CrdInfo><span>Age: </span>{props.data.age}</CrdInfo>
                    <CrdInfo><span>Weight: </span>{props.data.weight}</CrdInfo>
                    <CrdInfo><span>Height: </span>{props.data.height}</CrdInfo>
                    <CrdColorContent><CrdInfo><span>Hair Color: </span>{props.data.hair_color}</CrdInfo><CrdColorPalette color={props.data.hair_color}/></CrdColorContent>
                    <CrdInfoFriendTitle>Friends</CrdInfoFriendTitle>
                    {props.data.friends.map((friend,index) => <CrdInfoAction key={'fri_'+index} onClick={findFriend}>{friend}</CrdInfoAction> )}
                </CrdData> 
                
                <CrdAccord>
                    <CrdAccordSummary onClick={()=> setExpand(!expand)}>
                        <CrdInfo><span>Profession</span></CrdInfo>
                        {!expand ? <CrdExpandM /> : <CrdExpandL />}
                    </CrdAccordSummary>
                    <CrdAccordDetails expand={expand}>
                        {props.data.professions.map( (prof,i) => <CrdInfoAction key={prof+'_'+i} onClick={searchProfession} >{prof}</CrdInfoAction>)}
                    </CrdAccordDetails>
                </CrdAccord>
                </CrdDetails>        
            </Card>
}

export default VillageCard