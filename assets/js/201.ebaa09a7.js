(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{546:function(t,s,a){"use strict";a.r(s);var i=a(42),r=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),a("p",[t._v("多个类中存在相同属性和行为时，将这些内容抽取到单独一个类中，那么多个类无需再定义这些属性和行为，只要继承那一个类即可。子类具有与父类相同的属性和行为。子类可以直接访问父类中的非私有的属性和行为。\nJava类只支持单继承，不支持多继承但支持多层继承。顶层父类是Object类。所有的类默认继承Object，作为父类。")]),t._v(" "),a("h2",{attrs:{id:"成员变量重名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#成员变量重名"}},[t._v("#")]),t._v(" 成员变量重名")]),t._v(" "),a("p",[t._v("子父类中出现了同名的成员变量时，在子类中需要访问父类中非私有成员变量时，需要使用super关键字，修饰父类成员变量，类似于之前学的this。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("当以下三者重名时：")]),t._v(" "),a("ul",[a("li",[t._v("局部变量：直接写成员变量名。")]),t._v(" "),a("li",[t._v("本类的成员变量：this.成员变量名。")]),t._v(" "),a("li",[t._v("父类的成员变量：super.成员变量名。")])])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://ww1.sinaimg.cn/large/007Rnr4nly1g8heictm7ej30ji08j0wi.jpg"}})]),t._v(" "),a("p",[t._v("直接通过子类对象访问成员变量：等号左边是谁，就优先用谁，没有则向上找。间接通过成员方法访问成员变量：该方法属于谁，就优先用谁，没有则向上找。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://ww1.sinaimg.cn/large/007Rnr4nly1g8heect6nlj30pv0h9tit.jpg"}})]),t._v(" "),a("h2",{attrs:{id:"构造方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造方法"}},[t._v("#")]),t._v(" 构造方法")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("继承关系中,父子类构造方法的访问特点：")]),t._v(" "),a("ul",[a("li",[t._v("子类构造方法中有一个默认隐含的"),a("code",[t._v("super()")]),t._v("调用，所以一定是先调用父类构造，后执行子类构造。")]),t._v(" "),a("li",[t._v("子类构造可以通过super关键字来调用父类重载构造。")]),t._v(" "),a("li",[t._v("super的父类构造调用，必须是子类构造方法的第一个语句,不能一个子类构造调用多次super构造。\n总结：子类必须调用父类构造方法,不写则赠送super();写了则用写的指定的super调用，super只能有一个，还必须是第一个。")])])]),t._v(" "),a("h2",{attrs:{id:"super关键字的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#super关键字的用法"}},[t._v("#")]),t._v(" super关键字的用法")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("三种用法：")]),t._v(" "),a("ul",[a("li",[t._v("在子类的成员方法中，访问父类的成员变量。")]),t._v(" "),a("li",[t._v("在子类的成员方法中，访问父类的成员方法。")]),t._v(" "),a("li",[t._v("在子类的构造方法中，访问父类的构造方法。")])])]),t._v(" "),a("h2",{attrs:{id:"this关键字的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this关键字的用法"}},[t._v("#")]),t._v(" this关键字的用法")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("三种用法：")]),t._v(" "),a("ul",[a("li",[t._v("在本类的成员方法中，访问本类的成员变量。")]),t._v(" "),a("li",[t._v("在本类的成员方法中，访问本类的另一个成员方法。")]),t._v(" "),a("li",[t._v("在本类的构造方法中，访问本类的另一个构造方法。\n总结：this()构造方法调用必须是构造方法的第一个语句，唯一一个。所以super和this两种构造调用，不能同时使用。")])])]),t._v(" "),a("h2",{attrs:{id:"继承方法调用内存图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承方法调用内存图"}},[t._v("#")]),t._v(" 继承方法调用内存图")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://ww1.sinaimg.cn/large/007Rnr4nly1g8hfpf6ts6j31ca0j1dwo.jpg"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);