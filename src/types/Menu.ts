// src/types/types.ts
export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string; 
  }
  
  export enum MenuCategory {
    MainCourses = 'mainCourses',
    Drinks = 'drinks',
    Desserts = 'desserts'
  }
  