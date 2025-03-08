<template>
    <div class="resume-page">
      <h1 class="resume-title">Rita Nguema</h1>
      <h2 class="resume-subtitle">Performance Engineer</h2>
  
      <section class="resume-section">
        <h3>Опыт работы</h3>
        <div class="job">
          <h4>Performance Engineer</h4>
          <p class="company">XSET Technologies · Полный рабочий день</p>
          <p class="date">Август 2024 – Настоящее время (8 месяцев)</p>
  
          <ul>
            <li>Разработка и поддержка методологий нагрузочного тестирования (LTM)</li>
            <li>Создание профилей нагрузочных тестов</li>
            <li>Разработка и поддержка скриптов нагрузочного тестирования (JMeter, Locust, LoadRunner)</li>
            <li>Создание заглушек и эмуляторов внешних систем (Python, Java, Spring Boot)</li>
            <li>Настройка и использование инструментов мониторинга (Grafana, Prometheus, InfluxDB)</li>
            <li>Оптимизация SQL-запросов и профилирование производительности БД (PostgreSQL, pg_stat)</li>
            <li>Запуск нагрузочных тестов, анализ результатов, поиск узких мест, формирование рекомендаций</li>
            <li>Подготовка отчетов и презентация результатов заинтересованным сторонам</li>
            <li>Взаимодействие с командами продукта, анализ инцидентов и решение проблем</li>
          </ul>
        </div>
      </section>
  
      <section class="resume-section">
        <h3>Инструменты & Технологии</h3>
        <div class="skills-grid">
          <div class="skill-category">
            <h4>Load Testing</h4>
            <p>JMeter, Locust, LoadRunner, K6</p>
          </div>
          <div class="skill-category">
            <h4>Программирование</h4>
            <p>Python, Java, SQL, JavaScript</p>
          </div>
          <div class="skill-category">
            <h4>Базы данных</h4>
            <p>PostgreSQL (pg_stat)</p>
          </div>
          <div class="skill-category">
            <h4>Мониторинг</h4>
            <p>Grafana, Prometheus</p>
          </div>
          <div class="skill-category">
            <h4>Контейнеризация</h4>
            <p>Docker, Kubernetes</p>
          </div>
          <div class="skill-category">
            <h4>Прочее</h4>
            <p>Jira, Confluence</p>
          </div>
        </div>
      </section>
  
      <!-- Кнопка скачивания PDF -->
      <a href="#" download class="download-btn">
        Скачать полное резюме (PDF)
      </a>
    </div>
  </template>
  
  <style>
  .resume-page {
    padding: 40px;
    max-width: 800px;
    margin: auto;
    font-family: "Montserrat", sans-serif;
    color: #22223b;
  }
  
  .resume-title {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }
  
  .resume-subtitle {
    font-size: 24px;
    text-align: center;
    color: #555;
    margin-bottom: 30px;
  }
  
  .resume-section {
    margin-bottom: 30px;
  }
  
  .resume-section h3 {
    font-size: 22px;
    color: #e97735;
    border-bottom: 2px solid #e97735;
    padding-bottom: 5px;
    margin-bottom: 15px;
  }
  
  .job h4 {
    font-size: 20px;
    font-weight: bold;
  }
  
  .company {
    font-size: 16px;
    color: #777;
  }
  
  .date {
    font-size: 14px;
    color: #777;
    margin-bottom: 10px;
  }
  
  .resume-section ul {
    padding-left: 20px;
  }
  
  .resume-section ul li {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .skill-category h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .download-btn {
    display: block;
    text-align: center;
    margin: 30px auto 0;
    margin-top: 50px;
    padding: 12px 20px;
    font-size: 18px;
    background-color: #e97735;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    width: 250px;
  }
  
  .download-btn:hover {
    background-color: #c95d28;
  }
  
  @media screen and (max-width: 768px) {
    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>
  