<script setup>
import { pageContent } from './content/site'
</script>

<template>
  <main class="page-shell">
    <section class="card">
      <p class="eyebrow">{{ pageContent.eyebrow }}</p>
      <h1>{{ pageContent.title }}</h1>
      <p class="subtitle">{{ pageContent.subtitle }}</p>

      <div class="group-list">
        <article v-for="group in pageContent.groups" :key="group.groupNumber" class="group-item">
          <div class="group-meta">
            <p class="group-name">{{ group.name }}</p>
            <p class="hint">QQ群号：{{ group.groupNumber }}</p>
          </div>

          <a
            class="join-button"
            :href="group.qqGroupApplyUrl"
            target="_blank"
            rel="noreferrer"
          >
            进入QQ群申请
          </a>
        </article>
      </div>
    </section>
  </main>
</template>
