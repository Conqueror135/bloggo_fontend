import { PopularTagType } from './popularTag.type';
import { ProfileInterface } from './profile.interface';

export interface ArticleInterface {
  title: string;
  _id: string;
  content: string;
  created_at: string;
  updated_at: string;
  // tagList: PopularTagType[];
  subtitle: string;
  user: ProfileInterface;
  favorited: boolean;
  favoritesCount: number;
}
