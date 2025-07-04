// src/hooks/useRedux.ts
import { useDispatch, useSelector} from "react-redux";
import  type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "@/Store/Store";

// typed versions:
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
