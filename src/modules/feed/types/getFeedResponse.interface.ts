import { ArticleInterface } from '@shared/types/article.interface';

export interface GetFeedResponseInterface {
  data: { docs: ArticleInterface[] };
  articlesCount: number;
}
