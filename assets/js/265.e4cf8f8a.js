(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{610:function(a,r,t){"use strict";t.r(r);var s=t(42),e=Object(s.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"nacos-分布式配置中心-多环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nacos-分布式配置中心-多环境配置"}},[a._v("#")]),a._v(" Nacos-分布式配置中心-多环境配置")]),a._v(" "),t("h2",{attrs:{id:"spring-boot-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-profile"}},[a._v("#")]),a._v(" Spring Boot Profile")]),a._v(" "),t("p",[a._v("我们在做项目开发的时候，生产环境和测试环境的一些配置可能会不一样，有时候一些功能也可能会不一样，所以我们可能会在上线的时候手工修改这些配置信息。但是 Spring 中为我们提供了 Profile 这个功能。我们只需要在启动的时候添加一个虚拟机参数，激活自己环境所要用的 Profile 就可以了。")]),a._v(" "),t("p",[a._v("操作起来很简单，只需要为不同的环境编写专门的配置文件，如："),t("code",[a._v("application-dev.yml")]),a._v("、"),t("code",[a._v("application-prod.yml")]),a._v("， 启动项目时只需要增加一个命令参数 "),t("code",[a._v("--spring.profiles.active=环境配置")]),a._v(" 即可，启动命令如下：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("java -jar hello-spring-cloud-alibaba-nacos-provider-1.0.0-SNAPSHOT.jar --spring.profiles.active"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("prod\n")])])]),t("h2",{attrs:{id:"nacos-config-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nacos-config-profile"}},[a._v("#")]),a._v(" Nacos Config Profile")]),a._v(" "),t("p",[a._v("spring-cloud-starter-alibaba-nacos-config 在加载配置的时候，不仅仅加载了以 dataid 为 "),t("code",[a._v("${spring.application.name}.${file-extension:properties}")]),a._v(" 为前缀的基础配置，还加载了 dataid 为 "),t("code",[a._v("${spring.application.name}-${profile}.${file-extension:properties}")]),a._v(" 的基础配置。在日常开发中如果遇到多套环境下的不同配置，可以通过 Spring 提供的 "),t("code",[a._v("${spring.profiles.active}")]),a._v(" 这个配置项来配置。")]),a._v(" "),t("p",[a._v("此处我们以之前创建的 "),t("RouterLink",{attrs:{to:"/zh/spring-cloud-alibaba/创建服务提供者.html#创建服务提供者"}},[t("strong",[a._v("服务提供者")])]),a._v(" 项目为例")],1),a._v(" "),t("h3",{attrs:{id:"在-nacos-server-中增加配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-nacos-server-中增加配置"}},[a._v("#")]),a._v(" 在 Nacos Server 中增加配置")]),a._v(" "),t("p",[a._v("增加一个名为 "),t("code",[a._v("nacos-provider-config-prod.yaml")]),a._v(" 的配置")]),a._v(" "),t("p",[t("img",{attrs:{src:"/micro/Lusifer_20190111041121.png",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("注意：此时，我将配置文件中的端口由 "),t("code",[a._v("8081")]),a._v(" -> "),t("code",[a._v("8082")])])]),a._v(" "),t("h3",{attrs:{id:"在项目中增加配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在项目中增加配置"}},[a._v("#")]),a._v(" 在项目中增加配置")]),a._v(" "),t("p",[a._v("增加一个名为 "),t("code",[a._v("bootstrap-prod.properties")]),a._v(" 的配置文件，内容如下：")]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.profiles.active")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("prod")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.application.name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("nacos-provider-config")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.cloud.nacos.config.file-extension")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("yaml")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.cloud.nacos.config.server-addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("127.0.0.1:8848")]),a._v("\n")])])]),t("p",[a._v("主要增加了 "),t("code",[a._v("spring.profiles.active=prod")]),a._v(" 配置，用于指定访问 Nacos Server 中的 "),t("code",[a._v("nacos-provider-config-prod.yaml")]),a._v(" 配置")]),a._v(" "),t("h2",{attrs:{id:"启动应用程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动应用程序"}},[a._v("#")]),a._v(" 启动应用程序")]),a._v(" "),t("p",[a._v("此时我们有两个配置文件，分别为 "),t("code",[a._v("bootstrap.properties")]),a._v(" 和 "),t("code",[a._v("bootstrap-prod.properties")]),a._v(" ，我们需要指定启动时加载哪一个配置文件，操作流程如下：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("Run")]),a._v(" -> "),t("code",[a._v("Edit Configurations..")])])]),a._v(" "),t("p",[t("img",{attrs:{src:"/micro/Lusifer_20190111043201.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("设置需要激活的配置")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/micro/Lusifer_20190111043322.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("观察日志，判断是否成功加载配置")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/micro/Lusifer_20190111043538.png",alt:""}})])])}),[],!1,null,null,null);r.default=e.exports}}]);