# ================ React 脚手架学习笔记 ================
- 消息订阅与发布机制：
    1. 工具库 PubSubJS
    2. 下载： npm install pubsub-js --save
    3. PubSub.subscribe('name',(mesg,data)=>{})
- Ajax 请求： 两大类： 基于 xhr 和 基于 fetch
    1. const xhr = new XMLHttpRequest()
    2. Jquery: $.get('') 可能有回调地狱
    3. Axios： 避免回调地狱： axios.get('').then(res=>{},err=>{})
    4. Fetch: 不同于前三者，fetch不是基于 xhr, 是 window自带的，原生的
        - fetch 请求更好的体现关注分离原则 (seperation of concerns)
        - fetch 实例：
        search = async()=>{
            try{
                 const response = await fetch(`https://api.github.com/search/users?q=${keyword}`)
                 const data = await response.json()
                 console.log(data)
                 PubSub.publish('ss',{isLoading:false,users:data.items})
                 }catch(error){
                console.log("出错了",error.message)
                PubSub.publish('ss',{err:error.message})
                 }
        } 
       
       
    5. 解构赋值
        let obj = {a:{b:1}}
        const {a}=obj // 传统的解构赋值
        const {a:{b}} // 连续解构赋值
        const {a:{b:value}} = obj // 连续解构赋值，并重命名 b
- React 路由
    1. SPA 的理解
        - 单页 Web 应用 （Single Page Web Application)， 单页面，多组件应用
        - 整个应用只有一个完整的页面
        - 点击页面中的连接不会刷新页面，只会做页面的局部更新
        - 数据都需要通过ajax 请求获取，并在前端异步展现
    2. 路由的理解：
        - 什么是路由？
            -- 一个路由就是一个映射关系
            -- key 为 路径， value 可能是function或者 component
        - 路由的分类
            1. 后端路由
            2. 前端路由
- react-router:
    - 理解
        -- react的一个插件
        -- 专门用来实现一个SPA 应用
        -- 基于react的项目都会用到此库
    - 内置组件：
        1. <BrowserRouter>
        2. <HashRouter>
        3. <Route>
        4. <Redirect>
        5. <Link>
        6. <NavLink>
        7. <Switch>
- 路由的基本使用：
    - 明确好页面中的导航区， 展示区
    - 导航区的a 标签改为 Link 标签
        <Link to='/xxx'>Demo</Link>
    - 展示区写 Route 标签进行路径的匹配（注册路由）
        <Route path = "/xxx" component={Demo}/>
    - <App/> 的最外侧包裹了一个 <BrowserRoute> 或者 <HashRoute>

