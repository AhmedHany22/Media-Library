import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`https://talented-toad-apron.cyclic.app/users/${user.id}`);

  return user;
});

export { removeUser };
