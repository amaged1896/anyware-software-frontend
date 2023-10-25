import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLogin: false,
    isSideBarOpen: false,
    announcements: [],
    quizes: [],
    isLoading: false,
    isError: false
}



export const getAnnouncements = createAsyncThunk(
    "getAnnouncements",
    async (_, thunkAPI) => {
        try {
            const res = await axios(
                "https://anyware-software-backend.vercel.app/api/v1/announcement"
            )
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const getQuizes = createAsyncThunk(
    "getQuizes",
    async (_, thunkAPI) => {
        try {
            const res = await axios(
                "https://anyware-software-backend.vercel.app/api/v1/quiz"
            )
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        openSidebar: (state) => {
            state.isSideBarOpen = true
        },
        closeSidebar: (state) => {
            state.isSideBarOpen = false
        },
        login: (state) => {
            state.isLogin = true
        },
        logout: (state) => {
            state.isLogin = false
        }
    },
    extraReducers: (builder) => {
        builder
            // ! get announcements
            .addCase(getAnnouncements.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAnnouncements.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.announcements = payload.data.data
            })
            .addCase(getAnnouncements.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })
            // ! get quizes
            .addCase(getQuizes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getQuizes.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.quizes = payload.data.data
            })
            .addCase(getQuizes.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })

    },
})

// Action creators are generated for each case reducer function
export const { openSidebar, closeSidebar, login, logout } = generalSlice.actions

export default generalSlice.reducer