
import { defineComponent, toRefs, renderList, h } from 'vue'



const Bar = defineComponent({
  name: 'testSlots',
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

  setup (props, { attrs, slots, emit, expose }) {

    const list = renderList([1, 2, 3, 4, 5, 6], item => h(`h${item}`, item))
    const { msg } = toRefs(props)
    // const msg = toRef(attrs,'msg')
    return () => (
      <>
        <p>{msg.value}</p>
        {/* {(slots as InternalSlots).header()} */}
        {/* {slots.header()} */}
        <p innerHTML={msg.value + 'ccccc'}></p>
        <div> {list} </div>
      </>
    )
  },

})
export { Bar }