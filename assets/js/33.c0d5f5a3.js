(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{538:function(s,t,v){"use strict";v.r(t);var _=v(3),a=Object(_.a)({},(function(){var s=this,t=s.$createElement,v=s._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h1",{attrs:{id:"redis基础面试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis基础面试题"}},[s._v("#")]),s._v(" Redis基础面试题")]),s._v(" "),v("h2",{attrs:{id:"_1、redis支持的数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、redis支持的数据类型"}},[s._v("#")]),s._v(" 1、Redis支持的数据类型？")]),s._v(" "),v("h3",{attrs:{id:"string-字符串"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#string-字符串"}},[s._v("#")]),s._v(" "),v("strong",[s._v("String（字符串）")])]),s._v(" "),v("p",[s._v("格式: "),v("code",[s._v("set key value")])]),s._v(" "),v("p",[s._v("string类型是二进制安全的。意思是redis的string可以包含任何数据。比如jpg图片或者序列化的对象 。")]),s._v(" "),v("p",[s._v("string类型是Redis最基本的数据类型，一个键最大能存储512MB。")]),s._v(" "),v("h3",{attrs:{id:"hash-哈希"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hash-哈希"}},[s._v("#")]),s._v(" "),v("strong",[s._v("Hash（哈希）")])]),s._v(" "),v("p",[s._v("格式: "),v("code",[s._v("hmset name key1 value1 key2 value2")])]),s._v(" "),v("p",[s._v("Redis hash 是一个键值(key=>value)对集合。")]),s._v(" "),v("p",[s._v("Redis hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。")]),s._v(" "),v("h3",{attrs:{id:"list-列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#list-列表"}},[s._v("#")]),s._v(" "),v("strong",[s._v("List（列表）")])]),s._v(" "),v("p",[s._v("Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）")]),s._v(" "),v("p",[s._v("格式: "),v("code",[s._v("lpush name value")])]),s._v(" "),v("p",[s._v("在 key 对应 list 的头部添加字符串元素")]),s._v(" "),v("p",[s._v("格式: "),v("code",[s._v("rpush name value")])]),s._v(" "),v("p",[s._v("在 key 对应 list 的尾部添加字符串元素")]),s._v(" "),v("p",[s._v("格式: "),v("code",[s._v("lrem name index")])]),s._v(" "),v("p",[s._v("key 对应 list 中删除 count 个和 value 相同的元素")]),s._v(" "),v("p",[s._v("格式: "),v("code",[s._v("llen name")])]),s._v(" "),v("p",[s._v("返回 key 对应 list 的长度")]),s._v(" "),v("h3",{attrs:{id:"set-集合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#set-集合"}},[s._v("#")]),s._v(" "),v("strong",[s._v("Set（集合）")])]),s._v(" "),v("p",[s._v("格式: "),v("code",[s._v("sadd name value")])]),s._v(" "),v("p",[s._v("Redis的Set是string类型的无序集合。")]),s._v(" "),v("p",[s._v("集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是O(1)。")]),s._v(" "),v("h3",{attrs:{id:"zset-sorted-set-有序集合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#zset-sorted-set-有序集合"}},[s._v("#")]),s._v(" "),v("strong",[s._v("zset(sorted set：有序集合)")])]),s._v(" "),v("p",[s._v("格式: "),v("code",[s._v("zadd name score value")])]),s._v(" "),v("p",[s._v("Redis zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。")]),s._v(" "),v("p",[s._v("不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。")]),s._v(" "),v("p",[s._v("zset的成员是唯一的,但分数(score)却可以重复。")]),s._v(" "),v("p",[v("img",{attrs:{src:"https://img.jbzj.com/file_images/article/202107/2021071514084466.png",alt:"2021071514084466.png"}})]),s._v(" "),v("h2",{attrs:{id:"_2、什么是redis持久化-redis有哪几种持久化方式-优缺点是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、什么是redis持久化-redis有哪几种持久化方式-优缺点是什么"}},[s._v("#")]),s._v(" 2、什么是Redis持久化？Redis有哪几种持久化方式？优缺点是什么？")]),s._v(" "),v("p",[s._v("持久化就是把内存的数据写到磁盘中去，防止服务宕机了内存数据丢失。")]),s._v(" "),v("p",[s._v("Redis 提供了两种持久化方式：RDB（默认） 和AOF")]),s._v(" "),v("h3",{attrs:{id:"rdb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rdb"}},[s._v("#")]),s._v(" "),v("strong",[s._v("RDB：")])]),s._v(" "),v("p",[s._v("rdb是Redis DataBase缩写")]),s._v(" "),v("p",[s._v("功能核心函数rdbSave(生成RDB文件)和rdbLoad（从文件加载内存）两个函数")]),s._v(" "),v("h3",{attrs:{id:"aof"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aof"}},[s._v("#")]),s._v(" "),v("strong",[s._v("AOF:")])]),s._v(" "),v("p",[s._v("Aof是Append-only file缩写")]),s._v(" "),v("p",[s._v("每当执行服务器(定时)任务或者函数时flushAppendOnlyFile 函数都会被调用， 这个函数执行以下两个工作")]),s._v(" "),v("h3",{attrs:{id:"aof写入保存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aof写入保存"}},[s._v("#")]),s._v(" "),v("strong",[s._v("aof写入保存：")])]),s._v(" "),v("ul",[v("li",[s._v("WRITE：根据条件，将 aof_buf 中的缓存写入到 AOF 文件")]),s._v(" "),v("li",[s._v("SAVE：根据条件，调用 fsync 或 fdatasync 函数，将 AOF 文件保存到磁盘中。")])]),s._v(" "),v("h3",{attrs:{id:"存储结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#存储结构"}},[s._v("#")]),s._v(" "),v("strong",[s._v("存储结构:")])]),s._v(" "),v("p",[s._v("内容是redis通讯协议(RESP )格式的命令文本存储。")]),s._v(" "),v("h3",{attrs:{id:"比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#比较"}},[s._v("#")]),s._v(" "),v("strong",[s._v("比较：")])]),s._v(" "),v("ul",[v("li",[s._v("aof文件比rdb更新频率高，优先使用aof还原数据。")]),s._v(" "),v("li",[s._v("aof比rdb更安全也更大")]),s._v(" "),v("li",[s._v("rdb性能比aof好")]),s._v(" "),v("li",[s._v("如果两个都配了优先加载AOF")])]),s._v(" "),v("p",[s._v("刚刚上面你有提到redis通讯协议(RESP )，能解释下什么是RESP？有什么特点？（可以看到很多面试其实都是连环炮，面试官其实在等着你回答到这个点，如果你答上了对你的评价就又加了一分）")]),s._v(" "),v("p",[s._v("RESP 是redis客户端和服务端之前使用的一种通讯协议；")]),s._v(" "),v("p",[s._v("RESP 的特点：实现简单、快速解析、可读性好")]),s._v(" "),v("p",[v("code",[s._v('For Simple Strings the first byte of the reply is "+"')]),s._v(" 回复")]),s._v(" "),v("p",[v("code",[s._v('For Errors the first byte of the reply is "-"')]),s._v("错误")]),s._v(" "),v("p",[v("code",[s._v('For Integers the first byte of the reply is ":"')]),s._v("整数")]),s._v(" "),v("p",[v("code",[s._v('For Bulk Strings the first byte of the reply is "$"')]),s._v("字符串")]),s._v(" "),v("p",[v("code",[s._v('For Arrays the first byte of the reply is "*"')]),s._v(" 数组")]),s._v(" "),v("p",[v("img",{attrs:{src:"https://img.jbzj.com/file_images/article/202107/2021071514084467.png",alt:"2021071514084467.png"}})]),s._v(" "),v("h2",{attrs:{id:"_3、redis-有哪些架构模式-讲讲各自的特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、redis-有哪些架构模式-讲讲各自的特点"}},[s._v("#")]),s._v(" 3、Redis 有哪些架构模式？讲讲各自的特点")]),s._v(" "),v("h3",{attrs:{id:"单机版"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单机版"}},[s._v("#")]),s._v(" 单机版")]),s._v(" "),v("p",[s._v("特点：简单")]),s._v(" "),v("p",[s._v("问题：")]),s._v(" "),v("ul",[v("li",[s._v("内存容量有限")]),s._v(" "),v("li",[s._v("处理能力有限")]),s._v(" "),v("li",[s._v("无法高可用。")])]),s._v(" "),v("h3",{attrs:{id:"主从复制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[s._v("#")]),s._v(" "),v("strong",[s._v("主从复制")])]),s._v(" "),v("p",[s._v("Redis 的复制（replication）功能允许用户根据一个 Redis 服务器来创建任意多个该服务器的复制品，其中被复制的服务器为主服务器（master），而通过复制创建出来的服务器复制品则为从服务器（slave）。")]),s._v(" "),v("p",[s._v("只要主从服务器之间的网络连接正常，主从服务器两者会具有相同的数据，主服务器就会一直将发生在自己身上的数据更新同步 给从服务器，从而一直保证主从服务器的数据相同。")]),s._v(" "),v("h4",{attrs:{id:"特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[s._v("#")]),s._v(" "),v("strong",[s._v("特点：")])]),s._v(" "),v("ul",[v("li",[s._v("master/slave 角色")]),s._v(" "),v("li",[s._v("master/slave 数据相同降低")]),s._v(" "),v("li",[s._v("master 读压力在转交从库")])]),s._v(" "),v("h4",{attrs:{id:"问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" "),v("strong",[s._v("问题：")])]),s._v(" "),v("ul",[v("li",[s._v("无法保证高可用")]),s._v(" "),v("li",[s._v("没有解决 master 写的压力")])]),s._v(" "),v("h3",{attrs:{id:"哨兵"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#哨兵"}},[s._v("#")]),s._v(" "),v("strong",[s._v("哨兵")])]),s._v(" "),v("p",[s._v("Redis sentinel 是一个分布式系统中监控 redis 主从服务器，并在主服务器下线时自动进行故障转移。其中三个特性：")]),s._v(" "),v("ul",[v("li",[s._v("监控（Monitoring）：Sentinel 会不断地检查你的主服务器和从服务器是否运作正常。")]),s._v(" "),v("li",[s._v("提醒（Notification）：当被监控的某个 Redis 服务器出现问题时， Sentinel 可以通过 API 向管理员或者其他应用程序发送通知。")]),s._v(" "),v("li",[s._v("自动故障迁移（Automatic failover）：当一个主服务器不能正常工作时， Sentinel 会开始一次自动故障迁移操作。")])]),s._v(" "),v("h4",{attrs:{id:"特点-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点-2"}},[s._v("#")]),s._v(" "),v("strong",[s._v("特点：")])]),s._v(" "),v("p",[s._v("保证高可用监控各个节点自动故障迁移")]),s._v(" "),v("h4",{attrs:{id:"缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[s._v("#")]),s._v(" "),v("strong",[s._v("缺点：")])]),s._v(" "),v("ul",[v("li",[s._v("主从模式，切换需要时间丢数据")]),s._v(" "),v("li",[s._v("没有解决 master 写的压力")])]),s._v(" "),v("h3",{attrs:{id:"集群-proxy-型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集群-proxy-型"}},[s._v("#")]),s._v(" "),v("strong",[s._v("集群（proxy 型）")])]),s._v(" "),v("p",[s._v("Twemproxy 是一个 Twitter 开源的一个 redis 和 memcache 快速/轻量级代理服务器；Twemproxy 是一个快速的单线程代理程序，支持 Memcached ASCII 协议和 redis 协议。")]),s._v(" "),v("h4",{attrs:{id:"特点-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点-3"}},[s._v("#")]),s._v(" "),v("strong",[s._v("特点：")])]),s._v(" "),v("ul",[v("li",[s._v("多种 hash 算法：MD5、CRC16、CRC32、CRC32a、hsieh、murmur、Jenkins")]),s._v(" "),v("li",[s._v("支持失败节点自动删除")]),s._v(" "),v("li",[s._v("后端 Sharding 分片逻辑对业务透明，业务方的读写方式和操作单个 Redis 一致")])]),s._v(" "),v("h4",{attrs:{id:"缺点-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[s._v("#")]),s._v(" "),v("strong",[s._v("缺点：")])]),s._v(" "),v("ul",[v("li",[s._v("增加了新的 proxy，需要维护其高可用。")]),s._v(" "),v("li",[s._v("failover 逻辑需要自己实现，其本身不能支持故障的自动转移可扩展性差，进行扩缩容都需要手动干预")])]),s._v(" "),v("h3",{attrs:{id:"集群-直连型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集群-直连型"}},[s._v("#")]),s._v(" "),v("strong",[s._v("集群（直连型）：")])]),s._v(" "),v("p",[s._v("从redis 3.0之后版本支持redis-cluster集群，Redis-Cluster采用无中心结构，每个节点保存数据和整个集群状态,每个节点都和其他所有节点连接。")]),s._v(" "),v("h4",{attrs:{id:"特点-4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点-4"}},[s._v("#")]),s._v(" "),v("strong",[s._v("特点：")])]),s._v(" "),v("ul",[v("li",[s._v("无中心架构（不存在哪个节点影响性能瓶颈），少了 proxy 层。")]),s._v(" "),v("li",[s._v("数据按照 slot 存储分布在多个节点，节点间数据共享，可动态调整数据分布。")]),s._v(" "),v("li",[s._v("可扩展性，可线性扩展到 1000 个节点，节点可动态添加或删除。")]),s._v(" "),v("li",[s._v("高可用性，部分节点不可用时，集群仍可用。通过增加 Slave 做备份数据副本 -实现故障自动 failover，节点之间通过 gossip 协议交换状态信息，用投票机制完成 Slave到 Master 的角色提升。")])]),s._v(" "),v("h4",{attrs:{id:"缺点-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点-3"}},[s._v("#")]),s._v(" "),v("strong",[s._v("缺点：")])]),s._v(" "),v("ul",[v("li",[s._v("资源隔离性较差，容易出现相互影响的情况。")]),s._v(" "),v("li",[s._v("数据通过异步复制,不保证数据的强一致性")])]),s._v(" "),v("p",[s._v("高可用Redis架构分析搭建，可以参考：高可用Redis服务架构分析与搭建")]),s._v(" "),v("h2",{attrs:{id:"_4、使用过redis做异步队列么-你是怎么用的-有什么缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、使用过redis做异步队列么-你是怎么用的-有什么缺点"}},[s._v("#")]),s._v(" 4、使用过Redis做异步队列么，你是怎么用的？有什么缺点？")]),s._v(" "),v("p",[s._v("一般使用list结构作为队列，rpush生产消息，lpop消费消息。当lpop没有消息的时候，要适当sleep一会再重试。")]),s._v(" "),v("h4",{attrs:{id:"缺点-4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点-4"}},[s._v("#")]),s._v(" "),v("strong",[s._v("缺点：")])]),s._v(" "),v("p",[s._v("在消费者下线的情况下，生产的消息会丢失，得使用专业的消息队列如rabbitmq等。")]),s._v(" "),v("p",[s._v("能不能生产一次消费多次呢？")]),s._v(" "),v("p",[s._v("使用pub/sub主题订阅者模式，可以实现1:N的消息队列。")])])}),[],!1,null,null,null);t.default=a.exports}}]);