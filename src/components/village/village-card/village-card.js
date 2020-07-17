import React from 'react'
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
    CrdInfoAction,
    CrdColorPalette,
    CrdColorContent,
} from './style'

const VillageCard = (props) => {

    const selectedFriend = (target) => {
      props.searchFriend(target.currentTarget.innerText)
    }

    const selectedProfession = (target) => {
        props.searchProfession(target.currentTarget.innerText)
    }

    return (
        <Card>
            <CrdMedia image={props.data.thumbnail} />
            <CrdDetails>
                <CrdData>
                    <CrdInfo gutterBottom variant="h6" component="h2">
                        {props.data.name}
                    </CrdInfo>
                    <CrdInfo>
                        <span>Age: </span>
                        {props.data.age}
                    </CrdInfo>
                    <CrdInfo>
                        <span>Weight: </span>
                        {props.data.weight}
                    </CrdInfo>
                    <CrdInfo>
                        <span>Height: </span>
                        {props.data.height}
                    </CrdInfo>
                    <CrdColorContent>
                        <CrdInfo>
                            <span>Hair Color: </span>
                            {props.data.hair_color}
                        </CrdInfo>
                        <CrdColorPalette color={props.data.hair_color} />
                    </CrdColorContent>
                    <CrdInfoFriendTitle>Friends</CrdInfoFriendTitle>
                    {props.data.friends.map((friend, index) => (
                        <CrdInfoAction
                            key={'fri_' + index}
                            onClick={selectedFriend}
                        >
                            {friend}
                        </CrdInfoAction>
                    ))}
                </CrdData>

                <CrdAccord>
                    <CrdAccordSummary>
                        <CrdInfo>
                            <span>Profession</span>
                        </CrdInfo>
                    </CrdAccordSummary>
                    <CrdAccordDetails>
                        {props.data.professions.map((prof, i) => (
                            <CrdInfoAction
                                key={prof + '_' + i}
                                onClick={selectedProfession}
                            >
                                {prof}
                            </CrdInfoAction>
                        ))}
                    </CrdAccordDetails>
                </CrdAccord>
            </CrdDetails>
        </Card>
    )
}

export default VillageCard
