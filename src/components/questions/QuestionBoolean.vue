<script setup lang="ts">
import type { QuestionOption } from "@/types/uiTypes";
defineProps<{
    question: QuestionOption
}>()
</script>

<template>
    <div>
        <h2>{{ question?.category }}</h2>
        <h2>{{ question?.title }}</h2>
        <div v-for="answer in question?.answers" :key="answer.value" class="input-container">
            <input type="radio" :value="answer.value" name="quiz" />
            <label>{{ answer.label }}</label>
        </div>
    </div>    
</template>

<style scoped>
.input-container {
  display: flex;
  gap: 5px;
}
</style>
