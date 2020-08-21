import Vue from 'vue'
// 为代码文本提供高亮、缩进
import VueHighlightJS from 'vue-highlightjs'
// 为代码文本格式化
import pretty from 'pretty'
import { Drag, Drop } from 'vue-drag-drop'

Vue.component('ZvDrag', Drag)
Vue.component('ZvDrop', Drop)

Vue.use(VueHighlightJS)
Vue.prototype.$prettyDom = pretty
