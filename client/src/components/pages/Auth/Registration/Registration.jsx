import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MinorCrashRoundedIcon from '@mui/icons-material/MinorCrashRounded';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setAuth } from '../../../../redux/actions/authActions';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        AutoForum
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const theme = createTheme();

function Registration() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/v1/user/', input).then(res => {
      navigate('/');
      dispatch(setAuth(res.data));
    });
  };

  const { mode } = useSelector(state => state);
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.grey' }}>
            <MinorCrashRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Имя"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  // required
                  fullWidth
                  name="tg"
                  label="Telegram"
                  type="tg"
                  id="tg"
                  autoComplete="new-telegram"
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <TextField
                  // required
                  fullWidth
                  name="about"
                  label="О себе"
                  type="about"
                  id="about"
                  autoComplete="new-about"
                />
              </Grid> */}
            </Grid>
            {/* <Button
              type="submit"
              color="grey"
              fullWidth
              variant="contained"
              sx={{ mt: 0.1, mb: 2 }}
            >
              Выбрать фото
            </Button> */}

            <Button
              type="submit"
              color="grey"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
            >
              Зарегистрироваться
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Уже зарегистрирован? Войти
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default Registration;
