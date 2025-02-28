<template>
  <div class="welcome-page">
    <div class="background-circles">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
      <div class="circle circle5"></div>
      <div class="circle circle6"></div>
    </div>
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
  justify-content: space-between;
  height: 100vh;
  background: linear-gradient(135deg, #22223b, #4a4e69);
  color: white;
  text-align: left;
  padding-left: 10%;
  position: relative;
  overflow: hidden;
}

.welcome-content {
  max-width: 600px;
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


.background-circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s infinite alternate ease-in-out;
}

.circle1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 15%;
}

.circle2 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 80%;
  animation-delay: 2s;
}

.circle3 {
  width: 180px;
  height: 180px;
  top: 80%;
  left: 30%;
  animation-delay: 1s;
}

.circle4 {
  width: 100px;
  height: 100px;
  top: 50%;
  left: 10%;
  animation-delay: 1s;
}

.circle5 {
  width: 100px;
  height: 100px;
  top: 70%;
  left: 50%;
  animation-delay: 2s;
}

.circle6 {
  width: 120px;
  height: 120px;
  top: 10%;
  left: 50%;
  animation-delay: 2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


@keyframes float {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}
</style>