import React from "react"
import Switcher from "../components/village/switcher";


import 'jest-styled-components';
import { renderWithTheme } from '../components/common/___test___/helpers';

describe("Switcher Component render test", () => {
    it("renders Switcher component correctly", () => {
      const data = 5;
      const comp = renderWithTheme(<Switcher noData={false} page={data} setPage={()=>{}}/>).toJSON()
      expect(comp).toMatchSnapshot()
    })
  })