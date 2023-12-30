import { createSlice } from '@reduxjs/toolkit'

export interface AppControlState {
  isMobileOpen: boolean
  isUserMenuOpen: boolean
  ishomePageMobileOpen: boolean
}

const initialState: AppControlState = {
  isMobileOpen: false,
  isUserMenuOpen: false,
  ishomePageMobileOpen: false,
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
    toggleHomePageMobileMenu: (state) => {
      state.ishomePageMobileOpen = !state.ishomePageMobileOpen
    },
  },
})

export const { toggleMobileOpen, toggleUserMenuOpen, toggleHomePageMobileMenu } = AppControlSlice.actions
export default AppControlSlice.reducer
