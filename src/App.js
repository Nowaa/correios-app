import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Nome:
        <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default App;
