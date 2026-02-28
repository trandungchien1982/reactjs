import { createAsyncThunk } from '@reduxjs/toolkit'

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers', // Name of async function
  async (userId, thunkAPI) => {
      console.log(" -- Try to fetch API : ... with userId: " + userId);
    const response = await fetch('https://api.jikan.moe/v4/anime');

    for (let i = 1; i <= 5; i++) {
        await delay(200); //fetch('https://api.jikan.moe/v4/anime');
        console.log(" -- wait time at idx : " + i);
    }
    //const strJson = response.json();
    //console.log(" -- Finish fetch API ... response: " + strJson);

    if (!userId) throw "Undefined userId - Empty or NULL => Rejected";

    return "FetchDataOK";
  }
)
