<script>
export default {
/*  data: Properties and their initial values are defined in the data function.*/
  data() {
    return {
      count: 0,
      inputText: "",
      mixedText: "",
      myObject: {
        nested: { count: 0 },
        arr: ['foo', 'bar'],
      },
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
    };
  },
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  },
  /*methods: Functions that perform actions are defined in the methods object.*/
  methods: {
    mutateObject() {
      console.log("Mutate deeply options called");
      this.myObject.nested.count++;
      this.myObject.arr.push('baz');
    },
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
    mixLetters() {
      this.mixedText = this.shuffleLetters(this.inputText);
    },
    shuffleLetters(text) {
      return text.split('').sort(() => Math.random() - 0.5).join('');
    },
  },
/*  Lifecycle hooks (e.g., created, mounted) can be added directly to the options object.*/
  created() {
    console.log("Options API Component created");
  },
  mounted() {
    console.log("Options API Component mounted");
    this.mutateObject();
  },
  destroyed() {
    console.log("Options API Component destroyed");
  },
};
</script>


<template>
  <div>
    <h2>Options API Component</h2>
    Advantages of Options API:

    <p>Familiarity for developers used to the traditional Vue 2.x syntax.</p>
    <p>Simplicity for smaller components or projects.</p>
    <p>Seamless integration with existing Vue 2.x codebases.</p>
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


<style scoped>
div {
  background-color: #2c3e50;
}
</style>