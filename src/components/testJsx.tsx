
import {  defineComponent, toRefs } from 'vue'



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

  setup (props, { attrs,slots,emit,expose}) {

    const { msg } = toRefs(props)
    // const msg = toRef(attrs,'msg')
    return () => (
      <>
        <p>{msg.value}</p>
      </>
    )
  },

})
export { Bar }