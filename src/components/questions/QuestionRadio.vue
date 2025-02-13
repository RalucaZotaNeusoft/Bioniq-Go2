<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useQuestionsStore } from '../../stores/questions';
import type { QuestionOption } from "@/types/uiTypes";

const questionsStore = useQuestionsStore();
const { selectedValues } = storeToRefs(questionsStore);
const props = defineProps<{
  question: QuestionOption
}>()

const selectedInput = ref<any>(null);

const handleAnswer = (value: any) => {
  selectedInput.value = {
    [props.question.tag]: value
  };
  selectedValues.value = selectedInput.value;

};
</script>
<template>
  <div>
    <h2>{{ question?.category }}</h2>
    <h2>{{ question?.title }}</h2>
    <div v-for="answer in question?.answers" :key="answer.value" class="answer-container">
      <label>
        <input type="radio" 
               name="quiz" 
               :value="answer.value"
               @change="handleAnswer(answer.value)" />
        <div class="answer-item">{{ answer.label }}</div>
      </label>
      <div>{{ selectedValues }}</div>
    </div>
  </div>
</template>

<style scoped>
.answer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
}

.answer-item {
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.answer-item:hover {
  background-color: #f9fafb;
}

.answer-container input {
  display: none;
}

.answer-container input:checked + .answer-item {
  border: 2px solid black;
}
</style>