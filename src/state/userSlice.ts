import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState
{
    name: string;
    gender: string;
    number: string;
    address: string;
    governorate: string;
    area: string;
    email: string;
    password: string;
    userType: string;
    orgName?: string;
    orgType?: string;
    file?: string;
    myPosts?: string[];
}

const userSlice = createSlice({
    name: "user",
    initialState: {} as UserState,
    reducers: {
        initialize: (_, action) => {
            return action.payload;
        },

        set: (state, action: PayloadAction<{ key: keyof UserState; value: any }>) => {
            state[action.payload.key] = action.payload.value;
        }
    }
});

export const { initialize, set } = userSlice.actions;

export default userSlice.reducer;