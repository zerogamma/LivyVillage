import React from "react"
import VillageCard from "../components/village/village-card";


import 'jest-styled-components';
import { renderWithTheme } from '../components/common/___test___/helpers';

describe("village card Component render test", () => {
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
      
      const comp = renderWithTheme(<VillageCard data={data} />).toJSON()
      expect(comp).toMatchSnapshot()
    })
})
