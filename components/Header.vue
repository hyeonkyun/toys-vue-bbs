<!-- components/Header.vue -->
<template>
  <header>
    <nav>
      <h1>내 게시판</h1>
      <ul>
        <li><a href="/">홈</a></li>
        <li><a href="/dashboard">대시보드</a></li>
        <li><a href="/about">소개</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  background-color: #42b983;
  padding: 10px 0;
}
nav h1 {
  color: white;
  margin: 0;
  padding-left: 20px;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
  padding: 0;
  margin: 0;
}
nav a {
  color: white;
  text-decoration: none;
}
</style>
