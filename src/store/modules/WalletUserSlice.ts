import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import WalletUser from '../../types';

const initialState: WalletUser = {
    money: 0,
    input: [],
    output: []
};

const walletUserSlice = createSlice({
    name: 'walletUser',
    initialState,
    reducers: {
        inputMoney(state, action: PayloadAction<number>) {
            state.input.push(action.payload);
            state.money += action.payload;
        },
        outputMoney(state, action: PayloadAction<number>) {
            state.output.push(action.payload);
            state.money -= action.payload;
        }
    }
});

export const { inputMoney, outputMoney } = walletUserSlice.actions;
export default walletUserSlice.reducer;
