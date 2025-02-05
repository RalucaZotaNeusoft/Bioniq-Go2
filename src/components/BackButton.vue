<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const goNext = () => {
    console.log(route.name);
    switch (route.name) {
        case 'section-intro':
            router.push('question-radio');
            break;
        case 'question-radio':
            router.push('question-checkbox');
            break;
        case 'question-checkbox':
            router.push('question-boolean');
            break;
        case 'question-boolean':
            router.push('section-intro');
            break;
        default:
            break;
    }
};

const navigate = (to: "BACK" | "FORWARD") => {
    if (to === "BACK") {
        console.log('back');
        goBack()
    }
    else {
        console.log('forward');
        goNext();
    }
};

function goBack() {
    return router.back();
}
</script>
<template>
    <button class="continue" @click="() => navigate('BACK')">BACK</button>
</template>
<style>
.continue {
    display: block;
    margin: 0 auto;
}
</style>