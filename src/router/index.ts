import { createRouter, createWebHistory } from 'vue-router';
// import {quiz_data} from '../'

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
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/section-intro',
      name: 'section-intro',
      component: () => import('../views/SectionIntro.vue'),
    },
    {
      path: '/question-radio',
      name: 'question-radio',
      component: () => import('../components/questions/QuestionRadio.vue'),
      props: { question: quiz_data.questions[0]}
    },
    {
      path: '/question-checkbox',
      name: 'question-checkbox',
      component: () => import('../components/questions/QuestionCheckbox.vue'),
      props: { question: quiz_data.questions[1]}
    },
    {
      path: '/question-boolean',
      name: 'question-boolean',
      component: () => import('../components/questions/QuestionBoolean.vue'),
      props: { question: quiz_data.questions[2]}
    },
  ],
})

export default router
