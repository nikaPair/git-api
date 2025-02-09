import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Repository } from '../../types/repositoryTypes';

interface RepositoriesState {
    repositories: Repository[];
    loading: boolean;
    error: string | null;
    page: number;
    totalCount: [];
}

const initialState: RepositoriesState = {
    repositories: [],
    loading: false,
    error: null,
    page: 1,
    totalCount: [],
};

export const fetchRepositories = createAsyncThunk(
    'repositories/fetch',
    async (payload: { username: string; page: number }, { rejectWithValue }) => {
        const { username, page } = payload;
        const token = process.env.REACT_APP_GIT_TOKEN;
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=20&page=${page}`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            if (!response.ok) throw new Error('Ошибка загрузки данных');

            const totalRespons = await fetch(`https://api.github.com/users/${username}/repos`);
            const totalCount = await totalRespons.json();
            const data = await response.json();

            return { data, totalCount };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {
        resetState: state => {
            state.repositories = [];
            state.page = 1;
            state.totalCount = [];
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchRepositories.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRepositories.fulfilled, (state, action) => {
                state.loading = false;
                state.repositories.push(...action.payload.data);
                state.page += 1;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(fetchRepositories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetState } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
