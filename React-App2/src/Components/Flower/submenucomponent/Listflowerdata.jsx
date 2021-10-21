
import { atom } from 'recoil'

// export const flowerslist = [
//     {
//         id:1,
//         name:'roze',
//         price:3000,
//         color:'red'

//     },

//     {
//         id:2,
//         name:'sorkh',
//         price:4000,
//         color:'white'
//     },
//     {
//         id:3,
//         name:'yas',
//         price:10000,
//         color:'black'
//     },

//     {
//         id:4,
//         name:'kaktoose',
//         price:8000,
//         color:'green'
//     },
//     {
//         id:5,
//         name:'maryam',
//         price:6000,
//         color:'blue'
//     },
// ]
export const tableheader =['id','name','color','price']


export const flowerslist = atom({
  key: 'flowerslist' ,
  default:  [
    {
        id:1,
        name:'roze',
        price:3000,
        color:'red'

    },

    {
        id:2,
        name:'sorkh',
        price:4000,
        color:'white'
    },
    {
        id:3,
        name:'yas',
        price:10000,
        color:'black'
    },

    {
        id:4,
        name:'kaktoose',
        price:8000,
        color:'green'
    },
    {
        id:5,
        name:'maryam',
        price:6000,
        color:'blue'
    },
]
})