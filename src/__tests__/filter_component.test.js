import React from "react"
import Filter from "../components/village/filter";

import 'jest-styled-components';
import { renderWithTheme } from '../components/common/___test___/helpers';

describe("Filter Component render test", () => {
    it("renders Filter component correctly", () => {
      const data = {
            'age':'166',
            'weight':'35',
            'height':'106',
            'hair':'Red',
            'profession':[
                "Cook",
                "Baker",
                "Miner"
            ]};
      const comp = renderWithTheme(<Filter currentFilter={data} filter={()=>{}} />).toJSON()
      expect(comp).toMatchSnapshot()
    })
  })