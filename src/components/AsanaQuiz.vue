<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 px-3">

    <div class="bg-white shadow-xl rounded-3xl w-full max-w-2xl md:max-w-3xl p-5 md:p-8 flex flex-col justify-between relative">

      <h1 class="text-2xl md:text-3xl font-bold text-center text-pink-600 mb-5">
        გამოიცანი ასანის სახელი 🧘‍♀️
      </h1>

      <!-- Progress bar -->
      <div class="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div
          class="bg-pink-500 h-3 rounded-full transition-all duration-500"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>

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
            v-for="(opt, i) in getOptions(current)"
            :key="i"
            class="p-3 min-h-[56px] rounded-xl border text-gray-800 font-medium transition-all duration-200 hover:bg-pink-50 text-sm md:text-base flex justify-between items-center"
            :class="buttonClass(opt)"
            @click="selectAnswer(opt)"
            :disabled="answered"
          >
            <span class="truncate">{{ opt }}</span>
            <!-- ფიქსირებული სივრცე სიმბოლოსთვის (რომ არ დაარღვიოს layout) -->
            <span v-if="answered" class="w-6 text-center">
              <span v-if="opt === current.answer" class="bg-green-600">✔️</span>
              <span v-else-if="opt === selected && selected !== current.answer" class="bg-red-600">✖️</span>
            </span>
          </button>
        </div>

        <!-- (არ ვამატებთ 'შემდეგი' ღილაკს — ავტომატურად გადადის MuscleQuiz-ივით) -->
      </div>

      <div v-else class="text-center p-6">
        <h2 class="text-2xl font-bold text-pink-600 mb-2">🎉 დასრულდა!</h2>
        <p class="text-gray-700 mb-4">
          შენი ქულა: <strong>{{ score }}</strong> / {{ questions.length }}
        </p>
        
        <button
          @click="restart"
          class="px-6 mx-2 py-2 bg-pink-200 hover:bg-pink-300 text-pink-800 rounded-full shadow-md transition-all mb-4"
        >
          თავიდან
        </button>

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
const goHome = () => router.push('/')

// შენი არსებული შეკითხვები (ფაილები/public/asanas/... უნდა არსებობდეს)
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

// სრული სახელების სია — გამოიყენება შემთხვევითი რჩევებისთვის
const optionsList = questions.value.map(q => q.answer)

const currentIndex = ref(0)
const score = ref(0)
const answered = ref(false)
const selected = ref(null)

// აქ current და finished
const current = computed(() => questions.value[currentIndex.value])
const finished = computed(() => currentIndex.value >= questions.value.length)
const isCorrect = computed(() => answered.value && selected.value === current.value.answer)

// progress bar %
const progressPercent = computed(() => ((currentIndex.value) / questions.value.length) * 100)

// --- make stable per-question shuffled options (like MuscleQuiz did) ---
function getOptions(q) {
  if (!q) return []
  if (!q._options) {
    // შექმენით ფულის პულა: ყველაფერთან ერთად ერთი სწორი და 3 სხვა
    const opts = [q.answer]
    const pool = optionsList.filter(p => p !== q.answer)
    // ჩანაწერებით ავარჩიოთ 3 შემთხვევითი (თუ საკმარისი არაა - მოდგება ნაკლები)
    while (opts.length < 4 && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length)
      opts.push(pool.splice(idx, 1)[0])
    }
    // შეანჯღრიეთ ოდენობით სტაბილურად და შეინახეთ
    q._options = opts.sort(() => Math.random() - 0.5)
  }
  return q._options
}

// მომხმარებლის არჩევა (MuscleQuiz სტილი): პირველი არჩევისას აჩვენებს ფერებს და 700ms-ში გადადის შემდეგ კითხვაზე
function selectAnswer(option) {
  if (answered.value) return
  selected.value = option
  answered.value = true
  if (option === current.value.answer) score.value++

  // auto-advance after 700ms (MuscleQuiz behaviour)
  setTimeout(() => {
    // თუ ბოლოა, მივიყვანთ finished state
    if (currentIndex.value < questions.value.length - 1) {
      currentIndex.value++
      answered.value = false
      selected.value = null
    } else {
      // მარკირება, რომ დასრულდა (currentIndex >= length triggers finished)
      currentIndex.value = questions.value.length
    }
  }, 700)
}

function nextQuestion() {
  // fallback — არ გამოიყენება ძირითადად (auto-advance handles it),
  // თუმცა ვაქვს იმპორტისთვის თუ გინდა ხელით წანიშნვა
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++
    answered.value = false
    selected.value = null
  } else {
    currentIndex.value = questions.value.length
  }
}

function restart() {
  // წაშლა ნებისმიერი _options რათა კვლავ შერეული შეიქმნას თავიდან
  questions.value.forEach(q => { delete q._options })
  currentIndex.value = 0
  score.value = 0
  answered.value = false
  selected.value = null
}

function buttonClass(opt) {
  if (!answered.value) return ''
  if (opt === current.value.answer) return 'bg-green-400 border-green-400 text-green-800'
  if (opt === selected.value && selected.value !== current.value.answer) return 'bg-red-400 border-red-400 text-red-800'
  return 'opacity-80'
}
</script>
