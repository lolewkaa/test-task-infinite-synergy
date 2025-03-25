import axios from "axios";
import { RepoItem } from "../types/types";

let currentPage = 1;

export const fetchUserRepos = async () => {
    const url = `http://localhost:3000/users?_page=${currentPage}&_per_page=20`;
    const response = await axios.get(url);
    currentPage++;

    return response.data.data;
};

export const updateSeminarRepo = async (userId: string | number, updatedData: RepoItem): Promise<void> => {
    const url = `http://localhost:3000/users/${userId}`;

    axios.put(url, updatedData);
};