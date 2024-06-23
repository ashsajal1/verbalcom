<template>
    <div v-if="feedback !== 'Quiz Finished!'">
        <h1 class="font-bold text-3xl g-text text-center mb-4">Quiz Page</h1>
        <div>
            Cannot answer well? <RouterLink class="text-primary p-2 hover:bg-primary hover:text-slate-100 rounded" to="/vocabulary">Click & practice vocabulary!</RouterLink>
        </div>
        <div class="md:px-72" v-if="currentQuestion">
            <div
                class="text-2xl font-bold py-2 flex items-center justify-between border-b dark:border-b-gray-800 mb-4 pb-2">
                <span>{{ currentQuestion.question
                    }}</span>
                <Button variant="ghost">
                    <Volume1 @click="speakSentence(currentQuestion.question)" />
                </Button>
            </div>
            <div class="flex flex-col gap-2" v-for="(option, index) in currentQuestion.options" :key="index">
                <Button variant="outline" class="mt-2" @click="checkAnswer(option)">{{ option }}</Button>
            </div>
            <p class="border rounded p-4 my-3 flex items-center gap-2" v-if="feedback"
                :class="{ 'bg-green-200 text-green-800': feedback === 'Correct!', 'bg-red-200 text-red-800': feedback.startsWith('Wrong!') }">
                <Check v-if="feedback === 'Correct!'" />
                <X v-if="feedback.startsWith('Wrong!')" />
                {{ feedback }}
            </p>
            <Button class="w-full" v-if="feedback" @click="nextQuestion">Next Question</Button>

            <div class="p-2 mt-4" v-motion-pop v-if="currentQuestion.explanation">
                <span class="g-text font-bold">Explanaiton : </span>
                {{ currentQuestion.explanation }}
            </div>
            <div class="p-2 mt-1" v-motion-pop v-if="currentQuestion.exampleUsage">
                <span class="g-text font-bold">Example Sentence : </span>
                {{ currentQuestion.exampleUsage }}
            </div>
        </div>
    </div>

    <div class="flex gap-2 flex-col" v-if="feedback === 'Quiz Finished!'">
        <h1 class="w-full text-center font-light mb-4 text-3xl">Quiz finished!</h1>
        <div class="flex flex-col md:flex-row gap-2 w-full">
            <RouterLink class="w-full" to='/'>
                <Button variant="outline" class="w-full">Home</Button>
            </RouterLink>
            <RouterLink class="w-full" to='/'>
                <Button class="w-full">Restart</Button>
            </RouterLink>
        </div>
    </div>

    
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { vocabulary } from '@/lib/vocabulary';
import type { Vocabulary } from '@/lib/vocabulary/types';
import Button from '@/components/Button.vue';
import { Check, X, Volume1 } from 'lucide-vue-next';
import { useSpeechSynthesis } from '@vueuse/core';

const speakSentence = (word: string) => {
    const {
        isSupported,
        speak,
    } = useSpeechSynthesis(word)

    if (!isSupported) {
        alert("Speech Synthesis is not supported in your browser!")
    }

    speak()
}

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
        explanation: word.explanation,
        exampleUsage: word.example,
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
