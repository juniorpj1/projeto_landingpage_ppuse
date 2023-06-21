import React from 'react';

const LandingPage = () => {
  return (
    <div className="container">
      <div className="header">
        <img src="public/logo_chamada.png" alt="Imagem" />
        <text>PPUSE</text>
        <div className="line"></div>
      </div>
      <div className="landing-page">
        <h1>Atenda onde, quando e como quiser</h1>
        <h2>É um dentista formado e ainda não tem seu próprio consultório? O que você acha de alugar um até ter o seu?</h2>
        <a href="https://ppuse.com.br/" className="button">Quero alugar</a>
      </div>
    </div>
  );
};

export default LandingPage;
