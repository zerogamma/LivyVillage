import axios from 'axios'
import api from '../api.conf'
import Api from '../api/api-functions'

jest.mock('axios')

describe('fetchData', () => {
    it('fetches successfully data from an API', async () => {
        const dataMock = {
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
                {
                    id: 2,
                    name: 'Malbin Chromerocket',
                    thumbnail:
                        'http://www.publicdomainpictures.net/pictures/30000/nahled/maple-leaves-background.jpg',
                    age: 166,
                    weight: 35.88665,
                    height: 106.14395,
                    hair_color: 'Red',
                    professions: ['Cook', 'Baker', 'Miner'],
                    friends: ['Fizwood Voidtossle'],
                },
                {
                    id: 3,
                    name: 'Midwig Gyroslicer',
                    thumbnail:
                        'http://www.publicdomainpictures.net/pictures/10000/nahled/1-1275919724d1Oh.jpg',
                    age: 240,
                    weight: 40.97596,
                    height: 127.88554,
                    hair_color: 'Red',
                    professions: [
                        'Carpenter',
                        'Farmer',
                        'Stonecarver',
                        'Brewer',
                        'Tax inspector',
                        'Prospector',
                    ],
                    friends: ['Sarabink Tinkbuster', 'Tinadette Wrongslicer'],
                },
            ],
        }

        axios.get.mockResolvedValue({ data: dataMock })
        await expect(Api.default()).resolves.toEqual(dataMock)

        expect(axios.get).toHaveBeenCalledWith(`${api.url}`)
    })

    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error'

        axios.get.mockRejectedValue(new Error(errorMessage))
        await expect(Api.default()).resolves.toEqual(errorMessage)
    })
})
