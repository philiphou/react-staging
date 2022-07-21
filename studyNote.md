# ================ React 学习笔记 ================
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
    