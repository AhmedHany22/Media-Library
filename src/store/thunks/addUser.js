import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("https://talented-toad-apron.cyclic.app/users", {
    name: faker.name.fullName(),
  });

  return response.data;
});

export { addUser };
