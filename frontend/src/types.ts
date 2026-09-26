export type Category = 'Tops'|'Bottoms'|'Dresses'|'Layers'|'Shoes'|'Accessories'
export type Product = { id:string; name:string; category:Category; price:number; image:string; tags:string[]; colors:string[]; occasions:string[]; styles:string[]; minTemp:number; maxTemp:number; fabric:string }
export type Weather = { city:string; temperature:number; feelsLike:number; humidity:number; precipitation:number; condition:string; windSpeed:number }
export type RecommendationRequest = { city?:string; occasion:string; style:string; temperature?:number; budget?:number }
export type Outfit = { items:Product[]; score:number; title:string; reason:string; tips:string[] }
