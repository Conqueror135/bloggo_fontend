import { CatalogInterface } from '@shared/types/catalog.interface';

export interface GetListCatalogResponseInterface {
  docs: CatalogInterface[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
