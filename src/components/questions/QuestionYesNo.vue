<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useQuestionsStore } from '../../stores/questions';
import type { QuestionOption } from "@/types/uiTypes";

const questionsStore = useQuestionsStore();
const { selectedValues } = storeToRefs(questionsStore);
defineProps<{
    question: QuestionOption
}>()

const selectedValue = ref(null);
</script>

<template>
    <div>
        <h2>{{ question?.category }}</h2>
        <h2>{{ question?.title }}</h2>
        <div v-for="answer in question?.answers" :key="answer.value" class="input-container">
            <input type="radio" :value="answer.value" name="quiz" v-model="selectedValues"/>
            <label>{{ answer.label }}</label>
            <div>{{ selectedValues }}</div>
        </div>
    </div>    
</template>

<style scoped>
.input-container {
  display: flex;
  gap: 5px;
}
</style>
