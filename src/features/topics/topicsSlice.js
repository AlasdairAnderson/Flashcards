import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic(state, action) {
            const { id, name, icon } = action.payload;
            const topic = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
            state.topics.push(topic);
        }
    },
    selectors: {
        selectTopics: (state) => state.topics
    }
});

export const { addTopic } = topicsSlice.actions;
export const { selectTopics } = topicsSlice.selectors;
export default topicsSlice.reducer;