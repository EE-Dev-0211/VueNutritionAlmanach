<script>
export default {
  data() {
    return {
      myArray: [],
      userInput: "",
      stringedArray: "",
      userSeparation: "",
      userSearchItem: "",
      elementIndex: -1,
      searchResults: [],
      caseSensitiveSearch: false,
    };
  },
  methods: {
    addItem() {
      if (this.userInput.trim() !== "") {
        this.myArray.push(this.userInput);
        this.userInput = "";
      }
    },
    clearArray() {
      this.myArray = [];
    },
    fillArray() {
      this.myArray = [1, 2, 3, 4, 5, "Eric", "eric", "ERIC"];
    },
    eraseLastEntry() {
      if (this.myArray.length > 0) {
        this.myArray.pop();
      }
    },
    shuffleArray() {
      for (let i = this.myArray.length - 1; i > 0; i--) {
        //random selection of range 0 - (i+1)
        const j = Math.floor(Math.random() * (i + 1));

        [this.myArray[i], this.myArray[j]] = [this.myArray[j], this.myArray[i]];
      }
    },
    stringify() {
      this.stringedArray = this.myArray.join(this.userSeparation);
    },
    search() {
      //decl & initialize local searchstring
      const searchString = this.caseSensitiveSearch
        ? this.userSearchItem.trim()
        : this.userSearchItem.trim().toLowerCase();

      // initialize SearchResults-array via reduce() with empty array (accArray)
      //iteration for each element via reduce()
      this.searchResults = this.myArray.reduce(
        (AccArray, item, index) => {
          //decl & initialize local comparestring; case sensitivity?
          const compareString = this.caseSensitiveSearch
            ? item.toString()
            : item.toString().toLowerCase();

          //comparison + push if same
          if (compareString === searchString) {
            AccArray.push(index);
          }
          //AccArray = SearchResults-Array
          return AccArray;
        },
        //initial value of AccArray
        [],
      );
    },
  },
};
</script>

<template>
  <div>
    <h2>Array Contents:</h2>
    {{ myArray }}
    <ul>
      <li v-for="(item, index) in myArray" :key="index">"{{ item }}"</li>
    </ul>
    <br /><br />
    <button style="background-color: #4caf50" @click="fillArray">
      Fill Array
    </button>
    <br /><br />
    <input
      v-model="userInput"
      placeholder="Add Content to Array"
      @keyup.enter="addItem"
    />
    <button @click="addItem">Add</button>
    <button @click="clearArray">Clear Array</button>

    <button @click="eraseLastEntry">Erase Last Entry</button>
    <button @click="shuffleArray">Shuffle Array</button>
    <br /><br />
    <input
      v-model="userSeparation"
      placeholder="Make a String with User Separations"
      @keyup.enter="stringify"
    />
    {{ stringedArray }}

    <br /><br />

    <input
      v-model="userSearchItem"
      placeholder="Search for an item"
      @keyup.enter="search"
    />
    <label for="caseSensitiveSwitch">Case Sensitive?</label>
    <input
      id="caseSensitiveSwitch"
      v-model="caseSensitiveSearch"
      type="checkbox"
    />
    <br />
    {{
      searchResults.length > 0
        ? searchResults.length !== 1
          ? `Item found at indices: ${searchResults.join(", ")}`
          : `Item found at index: ${searchResults.join(", ")}`
        : "Item not found"
    }}
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  font-size: 0.7rem;
  margin-top: 0.5rem;
}
</style>
