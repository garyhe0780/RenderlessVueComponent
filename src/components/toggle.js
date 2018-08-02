const toggle = {
  props: {
    on: { type: Boolean, default: false }
  },
  render() {
    return this.$scopedSlots.default({
      on: this.currentState,
      setOn: this.setOn,
      setOff: this.setOff,
      toggle: this.toggle,
    })
  },
  data: () => ({ currentState: this.on }),
  methods: {
    setOn() {
      this.currentState = true
    },
    setOff() {
      this.currentState = false
    },
    toggle() {
      this.currentState = !this.currentState
    }
  }
}

export default toggle;