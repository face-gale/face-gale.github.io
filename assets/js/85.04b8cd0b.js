(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{430:function(t,s,e){"use strict";e.r(s);var i=e(42),r=Object(i.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("h1",{attrs:{id:"如何保证消息的有序性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何保证消息的有序性"}},[this._v("#")]),this._v(" 如何保证消息的有序性")]),this._v(" "),s("ol",[s("li",[this._v("通过轮询所有队列的方式来确定消息被发送到哪一个队列（负载均衡策略）。订单号相同的消息会被先后发送到同一个队列中，")]),this._v(" "),s("li",[this._v("在获取到路由信息以后，会根据算法来选择一个队列，同一个 OrderId 获取到的肯定是同一个队列。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);