import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';
import { UserInfoInterface } from '@shared/types/userInfo.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  userInfo: UserInfoInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
  isLoading: boolean;
}
