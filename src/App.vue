<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { pageContent } from './content/site'

const copiedGroupNumber = ref('')
let copiedTimer = null

const copyGroupNumber = async (groupNumber) => {
  if (!navigator.clipboard?.writeText) {
    return
  }

  await navigator.clipboard.writeText(groupNumber)
  copiedGroupNumber.value = groupNumber

  if (copiedTimer) {
    window.clearTimeout(copiedTimer)
  }

  copiedTimer = window.setTimeout(() => {
    copiedGroupNumber.value = ''
  }, 1500)
}

const getStatusTone = (status) => {
  if (status === '正常' || status === '开放' || status === '活跃') {
    return 'status-success'
  }

  if (status === '筹备中') {
    return 'status-warning'
  }

  if (status === '临时') {
    return 'status-info'
  }

  return 'status-error'
}

onBeforeUnmount(() => {
  if (copiedTimer) {
    window.clearTimeout(copiedTimer)
  }
})
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
            <div class="group-header">
              <p class="group-name">{{ group.name }}</p>
              <span class="status-badge" :class="getStatusTone(group.status)">{{ group.status }}</span>
            </div>
            <div class="group-number-row">
              <span class="hint">QQ群号：</span>
              <button
                type="button"
                class="group-number-copy"
                @click="copyGroupNumber(group.groupNumber)"
              >
                {{ group.groupNumber }}
              </button>
              <span v-if="copiedGroupNumber === group.groupNumber" class="copy-feedback">
                已复制
              </span>
            </div>
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

      <footer class="footer-bar">
        <div class="footer-item">
          <span class="footer-label">许可</span>
          <span class="footer-value">© 2026 All Rights Reserved.</span>
        </div>
        <div class="footer-item">
          <span class="footer-label">联系邮箱</span>
          <a class="footer-link" href="mailto:liyuu@3101101.xyz">liyuu@3101101.xyz</a>
        </div>
      </footer>
    </section>
  </main>
</template>
