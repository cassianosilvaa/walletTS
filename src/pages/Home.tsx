import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { inputMoney, outputMoney } from '../store/modules/WalletUserSlice';

const Home: React.FC = () => {
    const [input, setInput] = useState<number>(0);
    const [output, setOutput] = useState<number>(0);

    const dispatch = useAppDispatch();

    const walletRedux = useAppSelector(state => state.wallet);

    const handleAddInput = () => {
        dispatch(inputMoney(input));
        setInput(0);
    };

    const handleOutInput = () => {
        dispatch(outputMoney(output));
        setOutput(0);
    };

    return (
        <>
            <ResponsiveAppBar />
            <Container
                maxWidth="lg"
                fixed
                sx={{
                    backgroundColor: 'bisque',
                    paddingBottom: '20px',
                    marginTop: '50px'
                }}
            >
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Typography variant="h4">Saldo: R${walletRedux.money}</Typography>
                    </Grid>
                    <Grid item lg={6} xs={6}>
                        <TextField
                            label="Entrada"
                            fullWidth
                            value={input || ''}
                            type="number"
                            id="outlined-size-small"
                            size="small"
                            onChange={ev => setInput(Number(ev.target.value))}
                        />
                        <Button variant="contained" onClick={handleAddInput} sx={{ marginTop: '7px' }}>
                            Adicionar
                        </Button>
                    </Grid>
                    <Grid item lg={6} xs={6}>
                        <TextField
                            label="Saída"
                            fullWidth
                            value={output || ''}
                            id="outlined-size-small"
                            size="small"
                            onChange={ev => setOutput(Number(ev.target.value))}
                        />
                        <Button variant="contained" onClick={handleOutInput} sx={{ marginTop: '7px' }}>
                            Retirar
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Home;
