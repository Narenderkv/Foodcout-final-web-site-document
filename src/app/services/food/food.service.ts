import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/models/foods';
import { tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {


  constructor() { }

  getAllFoodByTag(tag:string):foods[]{
    return tag=="All"?
    this.getAll() : this.getAll().filter(food =>food.tags?.
      includes(tag));

  // if(tag=='All')
  // {
  //   return this.getAll()
  // }
  // else
  // return this.getAll().filter(food =>food.tags?.includes(tag))
  }
  getAllTag():tag[]{
   return [
    {name:'narender',count:14},
    {name:'All',count:1},
    {name:'pizza',count:2},
    {name:'Lunch',count:3},
    {name:'Hamburger',count:2},
    {name:'SlowFood',count:1},
    {name:'Fry',count:1},
    {name:'Soup',count:1}
];
  }

  getAll():foods[]{
    return    [ 
     
      {
        id:1,
        name:'narender',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (1).jpg',
        tags:['fastFood','narender','lunch']
      },
      {
        id:2,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (2).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:3,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (3).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:4,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (4).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:5,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (5).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:6,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (6).jpg',
        tags:['fastFood','pizza','lunch']
      }, {
        id:7,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (7).jpg',
        tags:['fastFood','pizza','lunch']
      },

      {
        id:8,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (8).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:9,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (9).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:10,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (10).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:11,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (11).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:12,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (12).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:13,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (13).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:14,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (14).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:15,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (15).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:16,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (16).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:17,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (17).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:18,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (18).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:19,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (19).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:20,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (20).jpg',
        tags:['fastFood','pizza','lunch']
      },
      
      {
        id:21,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (21).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:22,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (22).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:23,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (23).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:24,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (24).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:25,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (25).jpg',
        tags:['fastFood','pizza','lunch']
      },

       
      {
        id:26,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (26).jpg',
        tags:['fastFood','pizza','lunch']
      },
      {
        id:27,
        name:'pizza spice cheez',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/img (27).jpg',
        tags:['fastFood','pizza','lunch']
      },
  
  
  
  ]
    
  }
}
