import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic(state, action) {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;
            state.topics[topicId].quizIds.push(id)
        }
    },
    selectors: {
        selectTopics: (state) => state.topics
    }
});

export const { addTopic } = topicsSlice.actions;
export const { selectTopics } = topicsSlice.selectors;
export default topicsSlice.reducer;