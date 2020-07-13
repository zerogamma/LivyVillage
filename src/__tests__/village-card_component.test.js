import React from "react"
import VillageCard from "../components/village/village-card";
import VillageList from "../components/village/village-list";


import 'jest-styled-components';
import { renderWithTheme } from '../components/common/___test___/helpers';

describe("village-card Component render test", () => {
    it("renders village-card component correctly", () => {
      const data = {
        "id": 1,
        "name": "Fizkin Voidbuster",
        "thumbnail": "http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg",
        "age": 288,
        "weight": 35.279167,
        "height": 110.43628,
        "hair_color": "Green",
        "professions": [
        "Brewer",
        "Medic",
        "Prospector",
        "Gemcutter",
        "Mason",
        "Tailor"
        ],
        "friends": []
      }
      const filterData = {'age':'', 'weight':'','height':'','hair':'','profession':[]}

      const comp = renderWithTheme(<VillageCard data={data} friendSearch={()=>{}} searchProfession={()=>{}} currentFilter={filterData}/>).toJSON()
      expect(comp).toMatchSnapshot()
    })
})


describe("village-list Component render test", () => {
  it("renders village-list component correctly", () => {
    const data = [{
      "id": 1,
      "name": "Fizkin Voidbuster",
      "thumbnail": "http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg",
      "age": 288,
      "weight": 35.279167,
      "height": 110.43628,
      "hair_color": "Green",
      "professions": [
      "Brewer",
      "Medic",
      "Prospector",
      "Gemcutter",
      "Mason",
      "Tailor"
      ],
      "friends": []
    },
    {
      "id": 2,
      "name": "Malbin Chromerocket",
      "thumbnail": "http://www.publicdomainpictures.net/pictures/30000/nahled/maple-leaves-background.jpg",
      "age": 166,
      "weight": 35.88665,
      "height": 106.14395,
      "hair_color": "Red",
      "professions": [
      "Cook",
      "Baker",
      "Miner"
      ],
      "friends": [
      "Fizwood Voidtossle"
      ]
      },
    ]
    const filterData = {'age':'', 'weight':'','height':'','hair':'','profession':[]}
    
    const comp = renderWithTheme(<VillageList data={data} friendSearch={()=>{}} searchProfession={()=>{}} currentFilter={filterData}/>).toJSON()
    expect(comp).toMatchSnapshot()
  })
})
