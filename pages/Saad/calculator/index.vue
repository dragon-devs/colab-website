<template>
  <div class="flex justify-center">
    <div class="calculator">
      <header>
        <div class="font-bold text-2xl font-sans">Result</div>
        <div
          class="bg-slate-600 text-white p-2 my-1 rounded-md text-xl font-sans"
        >
          {{ resultValue }}
        </div>
        <div class="font-bold text-2xl font-sans">Input</div>
        <div
          class="bg-slate-600 text-white p-2 mt-1 rounded-md text-xl font-sans"
        >
          {{ inputValue }}
        </div>
      </header>
      <section class="gap flex-col relative">
        <ul class="gap">
          <li class="rbtn" @click="clear">C</li>
          <li class="rbtn" @click="deleteChar">></li>
          <li class="sbtn" @click="append('%')">%</li>
          <li class="sbtn" @click="append('/')">/</li>
        </ul>
        <ul class="gap">
          <li class="nbtn" @click="append('7')">7</li>
          <li class="nbtn" @click="append('8')">8</li>
          <li class="nbtn" @click="append('9')">9</li>
          <li class="sbtn" @click="append('*')">x</li>
        </ul>
        <ul class="gap">
          <li class="nbtn" @click="append('4')">4</li>
          <li class="nbtn" @click="append('5')">5</li>
          <li class="nbtn" @click="append('6')">6</li>
          <li class="sbtn" @click="append('-')">-</li>
        </ul>
        <ul class="gap">
          <li class="nbtn" @click="append('1')">1</li>
          <li class="nbtn" @click="append('2')">2</li>
          <li class="nbtn" @click="append('3')">3</li>
          <li class="sbtn" @click="append('+')">+</li>
        </ul>
        <ul class="gap">
          <li class="nbtn" @click="append('0')">0</li>
          <li class="nbtn" @click="append('.')">.</li>
          <li class="nbtn" @click="append('00')">00</li>
          <li class="ybtn" @click="calculate">=</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const input = ref("");
const result = ref("");

const inputValue = computed(() =>
  input.value.length === 0 ? "0" : input.value
);

const resultValue = computed(() =>
  result.value.length === 0 ? "0" : result.value
);
const append = (char: string): void => {
  input.value += char;
};
const clear = () => {
  input.value = "";
  result.value = "";
};
const deleteChar = () => {
  input.value = input.value.slice(0, -1);
};
const calculate = () => {
  try {
    result.value = String(eval(input.value));
  } catch (error) {
    result.value = "Error";
  }
};
</script>

<style scoped>
.calculator {
  @apply flex flex-col gap-5 my-5 p-4 rounded-xl shadow-2xl bg-slate-400 shadow-slate-900;
}

.btn {
  @apply flex justify-center items-center rounded-md w-12 h-12 text-2xl cursor-pointer hover:bg-opacity-70 transition-all duration-300;
}

.sbtn {
  @apply bg-slate-900 text-white btn shadow-lg shadow-black/30;
}

.nbtn {
  @apply bg-slate-200 text-black btn shadow-lg shadow-black/30;
}

.ybtn {
  @apply bg-amber-400 text-black btn shadow-lg shadow-amber-400/30;
}

.rbtn {
  @apply bg-rose-600 text-white btn shadow-lg shadow-rose-600/30;
}

.gap {
  @apply flex gap-4;
}
</style>
