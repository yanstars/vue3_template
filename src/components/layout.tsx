import { defineComponent, InternalSlots  } from "vue"

export default defineComponent({
  name: 'baseLayout',
  setup (props, { slots }) {
    return () => (
      <>
        <div class="layout">
          {
            ['header', 'content', 'footer'].filter(item => slots[item]).map(item =>
              <section class={item}> {(slots as InternalSlots)[item]()} </section>
            )
          }
        </div>
      </>
    )
  },
})