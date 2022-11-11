import {
  TypedUseSelectorHook,
  useSelector as useStates,
  useDispatch,
} from 'react-redux';
import type {RootState, AppDispatch} from './store';

export const useActions = () => useDispatch<AppDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = useStates;
