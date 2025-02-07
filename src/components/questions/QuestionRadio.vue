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
        <div v-for="answer in question?.answers" :key="answer.value" class="input-container">
            <input type="radio" :value="answer.value" @change="handleAnswer(answer.value)"/>
            <label>{{ answer.label }}</label>
            <div>{{selectedValues}}</div>
        </div>   
</div>
</template>

<style scoped>
.input-container {
  display: flex;
  gap: 5px;
}
</style>