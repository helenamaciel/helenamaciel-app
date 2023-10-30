import React, { useState } from 'react';
import firebase from './services/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, senha);
      // Usuário autenticado com sucesso, redirecione para a próxima tela ou faça outras operações necessárias.
    } catch (error) {
      // Handle errors, por exemplo, exibindo uma mensagem de erro para o usuário.
      console.error(error);
    }
  };

  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
