import { createAsyncThunk , createSlice } from '@reduxjs/toolkit'
import Api from '../api/api-functions'
import config from '../api.conf'
import { compareWithTrunc } from '../utils/function/Utils'

export const fetchVillage = createAsyncThunk(
    'users/fetchVillage',
    async () => {
      const response = await Api().default();
      return {'response': response }
    }
)

const listSlice = createSlice({
    name: 'villageList',
    initialState:  { entities: [] , currentPage : 0 , noData: true},
    reducers:{
    },
    extraReducers: {
      [fetchVillage.fulfilled]: (state, action) => {
          const villageName = Object.keys(action.payload.response)[0]
          const villageUsers = action.payload.response[villageName];
          const currentPage = action.meta.arg.page * config.offset;
          const offset = currentPage + config.offset;

          try {
            debugger;
            const filteredVillage = villageUsers.filter( r=> 
              ( !action.meta.arg.name ? true : r.name.includes(action.meta.arg.name)) &&
              ( !action.meta.arg.filter.age ? true : action.meta.arg.filter.age === r.age ) &&
              ( !action.meta.arg.filter.height ? true : compareWithTrunc( action.meta.arg.filter.height , r.height ) ) &&
              ( !action.meta.arg.filter.weight ? true : compareWithTrunc( action.meta.arg.filter.weight , r.weight ) ) &&
              ( !action.meta.arg.filter.hair ? true : action.meta.arg.filter.hair.toUpperCase() === r.hair_color.toUpperCase() )
            )
            
            const viewData = filteredVillage.slice(currentPage, offset);
            debugger;
            
            state.noData = viewData.length === 0 ? true : false;
            state.entities = viewData;
          } catch (e) {
            state.noData = true;
          }
      },
    }
})

export default listSlice.reducer