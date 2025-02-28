<template>
    <div class="layout">
      <aside class="sidebar">
        <nav>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Резюме</a></li>
            <li><a href="#">Проекты</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
      </aside>
  
      <main class="content">
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
            <p class="summary">Я специалист по нагрузочному тестированию.</p>
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
  .layout {
    display: flex;
    background: linear-gradient(135deg, #fbeaff, #d4e8ff);
    min-height: 100vh;
  }
  
  .sidebar {
    width: 220px;
    background: linear-gradient(180deg, #4a4e69, #22223b);
    color: white;
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
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }
  
  .sidebar ul li a:hover {
    color: #f2a7e1;
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
    background: linear-gradient(to right, #fff, #fbeaff);
    animation: waveAnimation 3s infinite alternate;
  }
  
  .projects {
    margin-top: 40px;
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
  