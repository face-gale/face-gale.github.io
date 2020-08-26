(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{532:function(a,s,t){"use strict";t.r(s);var n=t(42),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"java-基础语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-基础语法"}},[a._v("#")]),a._v(" Java 基础语法")]),a._v(" "),t("h2",{attrs:{id:"第一个java程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一个java程序"}},[a._v("#")]),a._v(" 第一个Java程序")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyFirstJavaProgram")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 第一个Java程序.  \n    * 它将打印字符串 Hello World\n    */")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n       "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 打印 Hello World")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("如何保存、编译以及运行这个程序：")]),a._v(" "),t("ol",[t("li",[a._v("打开Notepad，把上面的代码添加进去；")]),a._v(" "),t("li",[a._v("把文件名保存为："),t("code",[a._v("MyFirstJavaProgram.java")]),a._v("；")]),a._v(" "),t("li",[a._v("打开cmd命令窗口，进入目标文件所在的位置，假设是C:\\")]),a._v(" "),t("li",[a._v("在命令行窗口键入 "),t("code",[a._v("javac MyFirstJavaProgram.java")]),a._v("  按下"),t("code",[a._v("enter")]),a._v("键编译代码。如果代码没有错误，cmd命令提示符会进入下一行。（假设环境变量都设置好了）。")]),a._v(" "),t("li",[a._v("再键入"),t("code",[a._v("java MyFirstJavaProgram")]),a._v(" 按下"),t("code",[a._v("Enter")]),a._v("键就可以运行程序了")])])]),a._v(" "),t("p",[a._v("你将会在窗口看到 Hello World")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("C : > javac MyFirstJavaProgram.java\nC : > java MyFirstJavaProgram \nHello World\n")])])]),t("h2",{attrs:{id:"基本语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[a._v("#")]),a._v(" 基本语法")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("编写Java程序时，应注意以下几点：")]),a._v(" "),t("ol",[t("li",[a._v("大小写敏感：Java是大小写敏感的，这就意味着标识符Hello与hello是不同的。")]),a._v(" "),t("li",[a._v("类名：对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写，例如 "),t("code",[a._v("MyFirstJavaClass")]),a._v(" 。")]),a._v(" "),t("li",[a._v("方法名：所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写。")]),a._v(" "),t("li",[a._v("源文件名：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记Java是大小写敏感的），文件名的后缀为.java。（如果文件名和类名不相同则会导致编译错误）。")]),a._v(" "),t("li",[a._v("主方法入口：所有的Java 程序由"),t("code",[a._v("public static void main(String args[])")]),a._v("方法开始执行。")])])]),a._v(" "),t("h2",{attrs:{id:"java标识符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java标识符"}},[a._v("#")]),a._v(" Java标识符")]),a._v(" "),t("p",[a._v("Java所有的组成部分都需要名字。类名、变量名以及方法名都被称为标识符。")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("关于Java标识符，有以下几点需要注意：")]),a._v(" "),t("ol",[t("li",[a._v("所有的标识符都应该以字母（A-Z或者a-z）,美元符（$）、或者下划线（_）开始")]),a._v(" "),t("li",[a._v("首字符之后可以是任何字符的组合")]),a._v(" "),t("li",[a._v("关键字不能用作标识符")]),a._v(" "),t("li",[a._v("标识符是大小写敏感的")])]),a._v(" "),t("ul",[t("li",[a._v("合法标识符举例：age、$salary、_value、__1_value")]),a._v(" "),t("li",[a._v("非法标识符举例：123abc、-salary")])])]),a._v(" "),t("h2",{attrs:{id:"java修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java修饰符"}},[a._v("#")]),a._v(" Java修饰符")]),a._v(" "),t("p",[a._v("像其他语言一样，Java可以使用修饰符来修饰类中方法和属性。主要有两类修饰符：")]),a._v(" "),t("ul",[t("li",[a._v("访问控制修饰符 : default, public , protected, private")]),a._v(" "),t("li",[a._v("非访问控制修饰符 : final, abstract, static，synchronized 和 volatile")])]),a._v(" "),t("h2",{attrs:{id:"java变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java变量"}},[a._v("#")]),a._v(" Java变量")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("Java中主要有如下几种类型的变量")]),a._v(" "),t("ul",[t("li",[a._v("局部变量")]),a._v(" "),t("li",[a._v("类变量（静态变量）")]),a._v(" "),t("li",[a._v("成员变量（非静态变量）")])])]),a._v(" "),t("h2",{attrs:{id:"java枚举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java枚举"}},[a._v("#")]),a._v(" Java枚举")]),a._v(" "),t("p",[a._v("Java 5.0引入了枚举，枚举限制变量只能是预先设定好的值。使用枚举可以减少代码中的bug。")]),a._v(" "),t("p",[a._v("例如，我们为果汁店设计一个程序，它将限制果汁为小杯、中杯、大杯。这就意味着它不允许顾客点除了这三种尺寸外的果汁。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FreshJuice")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("enum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FreshJuiceSize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" SMALL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" MEDIUM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" LARGE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FreshJuiceSize")]),a._v(" size"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FreshJuiceTest")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FreshJuice")]),a._v(" juice "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FreshJuice")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n      juice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("size "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FreshJuice")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FreshJuiceSize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("MEDIUM "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("blockquote",[t("p",[a._v("注意：枚举可以单独声明或者声明在类里面。方法、变量、构造函数也可以在枚举中定义。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);