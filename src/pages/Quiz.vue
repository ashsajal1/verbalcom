<template>
    <h1 class="font-bold text-3xl g-text text-center mb-4">Quiz Page</h1>
    <div class="md:px-72" v-if="currentQuestion">
        <p class="text-2xl font-bold py-2">{{ currentQuestion.question }}</p>
        <div class="flex flex-col gap-2" v-for="(option, index) in currentQuestion.options" :key="index">
            <Button variant="outline" class="mt-2" @click="checkAnswer(option)">{{ option }}</Button>
        </div>
        <p class="border rounded p-4 my-3 flex items-center gap-2" v-if="feedback"
            :class="{ 'bg-green-200 text-green-800': feedback === 'Correct!', 'bg-red-200 text-red-800': feedback.startsWith('Wrong!') }">
            {{ feedback }}
        </p>
        <Button class="w-full" v-if="feedback" @click="nextQuestion">Next Question</Button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { vocabulary } from '@/lib/vocabulary';
import type { Vocabulary } from '@/lib/vocabulary/types';
import Button from '@/components/Button.vue';
import { CircleAlert } from 'lucide-vue-next'

const currentQuestionIndex = ref(0);
const currentQuestion = ref<any>(null);
const feedback = ref<string>('');

const generateRandomOptions = (correctAnswer: string, vocabulary: Vocabulary[]): string[] => {
    const incorrectOptions = vocabulary
        .filter(word => word.bn !== correctAnswer)
        .map(word => word.bn);

    const options = [correctAnswer, ...getRandomElements(incorrectOptions, 3)];
    return shuffleArray(options);
};

const getRandomElements = (array: string[], count: number): string[] => {
    const shuffled = array.slice(0);
    let i = array.length;
    const min = i - count;
    let temp;
    let index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
};

const shuffleArray = (array: string[]): string[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const generateQuestions = () => {
    return vocabulary.map(word => ({
        question: `What is the meaning of ${word.en}?`,
        answer: word.bn,
        options: generateRandomOptions(word.bn, vocabulary)
    }));
};

const questions = ref(generateQuestions());

const loadQuestion = () => {
    currentQuestion.value = questions.value[currentQuestionIndex.value];
};

const checkAnswer = (selectedOption: string) => {
    if (selectedOption === currentQuestion.value.answer) {
        feedback.value = 'Correct!';
    } else {
        feedback.value = `Wrong! The correct answer is ${currentQuestion.value.answer}.`;
    }
};

const nextQuestion = () => {
    feedback.value = '';
    if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++;
        loadQuestion();
    } else {
        feedback.value = 'Quiz Finished!';
    }
};

loadQuestion();
</script>
