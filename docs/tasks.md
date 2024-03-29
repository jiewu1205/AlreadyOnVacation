---
title: 要做的所有任务和好不好做
mainfont: 霞鹜文楷
---

划掉的就是很简单的，做完在后面打勾。

先不考虑可选的，做完有时间玩几天再看。

# 要求内容

* 基于网页的用户注册与登录系统（60分）    
    * ~~使用https绑定证书到域名而非IP地址  【 _PKI_ _X.509_ 】~~
    * ~~允许用户注册到系统~~
        * ~~用户名的合法字符集范围：中文、英文字母、数字~~
            * ~~类似：-、_、.等合法字符集范围之外的字符不允许使用~~
        * ~~用户口令长度限制在36个字符之内~~
        * ~~对用户输入的口令进行强度校验，禁止使用弱口令~~
    * ~~使用合法用户名和口令登录系统~~
    * 禁止使用明文存储用户口令  【  _PBKDF2_ _散列算法_ _慢速散列_ _针对散列算法（如MD5、SHA1等）的攻击方法_ 】 
        * 存储的口令即使被公开，也无法还原/解码出原始明文口令
    * ~~（可选）安全的忘记口令 / 找回密码功能~~
    * ~~（可选）微信/微博/支付宝的OAuth授权登录 / 注册绑定~~
    * ~~（可选）双因素认证~~
        * ~~OTP: Google Authenticator~~
        * ~~Email~~
        * ~~SMS~~
        * ~~扫码登录~~
* 基于网页的文件上传加密与数字签名系统（20分）
    * 已完成《基于网页的用户注册与登录系统》所有要求
    * ~~限制文件大小：小于 10MB~~
    * ~~限制文件类型：office文档、常见图片类型~~
    * ~~匿名用户禁止上传文件~~
    * 对文件进行对称加密存储到文件系统，禁止明文存储文件 【 _对称加密_ _密钥管理（如何安全存储对称加密密钥）_ _对称加密密文的PADDING问题_ 】
    * 系统对加密后文件进行数字签名 【 _数字签名（多种签名工作模式差异）_  】
    * ~~（可选）文件秒传：服务器上已有的文件，客户端可以不必再重复上传了~~
* 基于网页的加密文件下载与解密（20分）
    * 已完成《基于网页的文件上传加密与数字签名系统》所有要求 
    * ~~提供匿名用户加密后文件和关联的数字签名文件的下载~~（我猜这句话应该是个祈使句，谓语动词是提供，宾语是匿名用户，剩下的为间接宾语，即提供的内容，的前面的为间接宾语的定语）
        * 客户端对下载后的文件进行数字签名验证  【 _非对称（公钥）加密_ _数字签名_  】 
        * 客户端对下载后的文件可以解密还原到原始文件 【 _对称解密_ _密钥管理_ 】
    * 提供已登录用户解密后文件下载
    * 下载URL设置有效期（限制时间或限制下载次数），过期后禁止访问 【 _数字签名_ _消息认证码_ _Hash Extension Length Attack_ _Hash算法与HMAC算法的区别与联系_ 】
    * 提供静态文件的散列值下载，供下载文件完成后本地校验文件完整性 【 _散列算法_ 】

可以基于 [PHP 版实现的课程系统半成品源代码](https://github.com/c4pr1c3/ac-demo) 或 [Python 版实现的课程系统半成品源代码](https://github.com/TheMasterOfMagic/ac) 进行「二次开发」，也可以自己从零开始开发。编程语言技术栈没有限制。“中传放心传”不是限定的题目，仅作示例，同学们可以自拟具体作品名。

!!! 前方重要提醒
    如果基于以上代码进行「二次开发」，`必须采用 fork + PR` 的方式提交最终完成的系统源代码（第三方依赖的源代码不要 push 到 github），方便我查看你 `你具体做了哪些改动`。