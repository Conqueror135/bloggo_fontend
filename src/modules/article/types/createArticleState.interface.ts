import { ArticleInterface } from '@shared/types/article.interface';
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';

export interface CreateArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
  isLoading: boolean;
  error: string | null;
  data: ArticleInterface | null;
}
