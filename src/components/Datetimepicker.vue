
<template>
    <div class="input-group">
        <input type="text" :id="'date_time_' + id" class="form-control" autocomplete="off" :disabled="disabled" :name="name">
        <div class="input-group-addon"><i :class="options.icons.date"></i>
        </div>
    </div>
</template>
<script>
import datetimeMixin from './../mixins/Datetimepicker'
/* eslint-disable no-undef */
export default {
  name: 'datetimepicker',
  props: ['dataOptions', 'disabled', 'name'],
  mixins: [ datetimeMixin ],
  data () {
    return { options: this.getOptions() }
  },
  mounted () {
    this.initDatetimepicker()
    this.unwatch = this.$watch('dataOptions', function (data) {
      this.options = this.getOptions()
      this.destroyDatetimepicker()
      this.initDatetimepicker()
    }, { deep: true })
  },
  destroyed: function () {
    this.destroyDatetimepicker()
  }
}
</script>
