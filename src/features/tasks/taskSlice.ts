import { createSlice } from "@reduxjs/toolkit";

type TaskState={
    tasks:string[];
}

const initialState:TaskState = {
    tasks:[],
};

const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask(state,action){
            state.tasks.push(action.payload)
        },
    },
});

export const {addTask} = taskSlice.actions;

export default taskSlice.reducer;