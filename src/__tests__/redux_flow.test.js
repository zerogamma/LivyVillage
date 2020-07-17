import React from 'react'
import reducer, {
    fetchVillage,
    fetchSuccessful,
    fetchPending,
    fetchFailed,
} from '../store/villageList'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Api from '../api/api-functions'

jest.mock('../api/api-functions')

const mockStore = configureMockStore([thunk])

describe('Redux function: reducer, actions and selectors', () => {
    it('should return the initial state on first run', () => {
        const nextState = {
            entities: [],
            currentPage: 0,
            noData: true,
            loading: false,
        }
        const result = reducer(undefined, {})

        expect(result).toEqual(nextState)
    })

    it('creates fetchSuccessful when data fetch succeeds ', async () => {
        const initialState = {
            entities: [],
            currentPage: 0,
            noData: true,
            loading: false,
        }

        const requestPayload = {
            name: '',
            filter: {},
            page: 0,
        }

        const responsePayload = {
            Brastlewark: [
                {
                    id: 0,
                    name: 'Tobus Quickwhistle',
                    thumbnail:
                        'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
                    age: 306,
                    weight: 39.065952,
                    height: 107.75835,
                    hair_color: 'Pink',
                    professions: [
                        'Metalworker',
                        'Woodcarver',
                        'Stonecarver',
                        ' Tinker',
                        'Tailor',
                        'Potter',
                    ],
                    friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
                },
                {
                    id: 1,
                    name: 'Fizkin Voidbuster',
                    thumbnail:
                        'http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg',
                    age: 288,
                    weight: 35.279167,
                    height: 110.43628,
                    hair_color: 'Green',
                    professions: [
                        'Brewer',
                        'Medic',
                        'Prospector',
                        'Gemcutter',
                        'Mason',
                        'Tailor',
                    ],
                    friends: [],
                },
            ],
        }

        const store = mockStore(initialState)
        Api.default.mockResolvedValueOnce(responsePayload)

        await store.dispatch(fetchVillage(requestPayload))

        const expectedActions = [
            fetchPending(),
            fetchSuccessful(responsePayload),
        ]

        const getPayload = store
            .getActions()
            .map((action) =>
                action.type === 'users/fetchVillage/fulfilled'
                    ? action.payload
                    : null
            )
        const expectedPayload = expectedActions.map((action) =>
            action.type === 'users/fetchVillage/fulfilled'
                ? action.payload
                : null
        )

        expect(getPayload).toEqual(expectedPayload)
    })

    it('creates fetchFailed when data fetch fails', async () => {
        const initialState = {
            entities: [],
            currentPage: 0,
            noData: true,
            loading: false,
        }
        const requestPayload = undefined

        const responseError = new Error('no data')

        const store = mockStore(initialState)
        Api.default.mockRejectedValueOnce(responseError)

        await store.dispatch(fetchVillage(requestPayload))

        const expectedActions = [fetchPending(), fetchFailed(responseError)]

        const getError = store
            .getActions()
            .map((action) =>
                action.type === 'users/fetchVillage/rejected'
                    ? action.error.message
                    : null
            )
        const expectedError = expectedActions.map((action) =>
            action.type === 'users/fetchVillage/rejected'
                ? action.error.message
                : null
        )

        expect(getError).toEqual(expectedError)
    })
})
