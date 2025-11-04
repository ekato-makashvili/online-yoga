<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100 py-4 px-3">
    <div class="bg-white shadow-xl rounded-3xl w-full max-w-2xl md:max-w-3xl p-5 md:p-8 flex flex-col justify-between relative">

      <h1 class="text-2xl md:text-3xl font-bold text-center text-pink-600 mb-5">
        გამოიცანი ასანის სახელი 🧘‍♀️
      </h1>

      <div v-if="!finished" class="flex flex-col justify-between flex-1">
        <div class="flex justify-between text-gray-700 text-sm md:text-base mb-4">
          <span>კითხვა {{ currentIndex + 1 }} / {{ questions.length }}</span>
          <span>ქულა: <strong>{{ score }}</strong></span>
        </div>

        <div class="flex justify-center mb-5">
          <img
            :src="current.image"
            alt="asana photo"
            class="w-full max-h-[55vh] object-contain rounded-2xl border border-pink-200 shadow-md"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            v-for="(opt, i) in shuffledOptions(current)"
            :key="i"
            class="p-3 rounded-xl border text-gray-800 font-medium transition-all duration-200 hover:bg-pink-50 text-sm md:text-base"
            :class="buttonClass(opt)"
            @click="selectAnswer(opt)"
            :disabled="answered"
          >
            {{ opt }}
          </button>
        </div>

        <div v-if="answered" class="mt-4 text-center text-base md:text-lg font-semibold">
          <span v-if="isCorrect" class="text-green-600">✔ სწორია</span>
          <span v-else class="text-red-500">✖ არასწორია — სწორია: {{ current.answer }}</span>
        </div>
      </div>

      <div v-else class="text-center p-6">
        <h2 class="text-2xl font-bold text-pink-600 mb-2">🎉 დასრულდა!</h2>
        <p class="text-gray-700 mb-4">შენი ქულა: <strong>{{ score }}</strong> / {{ questions.length }}</p>
        
        <button
          @click="restart"
          class="px-6 mx-2 py-2 bg-pink-200 hover:bg-pink-300 text-pink-800 rounded-full shadow-md transition-all mb-4"
        >
          თავიდან
        </button>

        <!-- დასრულების შემდეგ დაბრუნება მთავარ გვერდზე -->
        <button
          @click="goHome"
          class="px-6 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-full shadow-md transition-all"
        >
          ← მთავარი გვერდზე დაბრუნება
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/') // დაბრუნება მთავარ გვერდზე
}

const questions = ref([
  { image: '/asanas/asana1.PNG', answer: 'პადანგუშტასანა' },
  { image: '/asanas/asana2.JPG', answer: 'პადაჰასტასანა' },
  { image: '/asanas/asana3.PNG', answer: 'უტჰიტა ტრიკონასანა' },
  { image: '/asanas/asana4.PNG', answer: 'პარივრიტა ტრიკონასანა' },
  { image: '/asanas/asana5.PNG', answer: 'უტჰიტა პარშვაკონასანა' },
  { image: '/asanas/asana6.PNG', answer: 'პარივრიტა პარშვაკონასანა' },
  { image: '/asanas/asana7.PNG', answer: 'პრასარიტა პადოტანასანა 1' },
  { image: '/asanas/asana8.PNG', answer: 'პრასარიტა პადოტანასანა 2' },
  { image: '/asanas/asana9.PNG', answer: 'პრასარიტა პადოტანასანა 3' },
  { image: '/asanas/asana10.PNG', answer: 'პრასარიტა პადოტანასანა 4' },
  { image: '/asanas/asana11.PNG', answer: 'პარშვოტანასანა' },
  { image: '/asanas/asana12.PNG', answer: 'უტჰიტა ჰასტა პადანგუშტასანა 1' },
  { image: '/asanas/asana13.PNG', answer: 'უტჰიტა ჰასტა პადანგუშტასანა 2' },
  { image: '/asanas/asana14.PNG', answer: 'უტჰიტა ჰასტა პადანგუშტასანა 3' },
  { image: '/asanas/asana15.JPG', answer: 'არდჰა ბადჰა პადმოტანასანა' },
  { image: '/asanas/asana16.JPG', answer: 'უტკატანასანა' },
  { image: '/asanas/asana17.JPG', answer: 'ვირაბჰადრასანა I' },
  { image: '/asanas/asana18.JPG', answer: 'ვირაბჰადრასანა II' }
])

const optionsList = questions.value.map(q => q.answer)

const currentIndex = ref(0)
const score = ref(0)
const answered = ref(false)
const selected = ref(null)

const current = computed(() => questions.value[currentIndex.value])
const finished = computed(() => currentIndex.value >= questions.value.length)
const isCorrect = computed(() => answered.value && selected.value === current.value.answer)

function shuffledOptions(q) {
  const opts = [q.answer]
  while (opts.length < 4) {
    const rand = optionsList[Math.floor(Math.random() * optionsList.length)]
    if (!opts.includes(rand)) opts.push(rand)
  }
  return opts.sort(() => Math.random() - 0.5)
}

function selectAnswer(option) {
  if (answered.value) return
  selected.value = option
  answered.value = true
  if (option === current.value.answer) score.value++

  // ავტომატური გადასვლა შემდეგ შეკითხვაზე 0.7 წამში
  setTimeout(() => {
    nextQuestion()
  }, 700)
}

function nextQuestion() {
  currentIndex.value++
  answered.value = false
  selected.value = null
}

function restart() {
  currentIndex.value = 0
  score.value = 0
  answered.value = false
  selected.value = null
}

function buttonClass(opt) {
  if (!answered.value) return ''
  if (opt === current.value.answer) return 'bg-green-100 border-green-400 text-green-800'
  if (opt === selected.value && selected.value !== current.value.answer) return 'bg-red-100 border-red-400 text-red-800'
  return ''
}
</script>
