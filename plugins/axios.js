export default function({ $axios, store }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 422) {
      store.dispatch('validation/setErrors', error.response.data.errors)
    }

    return Promise.reject(error)
  })

  $axios.onRequest(() => {
    store.dispatch('validation/clearErrors')
  })
}
