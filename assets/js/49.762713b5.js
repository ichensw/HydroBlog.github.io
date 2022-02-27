(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{555:function(a,s,t){"use strict";t.r(s);var n=t(3),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"springcloud与springcloudalibaba组件之间的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springcloud与springcloudalibaba组件之间的区别"}},[a._v("#")]),a._v(" SpringCloud与SpringCloudAlibaba组件之间的区别")]),a._v(" "),t("p",[a._v("OpenFeign：基于http协议，服务间调用通过http通信，性能较差，但是通讯更方便，不受限于语言，任何语言都可以。")]),a._v(" "),t("p",[a._v("Dubbo：基于RPC进行服务调用，底层是tcp协议，性能会更优，")]),a._v(" "),t("h2",{attrs:{id:"springcloud和alibaba的版本适配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springcloud和alibaba的版本适配"}},[a._v("#")]),a._v(" SpringCloud和Alibaba的版本适配")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("远程调用")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("使用RestTemplate")]),a._v(" "),t("p",[a._v("在启动类上添加")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RestTemplate")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getTemplate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RestTemplate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("在需要调用的地方通过@Autowired注入")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Autowired")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RestTemplate")]),a._v(" restTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("通过restTmplate.getForObject()获取URL中的数据")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Item")]),a._v(" item "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" restTmplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getForObject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://xxxx:xxx/item"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("使用Nacos")]),a._v(" "),t("p",[a._v("通过Nacos的DiscoveryClient来获取服务的信息（主机地址和端口）")]),a._v(" "),t("p",[a._v("​\t第一步：在启动类上添加@EnableDiscoveryClient注解")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@SpringBootApplication\n@EnableDiscoveryClient\npublic class OrderApplication(){\n\t......\n}\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])])]),a._v(" "),t("li")])]),a._v(" "),t("li")])])}),[],!1,null,null,null);s.default=e.exports}}]);