import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  props: {
    message: String,
  },
  setup(props, ctx) {
    const internalInstance = getCurrentInstance()
    console.log('internalInstance::', internalInstance)
    console.log(ctx)
    return () => <div>{props.message}</div>
  },
})
