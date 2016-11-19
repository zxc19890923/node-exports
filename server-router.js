var http = require("http");
var url = require("url");


server.js

// 自定义组件中包含自定义组件
var Router = require("./router");
var router = new Router;

function Server() {
    this.showHttp = function() {
        http.createServer(function (req, res) {
            var pathname = url.parse(req.url).pathname;
            // 自定义组件
            var routeResult = router.route(pathname);
            res.writeHead(200, {"Content_Type": "text/html"});
            res.write("这是自定义的组件, 通过exports导出,然后在主组件中通过require加载 " + " " + routeResult);
            res.end();
        }).listen(9000);
        console.log("这是自定义的组件");
    }
}
module.exports = Server;

router.js

function Router() {
    this.route = function(pathname) {
        return pathname
    }
}
module.exports = Router;

index.js

// 加载自定义组件
var Server = require("./server");
var Hello = require("./hellow");

// 实例化模块
var hello = new Hello;
// 调取模块中的方法
hello.setName("zhangxuchao");
hello.setAge(28);


// 实例化模块
var server = new Server;
// 调取模块中的方法
server.showHttp();
