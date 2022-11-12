<template>
  <a-layout>
    <a-layout>
      <a-layout-content>
        <VuePdfEmbed></VuePdfEmbed>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Antd from 'ant-design-vue'
import XLSX from 'xlsx'
import { jsPDF as JSPDF } from 'jspdf'
import moment from 'moment-timezone'
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed.js'
import { Button, Icon, Modal, Popover, Select, Timeline } from 'ant-design-vue'
import cytoscape from 'cytoscape'
import mathjs from 'mathjs/lib/browser/math.js'

export default {
  name: 'App',
  components: {
    VuePdfEmbed,
    Button, Icon, Modal, Popover, Select, Timeline
  },
  data () {
    return {
      Antd,
      XLSX,
      moment,
      JSPDF,
      cytoscape,
      mathjs,
    }
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style lang="less">
@import '~ant-design-vue/dist/antd.less';

</style>
