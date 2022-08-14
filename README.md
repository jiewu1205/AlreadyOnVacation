<br><br>

<div align="center">  <img alt="Logo"  height="80" src="logo.svg"> <br> <br>

</div>


## 项目介绍

本项目是直接放假组在 [中国传媒大学密码学应用实践课程](https://c4pr1c3.github.io/cuc-wiki/ac.html) 的结课作业。



## 功能清单

- 基于网页的用户注册与登录系统
  - 使用https绑定证书到域名而非IP地址 【 *PKI* *X.509* 】
  - 允许用户注册到系统
    - 用户名的合法字符集范围：中文、英文字母、数字
      - 类似：-、_、.等合法字符集范围之外的字符不允许使用
    - 用户口令长度限制在36个字符之内
    - 对用户输入的口令进行强度校验，禁止使用弱口令
  - 使用合法用户名和口令登录系统
  - 禁止使用明文存储用户口令 【 PBKDF2 散列算法 慢速散列 针对散列算法（如MD5、SHA1等）的攻击方法】
    - 存储的口令即使被公开，也无法还原/解码出原始明文口令
  - 安全的忘记口令 / 找回密码功能
- 基于网页的文件上传加密与数字签名系统
  - 限制文件大小：小于 10MB
  - 限制文件类型：office文档、常见图片类型
  - 匿名用户禁止上传文件
  - 对文件进行对称加密存储到文件系统，禁止明文存储文件 【 *对称加密* *密钥管理（如何安全存储对称加密密钥）* *对称加密密文的PADDING问题* 】
  - 系统对加密后文件进行数字签名 【 *数字签名（多种签名工作模式差异）* 】
  - 文件秒传：服务器上已有的文件，客户端可以不必再重复上传了
- 基于网页的加密文件下载与解密
  - 提供匿名用户加密后文件和关联的数字签名文件的下载
    - 客户端对下载后的文件进行数字签名验证 【 *非对称（公钥）加密* *数字签名* 】
    - 客户端对下载后的文件可以解密还原到原始文件 【 *对称解密* *密钥管理* 】
  - 提供已登录用户解密后文件下载
  - 下载URL设置有效期（限制时间或限制下载次数），过期后禁止访问 【 *数字签名* *消息认证码* *Hash Extension Length Attack* *Hash算法与HMAC算法的区别与联系* 】
  - 提供静态文件的散列值下载，供下载文件完成后本地校验文件完整性 【 *散列算法* 】

## 本项目用到的关键技术

- 对称加密：AES
- 非对称加密：RSA
- 数字签名：SHA256withRSA
- 前端：Vue.js 3.0
- 后端：Flask
- 数据库：MySQL

## 快速上手体验

### DEMO

打开浏览器访问：[https://pan.neixiangde.ren/](https://pan.neixiangde.ren/)即可快速体验系统所有功能。

### 本地运行

本地运行方式：`python3 app.py`

## 依赖环境安装补充说明

- 相关依赖在`requirements.txt`文件中，可以通过命令：`pip install -r requirements.txt`安装。
- 数据库账号密码写在`app.py`文件中，可进行更改，数据库表结构在`cucpan.sql`中



## 演示

[Bilibili](https://www.bilibili.com/video/BV1eG41187mD/)