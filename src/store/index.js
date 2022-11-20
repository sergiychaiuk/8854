import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      id: 1,
      name: 'Eva Jonson',
      position: 'Sales Manager',
      offer: 'I will find the best offers for you. My services are absolutely free.',
      photo: 'assets/unsplash_O3ymvT7Wf9U.png',
      services: [
        { id: 1, title: 'Manual tour booking', number: 11 },
        { id: 2, title: 'Package tours', number: 3 },
        { id: 3, title: 'Hotels', number: 1 }
      ],
      likes: 131,
      reviews: [
        {
          id: 1,
          name: 'Ronald Harris',
          content:
            'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?',
          date: '8 Apr 2022'
        },
        {
          id: 2,
          name: 'Angela Deimon',
          content:
            'Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.',
          date: '10 Apr 2022'
        },
        {
          id: 3,
          name: 'Samuel Jackson',
          content: "Hey Eva! You're cool. Nice pic!",
          date: '13 Apr 2022'
        }
      ]
    }
  },
  getters: {},
  mutations: {
    setReview: (state, review) => {
      let tempReview = Object.assign({}, review)
      tempReview.id = state.user.reviews.slice(-1)[0].id + 1
      state.user.reviews.push(tempReview)
    }
  },
  actions: {
    createReview({ commit }, review) {
      commit('setReview', review)
    }
  },
  modules: {}
})
