(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{504:function(t,o,n){"use strict";n.r(o);var c=n(42),e=Object(c.a)({},(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"说说-countdownlatch-原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#说说-countdownlatch-原理"}},[t._v("#")]),t._v(" 说说 CountDownLatch 原理")]),t._v(" "),n("p",[n("code",[t._v("CountDownLatch")]),t._v(" 内部维护了一个整数 "),n("code",[t._v("n")]),t._v("，n（要大于等于0）在 当前线程 初始化 "),n("code",[t._v("CountDownLatch")]),t._v(" 方法指定。当前线程调用 "),n("code",[t._v("CountDownLatch")]),t._v(" 的 "),n("code",[t._v("await()")]),t._v(" 方法阻塞当前线程，等待其他调用 "),n("code",[t._v("CountDownLatch")]),t._v(" 对象的 "),n("code",[t._v("CountDown()")]),t._v(" 方法的线程执行完毕。 其他线程调用该 "),n("code",[t._v("CountDownLatch")]),t._v(" 的 "),n("code",[t._v("CountDown()")]),t._v(" 方法，该方法会把 n-1，直到所有线程执行完成，"),n("code",[t._v("n")]),t._v("等于"),n("code",[t._v("0")]),t._v("，当前线程 就恢复执行。")])])}),[],!1,null,null,null);o.default=e.exports}}]);