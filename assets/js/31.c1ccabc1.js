(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{536:function(s,t,a){"use strict";a.r(t);var e=a(3),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"乐观锁和悲观锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁和悲观锁"}},[s._v("#")]),s._v(" 乐观锁和悲观锁")]),s._v(" "),a("h3",{attrs:{id:"一、乐观锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、乐观锁"}},[s._v("#")]),s._v(" 一、乐观锁")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("原理")]),s._v(" "),a("p",[s._v("​\t认为不会产生并发问题，每次去取数据的时候总认为不会有其他线程对数据进行修改，因此不会上锁，但是在更新时会判断其他线程在这之前有没有对数据进行修改，一般会使用版本号机制或CAS操作实现。")])]),s._v(" "),a("li",[a("p",[s._v("实现")])])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Version方式\n一般是在数据表中加上一个数据版本号version字段，表示数据被修改的次数，当数据被修改时，version值会加一。当线程A要更新数据值时，在读取数据的同时也会读取version值，在提交更新时，若刚才读取到的version值为当前数据库中的version值相等时才更新，否则重试更新操作，直到更新成功。")]),s._v(" "),a("p",[a("strong",[s._v("核心代码：")])])])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{id} and version=#{version};")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("CAS方式")]),s._v(" "),a("p",[s._v("​\t即compare and swap 或者 compare and set，涉及到三个操作数，数据所在的内存值，预期值，新值。当需要更新时，判断当前内存值与之前取到的值是否相等，若相等，则用新值更新，若失败则重试，一般情况下是一个自旋操作，即不断的重试。")])])]),s._v(" "),a("h3",{attrs:{id:"二、悲观锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、悲观锁"}},[s._v("#")]),s._v(" 二、悲观锁")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("原理")]),s._v(" "),a("p",[s._v("​\t总是假设最坏的情况，每次取数据时都认为其他线程会去修改，所以都会加锁（读锁、写锁、行锁等），当其他线程想要访问数据时，都需要阻塞挂起等待。")])]),s._v(" "),a("li",[a("p",[s._v("实现  \n  可以依靠数据库实现，如行锁、读锁和写锁等，都是在操作之前加锁，在Java中，synchronized的思想也是悲观锁。\n总结：")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/ichensw/drawing-bed/raw/master/image/i1.jpg",alt:"img"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);