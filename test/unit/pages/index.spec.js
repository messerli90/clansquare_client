import { shallowMount } from '@vue/test-utils'
import Index from '@/pages'

describe('Index Page', () => {
  test('It has a title at the beginning of the page', () => {
    const wrapper = shallowMount(Index)
    expect(wrapper.text()).toContain('clansquare')
  })
})
