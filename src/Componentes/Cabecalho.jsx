import React from 'react';
import styles from './Cabecalho.module.css';
import { Link } from 'react-router-dom';
import '../App.css';

function Cabecalho() {
  return (
    <div className={`${styles.header} container`}>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="contato">CONTACT</Link>
        </li>
        <li>
          <Link to="/portfolio">PORTOLIO</Link>
        </li>
        <li>
          <Link to="/habilidades">SKILLS</Link>
        </li>
      </ul>
    </div>
  );
}

export default Cabecalho;
