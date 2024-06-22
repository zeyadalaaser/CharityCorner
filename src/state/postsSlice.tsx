import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PostsState
{
    donationPost: string;
    editPost: string;
}

const postsSlice = createSlice({
    name: "posts",
    initialState: {} as PostsState,
    reducers: {
        set: (state, action: PayloadAction<{ key: keyof PostsState; value: any }>) => {
            state[action.payload.key] = action.payload.value;
        }
    }
});

export const { set } = postsSlice.actions;

export default postsSlice.reducer;