import React from 'react';
import styles from "./chamada.module.css"

export default function Chamada() {
  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <img src="public/logo_chamada.png" alt="Logomarca do site PPUSE" />
        <text>PPUSE</text>
        <div className={styles.line}></div>
      </div>

      <div className={styles.chamada}>
        <h1>Atenda onde, quando e como quiser</h1>
        <h2>É um dentista formado e ainda não tem seu próprio consultório? O que você acha de alugar um até ter o seu?</h2>
        <a href="https://ppuse.com.br/" className={styles.button} target="_blank" >Quero alugar</a>
      </div>
    </div>
  );
}