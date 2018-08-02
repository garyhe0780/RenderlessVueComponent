<template>
  <div id="app">
    <toggle>
      <div slot-scope="{ on, setOn, setOff, toggle }" class="container">
        <button @click="click(setOn)" class="button">Blue pill</button>
        <button @click="click(setOff)" class="button isRed">Red pill</button>
        <button @click="click(toggle)" class="button isYellow">Yellow pill</button>
        <div v-if="buttonPressed" class="message">
          <span v-if="on">It's all a dream, go back to sleep.</span>
          <span v-else>I don't know how far the rabbit hole goes, I'm not a rabbit, neither do I measure holes.</span>
        </div>
      </div>
    </toggle>
  </div>
</template>

<script>
import toggle from './components/toggle.js';


export default {
  name: 'App',
  components: { toggle },
  data: () => ({
    buttonPressed: false
  }),
  methods: {
    click (fn) {
      this.buttonPressed = true;
      fn();
    }
  }
}
</script>
<style>
body {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
}

.container {
    position: relative;
}

.button {
    border: none;
    padding: 1rem 2rem;
    border-radius: 2rem;
    cursor: pointer;
    background: blue;
    color: white;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
  'Segoe UI Symbol';
    font-weight: bold;
    outline: none;
    box-shadow: 0 4px 2px 1px rgba(slategray, .2);
}

.button.isRed {
  background: red;
}
.button.isYellow {
  background-color: #e7cb21;
}

.message {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-size: 1.25rem;
}
</style>
