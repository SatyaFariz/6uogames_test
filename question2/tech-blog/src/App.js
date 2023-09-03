import { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Paper, Box, Typography, TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Validator from './validator';
import axios from 'axios'

function App() {
  const session = sessionStorage.getItem('session')
  const [sessionState, setSessionState] = useState(session);
  const isMounted = useRef(true)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [field, setField] = useState({
    email: '',
    password: '',
  })

  const [validation, setValidation] = useState()

  const handleFieldChange = (key) => (e) => {
    setField(prev => ({ ...prev, [key]: e.target.value }))
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const isEmpty = (val) => {
    return val.trim().length === 0
  }

  const isValid = () => {

    const rules = [
      {
        field: 'email',
        validWhen: (val) => {
          const rgx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
          return new RegExp(rgx).test(val)
        },
        message: 'Invalid email address.'
      },
      {
        field: 'email',
        validWhen: (val) => {
          return !isEmpty(val)
        },
        message: 'Email must not be empty.'
      },
      {
        field: 'password',
        validWhen: (val) => {
          return !isEmpty(val)
        },
        message: 'Password must not be empty.'
      },
    ]

    const validator = new Validator(rules)
    const validation = validator.validate(field)
    setValidation(validation)

    return validation.isValid
  }

  const submit = () => {
    if(!isLoading && isValid()) {
      axios.post('/login', field)
      .then((response) => {
        const message = 'Welcome to 6uo Games!'
        const { session } = response.data
        sessionStorage.setItem('session', session);
        setSessionState(session)
        alert(message)
      })
      .catch((error) => {
        if(error.response.status === 401) {
          const { message } = error.response.data
          alert(message)
        }
        
        console.log(error);
      }).finally(() => {
        setIsLoading(false)
      });

      setIsLoading(true)
    }
  }

  const logout = () => {
    sessionStorage.removeItem('session');
    setSessionState(null)
    setField({
      email: '',
      password: '',
    })
    setShowPassword(false)
  }

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  
  if(sessionState) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 15
        }}
      >
        <Typography 
          variant="h4"
          style={{ marginBottom: 20 }}
        >
          Welcome to 6uo Games!
        </Typography>

        <Button 
          variant='contained'
          onClick={logout}
        >
          Logout
        </Button>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15
      }}
    >
      <Typography 
        variant="h4"
        style={{ marginBottom: 20 }}
      >
        Login to 6uo Games
      </Typography>

      <Paper
        elevation={2}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 2,
            paddingLeft: 2,
            width: '500px'
          }}
        >
          <TextField 
            id="email" 
            label="Email" 
            variant="standard"
            style={{ marginBottom: 20 }}
            spellCheck={false}
            fullWidth
            type='email'
            value={field.email}
            onChange={handleFieldChange('email')}
            error={validation?.field?.email?.isInvalid}
            helperText={validation?.field?.email?.message}
          />

          <TextField 
            id="password" 
            label="Password" 
            variant="standard"
            style={{ marginBottom: 20 }}
            spellCheck={false}
            fullWidth
            type={showPassword ? 'text' : "password"}
            value={field.password}
            onChange={handleFieldChange('password')}
            error={validation?.field?.password?.isInvalid}
            helperText={validation?.field?.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button 
            variant='contained'
            onClick={submit}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Login'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default App;
