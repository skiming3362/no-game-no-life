import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import LandingPage from '@/components/LandingPage'

describe('LandingPage.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      router,
      store,
      render: h => h(LandingPage)
    }).$mount()

    expect(vm.$el.querySelector('.title').textContent).to.contain('Welcome to your new project!')
    expect(vm.$store.state.Counter.main).to.equal(0)
  })
})
