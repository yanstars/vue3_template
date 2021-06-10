
import { defineComponent, defineProps, toRef, toRefs } from 'vue'



const Bar = defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },

  setup (props, { attrs, slots, emit }) {

    const { msg } = toRefs(attrs)
    return {
      msg
    }
  },

  render () {
    return <div> {this.msg}</div>
  }
})
export { Bar }