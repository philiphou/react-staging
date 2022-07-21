import React, { Component } from 'react';
import PubSub from 'pubsub-js'


class Search extends Component {

  search= async ()=>{
            //  获取用户输入, 使用连续解构赋值
        const {keyWordNode:{value:keyword}}=this
         console.log("search 组件 发布消息了")
        //  发送请求前，通知List 更新状态
        PubSub.publish('ss',{isFirst:false,isLoading:true})
        //  使用 axios发送网络请求
        /* axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
             response=>{
                console.log(response.data)
                const {items}=response.data
                //  数据回来通知 List更新状态 发布消息
                PubSub.publish('ss',{isLoading:false,users:items})
    
            },
            error=>{
                //     请求失败后，更新app 状态  
                PubSub.publish('ss',{err:error.message})
            })
               */    
        //     使用 fetch 发送 网络请求; fetch 设计体现了关注分离思想，response 成功后还要继续
        /*
         fetch(`https://api.github.com/search/users?q=${keyword}`).then(
            res=>{
                console.log('联系服务器成功了') // res.json() 返回值是一个promise 实例, 真正数据就在promiseResult 里
                return res.json()
                }
            //err=>{console.log('联系服务器失败了',err.message) return new Promise()} // 即便是 404 也是联系成功了 被拒绝也是联系了， 除非是断网那种情况是联系服务器失败,可以终端。then 链式
        ).then(
            res=>{
                console.log('获取数据成功',res.items)
                PubSub.publish('ss',{isLoading:false,users:res.items})
            }
           // err=>{                console.log('获取数据失败了')            }
        ).catch(
            (e)=>{console.log(e.message)}
        )
           
        
        */
         //     优化的 fetch 请求
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
    render() {
        return (
           <section className='jumbotron'>
            <h3 className='jumbotron-heading'> Search Github Users</h3>
            <div>
                <input ref={c=>this.keyWordNode=c} type="text" placeholder='enter the name you search' />&nbsp; 
                <button onClick = {this.search}>Search</button>
            </div>

           </section>
        );
    }
}

export default Search;
