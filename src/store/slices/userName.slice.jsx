import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'userName',
    initialState: "Juancho",
    reducers: {
        changeUserName: (state, action) => {
            const inputName = action.payload
            return inputName
        }
    }
})

export const { changeUserName } = userNameSlice.actions;

export default userNameSlice.reducer;