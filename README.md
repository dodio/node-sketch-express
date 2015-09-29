# node-sketch-express
一个基于express的web开发脚手架.

##概述
使用node，C# java 等来开发的好处是：可以从http服务器的层面直接提供应用（不像php，需要在Apache的背后）
与之而来头疼的几个关系就变得更为复杂：
对服务器内的公共库共享
具体业务路由端的数据共享

以及，两者之间共通的工具类共享：如underscore。 一些模型，或者数据库查询类等。
有些业务情况下，或者基于一些考虑，会在服务器启动时执行且所有请求都共享。
而有些数据需要在请求时才获取，但获取方式又是一致的。

于是我分享一下在express中开发的经验，以后可能会有更多的 sketch 

现在这个是基于express，且为：MVC模式的。以后可能会有基于koa的，或者基于react的组件化模式的 sketch ，也可能会出关于 prerender的。

##为什么叫sketch 
在开发一个新项目时，就我个人的经验来看，最头疼的莫过于搭建初始的框架。纵然网上有人多框架，而且提供了很多工具。
然而任然需要自己做一个关于自己项目的目录规划，而这其中有一部分规划是不属于业务上的规划，而是：怎么组织代码结构。

此sketch 提供了这样一个初始的结构，它不附带任何特别复杂的工具，就是基于express，
创建了一个中间件的加载流程，以及如何共享他们共有的组件。（已经包含，404,500 等错误处理）
它就是项目的一部分，可以随便修改。