import Vue from 'vue'
import Footer from 'src/components/Footer.vue'

describe('Footer.vue', () => {
  it('should have dataOptions prop', () => {
    expect(Footer.props)
      .to.contains('dataOptions')
  })
  it('should render', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Footer)
    })
    expect(vm.$el.querySelectorAll('.footer-content').length)
      .to.not.equal(0)
  })
})
