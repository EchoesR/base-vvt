import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    message: String
  },
  setup(props) {
    return () => {
      return (
        <div>{ props.message }</div>
      )
    }
  }
})