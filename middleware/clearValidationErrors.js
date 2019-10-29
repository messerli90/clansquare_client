export default function({ store }) {
  const errorsEmpty =
    Object.entries(store.state.validation.errors).length === 0 &&
    store.state.validation.errors.constructor === Object
  if (!errorsEmpty) {
    store.dispatch('validation/clearErrors')
  }
}
