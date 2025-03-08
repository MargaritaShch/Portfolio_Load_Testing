<template>
    <div class="contacts-page">
      <h1 class="contacts-title">Давайте познакомимся!</h1>
      <p class="contacts-subtitle">Я всегда открыта к новым возможностям и интересным проектам.</p>
  
      <div class="contact-list">
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <a href="mailto:rita.nguema@example.com">rita.nguema@example.com</a>
        </div>
        <div class="contact-item">
          <i class="fab fa-telegram-plane"></i>
          <a href="https://t.me/rita_ng">t.me/rita_ng</a>
        </div>
        <div class="contact-item">
          <i class="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/rita-nguema">LinkedIn Profile</a>
        </div>
      </div>
  
      <p class="closing-message">
        "Программирование — это как пицца. Даже если что-то идет не так, все равно получается неплохо!" 🍕😄
      </p>
    </div>
  </template>
  
  <style>
  .contacts-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    color: #22223b;
    background: linear-gradient(135deg, #fbeaff, #d4e8ff);
  }
  
  .contacts-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .contacts-subtitle {
    font-size: 20px;
    color: #555;
    margin-bottom: 30px;
  }
  
  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;
  }
  
  .contact-item i {
    font-size: 24px;
    color: #e97735;
  }
  
  .contact-item a {
    text-decoration: none;
    color: #e97735;
    font-weight: bold;
  }
  
  .contact-item a:hover {
    text-decoration: underline;
  }
  
  .closing-message {
    font-size: 20px;
    font-style: italic;
    color: #777;
    margin-top: 40px;
    max-width: 500px;
  }
  </style>
  