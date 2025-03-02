import { createSlice } from "@reduxjs/toolkit";


const quizzesSlice = createSlice({
    name: 'quizzesSlice',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    },
    selectors: {
        selectQuizzes: (state) => state.quizzes
    }
})

export const { addQuiz } = quizzesSlice.actions;
export const { selectQuizzes } = quizzesSlice.selectors;
export default  quizzesSlice; 