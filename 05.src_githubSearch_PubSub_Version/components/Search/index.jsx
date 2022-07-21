import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import axios from 'axios'

class Search extends Component {

    search=()=>{
            //  获取用户输入, 使用连续解构赋值
        const {keyWordNode:{value:keyword}}=this
         console.log("search 组件 发布消息了")
        //  发送请求前，通知List 更新状态
        PubSub.publish('ss',{isFirst:false,isLoading:true})
        //  发送网络请求
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
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
