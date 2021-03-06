/* eslint-disable no-undef */
function getOptions (translationMessages) {
  this.id = this._uid
  this.translations = translationMessages.translations[getDefaultLang.call(this)]
  return Object.assign({}, {
    placeholder_text_multiple: this.translations.chosen.multipleText,
    placeholder_text_single: this.translations.chosen.singleText,
    no_results_text: this.translations.chosen.noResult,
    allow_single_deselect: true
  }, this.dataOptions)
}

function initChosen () {
  $('#chosen_' + this.id).chosen(this.options)
}

function updateChosen () {
  let self = this
  setTimeout(function () {
    $('#chosen_' + self.id).trigger('chosen:updated')
  }, 0)
}

function destroyChosen () {
  try {
    $('#chosen_' + this.id).chosen('destroy')
    this.unwatch()
  } catch (ex) {}
}

function getDefaultLang () {
  if (this.$store.state.config && this.$store.state.config.locale) {
    return this.$store.state.config.locale.key
  }
  return 'en_GB'
}

export default {
  methods: {
    getOptions: getOptions,
    getDefaultLang: getDefaultLang,
    initChosen: initChosen,
    destroyChosen: destroyChosen,
    updateChosen: updateChosen
  }
}
