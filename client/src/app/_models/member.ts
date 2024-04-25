import { Photo } from "./photo";


  export interface Member {
    id: number;
    userName: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    createdAt: string;
    lastActive: string;
    gender: string;
    introducton?: any;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
  }