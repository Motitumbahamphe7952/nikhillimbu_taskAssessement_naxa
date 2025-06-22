import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../Store/Store';

interface ProjectUIState {
  activeCategory: string | null;
  searchTerm: string;
  currentPage: number;
  itemsPerPage: number;
  selectedProjectId: number | null;
}

const initialState: ProjectUIState = {
  activeCategory: null,
  searchTerm: '',
  currentPage: 1,
  itemsPerPage: 10,
  selectedProjectId: null,
};

const projectSlice = createSlice({
  name: 'projectsUI',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<string | null>) {
      state.activeCategory = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    selectProject(state, action: PayloadAction<number | null>) {
      state.selectedProjectId = action.payload;
    },
  },
});

export const {
  setActiveCategory,
  setSearchTerm,
  setCurrentPage,
  selectProject,
} = projectSlice.actions;

export const selectUIState = (state: RootState) => state.project;
export const selectActiveCategory = (state: RootState) => state.project.activeCategory;

export default projectSlice.reducer;
