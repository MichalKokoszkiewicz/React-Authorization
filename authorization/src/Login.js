import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import swal from 'sweetalert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = (e) => {
    e.preventDefault();
    if (email === 'test@test.pl' && password === 'test') {
      swal('Zalogowano poprawnie', 'Witaj administratorze', 'success');
    } else {
      swal('Błąd logowania', 'Wpisz poprawny email i hasło', 'error');
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1>Logowanie</h1>
          <form onSubmit={validate}>
            <input
              type="email"
              placeholder="Wpisz email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Wpisz hasło"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
