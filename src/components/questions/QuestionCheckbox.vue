<script setup lang="ts">
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { useQuestionsStore } from '../../stores/questions';
import type { QuestionOption } from "@/types/uiTypes";

const questionsStore = useQuestionsStore();
const { selectedValues } = storeToRefs(questionsStore);
const props = defineProps<{
  question: QuestionOption
}>()

const selectedInput = ref<any>(null);
const selectedInputs = reactive<any>([]);
const checked = ref(true);


const handleAnswer = (value: any, event: any) => {
  console.log('event', event);

  const isChecked = event.target.checked;

  if (isChecked) {
    selectedInputs.push({
      [props.question.tag]: value
    });
  } else {
    const deletedItem = selectedInputs.findIndex(
      (item: any) => item[props.question.tag] === value
    );
    selectedInputs.splice(deletedItem, 1);
  }
  selectedValues.value = selectedInputs;
};

</script>

<template>
  <div>
    <h2>{{ question?.category }}</h2>
    <h2>{{ question?.title }}</h2>
    <div v-for="answer in question?.answers" :key="answer.value" class="answer-container">
      <label>
        <input type="checkbox" :value="answer.value"
          @change="(event) => handleAnswer(answer.value, event)" />
        <h2 class="answer-item">{{ answer.label }}</h2>
      </label>
    </div>
  </div>
</template>

<style>
.answer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
}

h2 {
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #f9fafb;
  }
  & input {
  display: none;
  }
}

.answer-container input:checked + .answer-item {
  border: 2px solid black;
}
</style>