<template>
    <div class="welcome-page">
      <div class="welcome-content">
        <h1 class="welcome-title">Привет, я Рита!</h1>
        <p class="welcome-subtitle">Нагрузочный тестировщик | Performance Engineer</p>
        <button @click="goToPortfolio" class="welcome-button">Посмотреть портфолио</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToPortfolio() {
        this.$router.push('/home');
      }
    }
  };
  </script>
  
  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .welcome-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #22223b, #4a4e69);
    color: white;
    text-align: center;
    position: relative;
  }
  
  .welcome-title {
    font-size: 48px;
    font-weight: bold;
    animation: fadeIn 1.5s ease-in-out;
  }
  
  .welcome-subtitle {
    font-size: 22px;
    margin: 10px 0 20px;
    animation: fadeIn 2s ease-in-out;
  }
  
  .welcome-button {
    padding: 15px 30px;
    font-size: 18px;
    color: white;
    background: #f2a7e1;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease-in-out, transform 0.2s;
    animation: fadeIn 2.5s ease-in-out;
  }
  
  .welcome-button:hover {
    background: #d17bb8;
    transform: scale(1.05);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  