
import { defineComponent, toRefs, renderList, h } from 'vue'



const Bar = defineComponent({
  name: 'testSlots',
  props: {
    list: {
      type: Object
    },

    msg: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },

  render () {
    return h('h1', 'test! setup()')
  },

  setup (props, { attrs, slots, emit, expose }) {


    const testList = renderList([1, 2, 3, 4, 5, 6], item => h(`h${item}`, item))
    // const { msg, list } = toRefs(props)


    const list2 = h("p", "this is a slot msg  from parent")

    // const msg = toRef(attrs,'msg')
    return () => (
      //   优先级 比 render 高
      //   优先级 比 render 高
      //   优先级 比 render 高
      <>
        {/* <p>{msg.value}</p> */}
        {/* {(slots as InternalSlots).header()} */}
        {/* {slots.header()} */}
        {/* <p innerHTML={msg.value + 'ccccc'}></p> */}
        <div> {testList} </div>
        {/* TODO */}
        {/* 不能用  toRefs   */}
        {/* 不能用  toRefs   */}
        {/* 不能用  toRefs   */}
        <div> list  {props.list} </div>
        <div> list2 {list2} </div>
      </>
    )
  },

})
export { Bar }