- 路由组件 和 一般组件
    - 写法不同：
        -- 一般组件： <Demo/>
        -- 路由组件： <Route path="./xxx" component={Demo}/>
        -- 存放位置：路由组件在 pages 文件夹， 一般组件在 components
    - 接收到的props 不同
        - 一般组件写组件标签时候传递了什么，就能接收到什么
        - 路由组件： 接收到三个固定的属性：
            history:
                go: ƒ go(n)
                goBack: ƒ goBack()
                goForward: ƒ goForward()
                push: ƒ push(path, state)
                replace: ƒ replace(path, state)
            
            location:
                hash: ""
                pathname: "/home"
                search: ""
                state: undefined
            
            match:
                params: {}
                path: "/home"
                url: "/home
        - NavLink
            - 用该组件时候，可以传入一个属性： activeClassName="" 用来被点击时候设置样式, 
            <NavLink activeClassName="xxx">
            - 封装 <myNavLink to='./about'> Demo </myNavLink> 其中 Demo 标签体可以作为 children 属性，在props 里传递出去： 
               <NavLink activeClassName="active" className="list-group-item" {...this.props}/>
        - Switch
            - 用 <Switch></Switch> 组件包裹起来所有的路由就会匹配完成第一个正确path 后就不继续往下匹配了，提高匹配效率
            - 通常情况下， path 和 component 是一一对应的关系
        - 解决样式丢失问题：如果在每个路径前面加上特定字符串，这样就不是默认的 localhost:3000/下的 引起样式丢失，因为 bootstrap.css 引入问题
            - 方法1. 去掉点，不用相对路径了： public/index.html 引入样式的时候： ./ 写成 / 
                <Link rel='stylesheet' href="/css/bootstrap.css">
            - 方法2. public/index.html 引入样式的时候使用绝对路径: 利用 %XXX_URL% 语法, 最常用方法；
                <Link rel="stylesheet" href = "%PUBLIC_URL%/css/bootstrap.css">
            - 方法3： 利用 <HashBrowser></HashBrowser> 这样#后面的部分不发给服务器
        - 路由的严格匹配与模糊匹配
            - 默认使用的是模糊匹配， （输入的路径必须包含要匹配的路径，且顺序要一致）
            - 开启严格匹配， <Route exact path="/about" component={About}>
            - 严格匹配不要随便使用开启，需要时候再开启，有些时候开启会导致无法匹配二级路由
        - Redirect 的使用
            - Redirect 是兜底的人，就所有路径都匹配不上的时候，转到Redirect 指定的路径
               <Switch>
               <Route path='/about' component={About}/>
                <Route path='/home' component={Home}/>
                <Route path='/test' component={Test}/>
                <Redirect to="/home"/>
              </Switch>
        - 二级嵌套路由
            - 注册子路由时候要写上父路由的path值
            - 路由的匹配是按照注册路由的顺序进行的
        - 向路由组件传递数据：Ajax 发送参数方式： query, params, body {urlencoded, json}
            - params 参数
                路由链接： (携带参数) <Link to='/demo/test/tom/18'> 详情 </Link>
                注册路由 （声明接收） <Route path="/demo/test/:name/:age" component={Test}/>
                接收参数： const {name,age}=this.props.match.params
            - search 参数
                urlencoded 编码形式： key=value&key=value
                import qs from 'queringstring' 引入这个库
                将urlencoded 编码形式与对象的键值对形式实现相互转换： 
                    -- qs.stringify(obj) 输出 urlencoded 形式
                    -- qs.parse(string) 输出 obj 对象模式
                路由链接（携带参数）：
                    <Link to='/demo/test?name=tom&age=18/'>详情</Link>
                注册路由（无需声明，正常注册即可）：
                    <Route path='/demo/test' component={Test}/>
                接收参数：
                    this.props.location.search
                备注： 获取到的search 是 urlencoded 编码字符串，需要借助 querystring 解析
            - state 参数:
                  路由链接（携带参数）：
                    <Link to={{pathname:'/demo/test',state:{name:tom,age:18}}}>详情</Link>
                注册路由（无需声明，正常注册即可）：
                    <Route path='/demo/test' component={Test}/>
                接收参数：
                    this.props.location.state
                备注：刷新也可以保留住参数，因为浏览器维护着 history API
            - 路由跳转的模式： push 和 replace; 默认是push 压栈模式，可以后退； 如果用replace 则是无痕模式： 
                    <MyNavLink replace to="/test">Test</MyNavLink>
        - 编程式路由导航跳转，运用理由组件里的props 里的 history属性，该属性有两个方法： push 和 replace  参数为path ，运用实现路由跳转： 
            - this.props.history.replace(`/demo/detail/${id}/${title}`)
            - this.props.history.push(`/demo/detail/${id}/${title}`)
            - 如果是用state形式往路由里面传参数，则可以把state 对象作为第二个参数传入API：
            - this.props.history.push(path,state) 
            - this.props.history 还有两个api: goBack, goForward;go; 其中 go(n) 传入一个整数n, 传2 表示前进2步，传 -2 表示后退2步
        - withRouter 的使用: 
            - withRouter 可以让一般组件拥有路由组件的props 属性，例如 history, match 等，这样就可以利用路由组建属性方法API
            - import {withRouter} from 'react-router-dom'
            - export default withRouter(Demo) 
            - withRouter的返回值是一个新组件，绑定了路由组件的属性;
        - BrowserRouter 和 HashRouter
            - 底层原理不一样：
                BrowserRouter 使用的是H5的History API， 不兼容 IE9 及以下版本
                HashRouter 使用的是URL 的哈希值
            - url 表现形式不一样
                BrowserRouter的路径中没有 # ， 例如： localhost:3000/demo/test
                HashRouter的路径中包含 #： 例如： localhost:3000/#/demo/test
            - 刷新后对路由state参数的影响
                BrowserRouter 没有任何影响，因为state保存在history对象中
                HashRouter 刷新后会导致路由state参数的丢失
            - HashRouter 可以用于解决一些路径错误相关的问题
- React UI 组件库
    - material-ui
    - ant-design (蚂蚁金服出品)






                


