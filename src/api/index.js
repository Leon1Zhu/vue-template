/**
 * Created by zhuliang on 2017/5/6.
 */
import Vue from 'vue'
import axios from 'axios'
export default {
   get:function(url,params){
     return new Promise(function(resolve,reject){
       axios.get(url,{params:params}).then((response) =>{
         resolve(response)
       }).catch((response)=>{
         reject(response)
       })
     })
   },
  post:function(url,body,params){
    return new Promise(function(resolve,reject){
      axios.post(url,body,{params:params}).then((response) =>{
        resolve(response)
      }).catch((response)=>{
        reject(response)
      })
    })
  },
  delete:function(url,params){
    return new Promise(function(resolve,reject){
      axios.delete(url,{params:params}).then((response) =>{
        resolve(response)
      }).catch((response)=>{
        reject(response)
      })
    })
  },
  put:function(url,body,params){
    return new Promise(function(resolve,reject){
      axios.put(url,body,{params:params}).then((response) =>{
        resolve(response)
      }).catch((response)=>{
        reject(response)
      })
    })
  }
  }
