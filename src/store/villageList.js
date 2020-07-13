import { createAsyncThunk , createSlice } from '@reduxjs/toolkit'
import Api from '../api/api-functions'
import config from '../api.conf'

export const fetchVillage = createAsyncThunk(
    'users/fetchVillage',
    async () => {
      const response = await Api().default();
      return {'response': response }
    }
)

const listSlice = createSlice({
    name: 'villageList',
    initialState:  { entities: [] , currentPage : 0},
    reducers:{
    },
    extraReducers: {
      [fetchVillage.fulfilled]: (state, action) => {
          const villageName = Object.keys(action.payload.response)[0]
          const currentPage = action.meta.arg.page * config.offset;
          const offset = currentPage + config.offset;
          const viewData = action.payload.response[villageName].slice(currentPage, offset);
          debugger;

          state.entities = viewData;
      },
    }
})

export default listSlice.reducer