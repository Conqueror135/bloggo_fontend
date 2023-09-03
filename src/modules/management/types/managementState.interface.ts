import { GetListCatalogResponseInterface } from './getListCatalogResponse.interface';
import { GetListUserResponseInterface } from './getListUserResponse.interface';

export interface ManagementStateInterface {
  isLoading: boolean;
  error: string | null;
  dataListUser: GetListUserResponseInterface | null;
  dataListCatalog: GetListCatalogResponseInterface | null;
}
