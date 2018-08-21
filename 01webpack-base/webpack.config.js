//向外部暴露一个打包的配置对象  因为日webpack是基于NOde构建的，所以webpack支持所有node语法
module.exports = {

    mode:'development'//development   production  开发环境和生产环境的选项 不同与是否打包
    //在webpack4.x中 有一个很大的特性，就是  约定大于配置，约定的打包入口文件是src下的index.js


    // export default {}
    //这是ES6中 向外导出模块的API 与之对应的是 import*** from '标识符'
    //那些特性node支持？ 如果浏览器支持那些，则Node就支持那些
}