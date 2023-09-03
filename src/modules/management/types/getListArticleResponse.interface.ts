import { ArticleInterface } from '@shared/types/article.interface';

export interface GetListArticleResponseInterface {
  data: {
    docs: ArticleInterface[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
  };
}
