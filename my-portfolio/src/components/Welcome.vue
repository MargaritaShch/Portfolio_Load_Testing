<template>
  <div class="welcome-page">
    <div v-if="loading" class="loading-screen">
      <div class="spinner"></div>
    </div>
    
    <div class="left-content">

      <div class="animated-circles">
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
        <div class="circle circle4"></div>
      </div>

      <div class="text-container">
        <div class="log-greeting">
          <div v-for="(log, index) in greetingLogs" :key="index" :class="log.type">
            {{ log.message }}
          </div>
        </div>
        
        <button v-if="showButton" @click="goToPortfolio" class="welcome-button">View portfolio</button>
      </div>
    </div>
    <div class="right-image"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      greetingLogs: [],
      showButton: false, 
      greetingMessages: [
        { message: "[INFO] Start...", type: "info" },
        { message: "[INFO] I'm Rita Nguema", type: "info" },
        { message: "[INFO] Performance Engineer", type: "info" },
      ],
    };
  },
  methods: {
    goToPortfolio() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/home');
      }, 2500);
    },
    generateGreetingLogs() {
      let index = 0;
      const interval = setInterval(() => {
        if (index < this.greetingMessages.length) {
          this.greetingLogs.push(this.greetingMessages[index]);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            this.showButton = true; // Показываем кнопку после задержки
          }, 500); // Даем 1 секунду перед появлением кнопки
        }
      }, 1500);
    },
  },
  mounted() {
    this.generateGreetingLogs();
  },
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
.animated-circles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1); /* Чёрный цвет с прозрачностью */
  animation: float 6s infinite alternate ease-in-out;
}

.circle1 {
  width: 120px;
  height: 120px;
  top: 10%;
  left: 15%;
}

.circle2 {
  width: 180px;
  height: 180px;
  top: 60%;
  left: 20%;
  animation-delay: 2s;
}

.circle3 {
  width: 100px;
  height: 100px;
  top: 30%;
  left: 50%;
  animation-delay: 1s;
}

.circle4 {
  width: 140px;
  height: 140px;
  top: 80%;
  left: 70%;
  animation-delay: 3s;
}

/* Анимация движения */
@keyframes float {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}
.loading-screen {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: fadeOut 2s ease-out forwards;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.2);
  border-top-color: #f28500;
  border-radius: 50%;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.welcome-page {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.left-content {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, #fbeaff, #d4e8ff);
  color: #22223b;
}

.text-container {
  text-align: center;
  position: relative;
  z-index: 2;
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
  color: rgb(7, 7, 7);
  background: #e97735e0;
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

.right-image {
  width: 50%;
  height: 100vh;
  background: url('/src/img/welcome-background.jpg') center/cover no-repeat;
}

.log-greeting {
  font-family: "Courier New", Courier, monospace;
  font-size: 30px; 
  font-weight: bold; 
  text-align: left; 
  padding: 15px; 
  border-radius: 8px; 
  margin-bottom: 15px; 
  color: #000 !important;
  width: fit-content; 
  margin-left: auto; 
  margin-right: auto;
}

.log-greeting div {
  opacity: 0;
  animation: fadeInLog 1s ease-in-out forwards;
  color: #000 !important;
}

@keyframes fadeInLog {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.info {
  color: #0096ff;
}

.warn {
  color: #ffcc00;
}

.error {
  color: #ff5733;
}

/* Медиа-запрос для мобильных устройств */
@media screen and (max-width: 768px) {
  .welcome-page {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .left-content {
    width: 100%;
    padding: 30px 20px;
  }

  .right-image {
    width: 100%;
    height: 50vh;
    background-size: cover;
  }

  .welcome-title {
    font-size: 32px;
  }

  .welcome-subtitle {
    font-size: 18px;
  }

  .welcome-button {
    font-size: 16px;
    padding: 12px 24px;
  }
}
</style>
