import { configureStore } from '@reduxjs/toolkit';
import projectSlice from '../features/projectsSlice';
import { projectsApi } from '../Service/api/ProjectService'; 
import categoryReducer from '../features/categorySlice'; 

export const Store = configureStore({
  reducer: {
    project: projectSlice,
     category: categoryReducer,   
    [projectsApi.reducerPath]: projectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApi.middleware),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
