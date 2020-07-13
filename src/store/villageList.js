import { createAsyncThunk , createSlice } from '@reduxjs/toolkit'
import Api from '../api/api-functions'
import config from '../api.conf'
import { compareWithTrunc , containsIn} from '../utils/function/Utils'

export const fetchVillage = createAsyncThunk(
    'users/fetchVillage',
    async (data) => {  
      try {
        if (data === undefined)
          throw Error('no data');
        const response = await Api.default();
        return response
      } catch (err) {
        if (!err.response) {
          throw err;
        }
        return err.response.data;
      }
    }
)

export const fetchSuccessful = fetchVillage.fulfilled;
export const fetchPending = fetchVillage.pending;
export const fetchFailed = fetchVillage.rejected;

const listSlice = createSlice({
    name: 'villageList',
    initialState:  { entities: [] , currentPage : 0 , noData: true , loading: false},
    reducers:{
    },
    extraReducers: (builder) =>{
      builder.addCase(fetchSuccessful, (state, action) => {
          const villageName = Object.keys(action.payload)[0]
          const villageUsers = action.payload[villageName];
          const currentPage = action.meta.arg.page * config.offset;
          const offset = currentPage + config.offset;

          try {
            const filteredVillage = villageUsers.filter( r=> {
            return ( !action.meta.arg.name ? true : r.name.includes(action.meta.arg.name)) &&
              ( !action.meta.arg.filter.age ? true : action.meta.arg.filter.age === r.age ) &&
              ( !action.meta.arg.filter.height ? true : compareWithTrunc( action.meta.arg.filter.height , r.height ) ) &&
              ( !action.meta.arg.filter.weight ? true : compareWithTrunc( action.meta.arg.filter.weight , r.weight ) ) &&
              ( !action.meta.arg.filter.hair ? true : action.meta.arg.filter.hair.toUpperCase() === r.hair_color.toUpperCase() ) &&
              ( action.meta.arg.filter.profession.length === 0 ? true : containsIn( r.professions , action.meta.arg.filter.profession ) ) 
            })
            
            const viewData = filteredVillage.slice(currentPage, offset);
            
            state.noData = viewData.length === 0 ? true : false;
            state.entities = viewData;
            state.loading = false;
          } catch (e) {
            state.noData = true;
            console.log('Error: '+ e)
          }
      });
      builder.addCase(fetchPending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(fetchFailed, (state, action) => {
        state.error = action.error.message ? action.error.message : "Failed to load data";
        state.loading = false;
      });
    }
})

export default listSlice.reducer