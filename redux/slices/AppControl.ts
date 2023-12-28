import { createSlice } from '@reduxjs/toolkit'

export interface AppControlState {
  isMobileOpen: boolean
  isUserMenuOpen: boolean
}

const initialState: AppControlState = {
  isMobileOpen: false,
  isUserMenuOpen: false,
}

const AppControlSlice = createSlice({
  name: 'AppControl',
  initialState,
  reducers: {
    toggleMobileOpen: (state) => {
      state.isMobileOpen = !state.isMobileOpen
    },
    toggleUserMenuOpen: (state) => {
      state.isUserMenuOpen = !state.isUserMenuOpen
    },
  },
})

export const { toggleMobileOpen, toggleUserMenuOpen } = AppControlSlice.actions
export default AppControlSlice.reducer
