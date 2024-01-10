<script>
import {computed, onMounted, onUnmounted, reactive, ref} from 'vue';

export default {
  setup() {
    const count = ref(0);
    const inputText = ref("");
    const mixedText = ref("");

    const myObject = reactive({
      nested: reactive({ count: 0 }),
      arr: ref(['foo', 'bar'])
    });

    const author = reactive({
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    })

    // a computed ref
    const publishedBooksMessage = computed(() => {
      return author.books.length > 0 ? 'Yes' : 'No'
    })

    onMounted(() => {
      console.log("Composition API Component mounted");
      mutateObject();
    });


    onUnmounted(() => {
      console.log("Composition API Component unmounted");
    });


/*    function mutateDeeply() {
      myObject.nested = { ...myObject.nested, count: myObject.nested.count + 1 };
      myObject.arr = [...myObject.arr, 'baz'];
    }*/
    function mutateObject() {
      console.log("Mutate deeply composition called");
      myObject.nested.count++;
      myObject.arr.push('baz');
    }

    function increase() {
      count.value++;
    }

    function decrease() {
      count.value--;
    }

    function mixLetters() {
      mixedText.value = shuffleLetters(inputText.value);
    }

    function shuffleLetters(text) {
      return text.split('').sort(() => Math.random() - 0.5).join('');
    }
/*return Data and Functions to use in the template*/
    return { count, inputText, mixedText, increase, decrease, mixLetters, myObject, mutateObject, author, publishedBooksMessage };
  },
};
</script>



<template>
  <div>
    <h2>Composition API Component</h2>
    Advantages of Composition API:

    <p>Improved organization and readability, especially for complex components.</p>
      <p> Encourages better code reuse through composable functions.</p>
        <p>More flexibility in code organization, making it easier to understand and maintain.</p>
<br><br>

    <button @click="mutateObject">Mutate Object</button>
    <p>myObject.nested.count: {{ myObject.nested.count }}</p>
    <p>myObject.arr: {{ myObject.arr }}</p>
    <br><br>

    <p>(ternary for object props) <br>Has published books:</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
    <br><br>

    <p>(computed ternary for complexer logic w object props ) <br>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <br><br>

    <p>Count: <span :style="{ color: 'red', fontWeight: 'bold' }">{{ count }}</span></p>
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
    <br><br>

    <input v-model="inputText" />
    <button @click="mixLetters">Mix Letters</button>

    <p>Mixed Letters: <span :style="{ color: 'red', fontWeight: 'bold' }">{{ mixedText }}</span></p>
  </div>
</template>

