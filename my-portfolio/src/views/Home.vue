<template>
  <div class="layout">
    <aside class="sidebar">
      <nav>
        <ul>
          <li><router-link to="/home">Главная</router-link></li>
          <li><router-link to="/home/resume">Резюме</router-link></li>
          <li><a href="#">Проекты</a></li>
          <li><a href="#">Блог</a></li>
          <li><router-link to="/home/contacts">Контакты</router-link></li>
        </ul>
      </nav>
    </aside>

    <main class="content">
      <!-- Здесь будет подгружаться Resume.vue, если активен путь /home/resume -->
      <router-view></router-view>

      <!-- Блоки ниже показываются только на Главной странице -->
      <template v-if="$route.path === '/home'">
        <div class="profile-section">
          <img src="/src/img/general_photo.webp" alt="Profile" class="profile-img" />
          <h1 class="profile-name">Rita Nguema</h1>
          <p class="profile-title">Нагрузочный тестировщик | Performance Engineer</p>
          <div class="social-links">
            <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
            <a href="#" class="social-icon"><i class="fas fa-envelope"></i></a>
          </div>
        </div>

        <div class="wave-divider">
          <p class="summary">
            Hi, I’m Rita, I work as a performance engineer and am dedicated to ensuring system reliability, stability, and scalability under load. My experience includes:
          </p>
          <p class="summary">
            I enjoy analyzing complex systems, understanding their behavior under load, and finding ways to improve their efficiency. Always eager to take on new challenges and grow professionally.
          </p>
        </div>

        <div class="projects">
          <h2>Проекты</h2>
          <div class="projects-list">
            <div v-for="(project, index) in projects" :key="index" class="project-card">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <a :href="project.link">Подробнее</a>
            </div>
          </div>
        </div>
      </template>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: "Проект 1", description: "Описание проекта 1", link: "#" },
        { title: "Проект 2", description: "Описание проекта 2", link: "#" },
        { title: "Проект 3", description: "Описание проекта 3", link: "#" },
      ],
    };
  },
};
</script>

<style>
html, body {
width: 100%;
height: 100%;
overflow-x: hidden;
}
.layout {
  display: flex;
  background: linear-gradient(135deg, #fbeaff, #d4e8ff);
  min-height: 100vh;
}

.sidebar {
  width: 220px;
  background: rgba(242, 161, 62, 0.334);
  color: rgb(7, 7, 7);
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 20px 0;
  text-align: center;
}

.sidebar ul li a {
  color: rgb(19, 19, 19);
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.sidebar ul li a:hover {
  color: #ed522c;
}

.experience-list {
  padding-left: 20px;
  list-style-type: disc;
  font-size: 16px;
  color: #555;
  margin-top: 10px;
}

.content {
  margin-left: 220px;
  padding: 40px;
  flex-grow: 1;
  animation: fadeIn 1s ease-in-out;
}

.profile-section {
  text-align: center;
  padding: 40px 0;
}

.profile-img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 6px solid white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}

.profile-name {
  font-size: 28px;
  font-weight: bold;
  color: #22223b;
}

.profile-title {
  color: #6c757d;
}

.social-links {
  margin-top: 10px;
}

.social-icon {
  margin: 0 12px;
  font-size: 22px;
  color: #6c757d;
  transition: transform 0.3s ease-in-out;
}

.social-icon:hover {
  transform: scale(1.2);
  color: #f2a7e1;
}

.summary {
  max-width: 600px;
  margin: 20px auto;
  font-size: 16px;
  color: #555;
}

.wave-divider {
  height: 100px;
  /* background: linear-gradient(to right, #fff, #fbeaff);
  animation: waveAnimation 3s infinite alternate; */
}

.projects {
  margin-top: 10%;
}

.projects-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.project-card {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

.project-card h3 {
  margin-bottom: 10px;
  color: #22223b;
}

.project-card a {
  color: #f2a7e1;
  text-decoration: none;
  font-weight: bold;
}

.project-card a:hover {
  text-decoration: underline;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes waveAnimation {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10px);
  }
}
</style>