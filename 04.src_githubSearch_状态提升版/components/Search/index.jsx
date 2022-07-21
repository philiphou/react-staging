import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
    search=()=>{
        //  获取用户输入, 使用连续解构赋值
        const {keyWordNode:{value:keyword}}=this
        console.log(keyword)
        //  发送请求前，通知APP 更新状态
        this.props.updateAppState({isFirst:false,isLoading:true})
        //  发送网络请求
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response=>{
                console.log(response.data)
                const {items}=response.data
                //  数据回来通知app 更新状态
                this.props.updateAppState({isLoading:false,users:items})
            },
            error=>{
                //     请求失败后，更新app 状态  
                this.props.updateAppState({
                    isLoading:false,
                    err:error.message
                }) 
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
