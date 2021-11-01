import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../../src/lib/ServerConfiguration.vue';

describe('ServerConfiguration.vue', () => {
  it('renders welcome message', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).toMatch(
      'Server Configuration'
    );
  });
});
