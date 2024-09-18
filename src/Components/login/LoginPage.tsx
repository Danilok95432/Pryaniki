import { useState } from 'react'
import { authorizate } from '../../requests/requests.module'
import { useSelector,useDispatch } from 'react-redux'
import { changePassword, changeStatus, changeUsername, clearFields, setToken } from '../../store/login'
import { Button, CircularProgress, TextField } from '@mui/material'
import type { RootState } from '../../store/store'
import styles from './login.module.css'


const LoginPage = () => {

  const username = useSelector((state: RootState) => state.login.username)
  const password = useSelector((state: RootState) => state.login.password)

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch()

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      if(username != '' && password != '')
      {
        const response = await authorizate(username, password).then(res => res.data)
        if(response.data){
          dispatch(setToken(response.data.token))
          dispatch(changeStatus(true))
          dispatch(clearFields())
        }
        else{
          setError('Произошла ошибка при обработке запроса: ' + response.error_text)
        }
      }
      else {
        alert('Заполните все поля')
      }
    } catch (error) {
      setError('Произошла ошибка при обработке запроса');
    }

    setLoading(false);
  };

  return (
    <div className={styles.login}>
      <form className={styles.form}>
        <TextField
          className={styles.textField}
          label="Username"
          required
          value={username}
          onChange={(e) => dispatch(changeUsername((e.target.value)))}
        />
        <TextField
          className={styles.textField}
          label="Password"
          required
          type="password"
          value={password}
          onChange={(e) => dispatch(changePassword((e.target.value)))}
        />
        {error && <p className={styles.error}>{error}</p>}
        <Button
          className={styles.submit}
          onClick={handleLogin}
        >
          {loading ? <CircularProgress size={24} /> : 'Login'}
        </Button>
      </form>
    </div>
  )
}

export default LoginPage
