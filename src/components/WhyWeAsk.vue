<script setup lang="ts">

const props = defineProps<{
  // whyType?: WhyType;
  hint?: HintType;
}>();

</script>
<template>
    <div class="why-we-ask-container">
      <div class="row">
        <div class="why-we-ask-icon">
          <img src="@/assets/icons/why-we-ask.svg" alt="why-we-ask" />
        </div>
        <div class="title">{{ props.hint?.title }}</div>
      </div>
      <div class="text">{{ props.hint?.content }}</div>
    </div>
  </template>
  
  <style scoped lang="pcss">
  .why-we-ask-container {
    width: 60%;
    margin: 1em auto 0 auto;
    text-align: center;
    & .row {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5em;
      & .why-we-ask-icon {
        margin-right: 1em;
        width: 1.5em;
        height: 1.5em;
        & img {
          /* width: 100%;
          height: 100%; */
        }
      }
      & .title {
        font-weight: bold;
        font-size: 1rem;
      }
    }
    & .text {
      font-size: 0.9rem;
    }
  }
  
  @media (--laptop-width) {
    .why-we-ask-container {
      width: 80%;
    }
  }
  
  @media (--phone-width) {
    .why-we-ask-container {
      width: 100%;
      & .text {
        font-size: 0.8rem;
      }
    }
  }
  @media (--phone-height-landscape) {
    .why-we-ask-container {
      width: 100%;
    }
  }
  @media (--tablet-portrait) {
    .why-we-ask-container {
      width: 90%;
    }
  }
  </style>
  