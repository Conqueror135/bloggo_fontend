import { createReducer, on, Action } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import { FeedStateInterface } from '../types/feedState.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.action';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';

const initialState: FeedStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(getFeedSuccessAction, (state, action): FeedStateInterface => {
    let oldArticles = state.data?.data?.docs ?? [];
    let newArticles = action.feed?.data?.docs ?? [];
    let mergedArticles = [...oldArticles, ...newArticles];
    const {
      hasNextPage,
      hasPrevPage,
      limit,
      nextPage,
      page,
      pagingCounter,
      prevPage,
      totalDocs,
      totalPages,
    } = action.feed.data;
    const updatedFeed = {
      data: {
        docs: mergedArticles,
        hasNextPage,
        hasPrevPage,
        limit,
        nextPage,
        page,
        pagingCounter,
        prevPage,
        totalDocs,
        totalPages,
      },
    };
    return {
      ...state,
      isLoading: false,
      data: updatedFeed,
    };
  }),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): FeedStateInterface => initialState)
);

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
