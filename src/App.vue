<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import type { Questions } from "@/types/uiTypes";
import WhyWeAsk from './components/WhyWeAsk.vue';
import QuestionBoolean from './components/questions/QuestionBoolean.vue';
import QuestionCheckbox from './components/questions/QuestionCheckbox.vue';
import QuestionRadio from './components/questions/QuestionRadio.vue';
import ContinueButton from './components/ContinueButton.vue';
import BackButton from './components/BackButton.vue';

const quiz_data = {
  quiz_id: 1,
  intro_section: {
    title: "Achieve your goals",
    content: `To help us understand what vitamins and minerals you may require, please answer the following questions. 
We will input your responses into our patented algorithm that utilizes our 10 years of scientific data to create your personalized formula.`,
  },
  questions: [
    {
      category: "HEALTH GOALS",
      tag: "HEALTH GOALS",
      type: "radio",
      title: "Which sex were you assigned at birth?",
      answers: [
        { value: 1, label: "female" },
        { value: 2, label: "male" },
        { value: 3, label: "prefer not to say" },
      ],
      hint: {
        title: "Why we ask",
        content: `Dosage of specific nutrients may differ based on your answer. Absorption and metabolism of B-vitamins can vary based on BMI and sex. If you choose 'Prefer not to say', we will set your dosage of certain ingredients at a generally effective level, with no sex-specific augmentation.`,
      },
      validation_rules: {
        min: 1,
      },
    },
    {
      category: "HEALTH GOALS",
      tag: "HEALTH GOALS",
      type: "checkbox",
      title: "Which sex were you assigned at birth?",
      answers: [
        { value: 1, label: "skin" },
        { value: 2, label: "heart" },
        { value: 3, label: "memory" },
      ],
      hint: {
        title: "Why we ask",
        content: `Dosage of specific nutrients may differ based on your answer. Absorption and metabolism of B-vitamins can vary based on BMI and sex. If you choose 'Prefer not to say', we will set your dosage of certain ingredients at a generally effective level, with no sex-specific augmentation.`,
      },
      validation_rules: {
        min: 1,
        max: 3,
      },
    },
    {
      category: "LIVER FUNCTION",
      tag: "LIVER",
      type: "true_false",
      title: "Do you often drink alcoholic beverages?",
      answers: [
        { value: 1, label: "yes" },
        { value: 2, label: "no" },
      ],
      hint: {
        title: "Did you know?",
        content: `Alcohol is known to damage liver cells and also reduces the absorption of certain vitamins.`,
      },
      validation_rules: {
        min: 1,
      },
    },
  ],
  legal_links: [{ title: "Privacy policy", href: "https://bioniq.com/legals" }],
};
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/section-intro">Section Intro</RouterLink>
  <RouterLink to="/question-radio">question-radio></RouterLink>
  <RouterLink to="/question-checkbox" :question="quiz_data.questions[1]">question-checkbox</RouterLink>
  <RouterLink to="/question-boolean" :question="quiz_data.questions[2]">question-boolean</RouterLink>
  <RouterView />
  <BackButton/>
  <ContinueButton />
  <WhyWeAsk :hint="quiz_data.questions[0].hint" />
</template>

<style scoped></style>
