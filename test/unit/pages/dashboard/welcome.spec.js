import { shallowMount } from '@vue/test-utils'
import Welcome from '@/pages/dashboard'

describe('Onboarding', () => {
  test('it displays welcome text', () => {
    const wrapper = shallowMount(Welcome)
    expect(wrapper.text()).toContain('welcome')
  })
})
