import {LocationOffer} from './locationOffer.ts';

export type Offer = {
  'id': string;
  'title': string;
  'type': 'apartment' | 'room' | 'house' | 'hotel';
  'price': number;
  'previewImage': string;
  'city': {
    'name': string;
    'location': LocationOffer;
  };
  'location': LocationOffer;
  'isFavorite': boolean;
  'isPremium': boolean;
  'rating': number;
  'description'?: string;
  'bedrooms'?: number;
  'goods'?: string[];
  'host'?: {
    'name': string;
    'avatarUrl': string;
    'isPro': boolean;
  };
  'images'?: string[];
  'maxAdults'?: number;
}

export type Offers = Offer[];
