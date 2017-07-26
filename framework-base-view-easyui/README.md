![controllers.png-16.5kB][1]
# Centit UI - 基于EasyUI前端框架
-------------------------------------
如果你需要：

 - 创建后台增删改查管理平台
 - 丰富的主题皮肤
 - 简单易用的语义化标签
 - 模块化开发业务
 - 配合BS4.0后台框架
 
Centit UI能满足上述需求，体验简单清晰的开发过程，避免以前页面、代码混杂的情况。

[DEMO][2] | [主题][3] | 教程 | 文档

## 使用要求

- IE8+ 或者 Chrome、FireFox
- JDK1.7
- Tomcat7
- Maven3

## 安装

必须是Maven工程，目前最新版本 **3.0.1**
```xml
<dependency>
	<groupId>com.centit.framework</groupId>
	<artifactId>framework-base-view-easyui</artifactId>
	<version>3.0.1-SNAPSHOT</version>
</dependency>
```

## 快速开始
 
创建一个Maven Web工程

*pom.xml*

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.centit.framework</groupId>
    <artifactId>framework.demo</artifactId>
    <version>1.0-SNAPSHOT</version>

    <dependencies>
        <dependency>
            <groupId>com.centit.framework</groupId>
            <artifactId>framework-base-view-easyui</artifactId>
            <version>3.0.1-SNAPSHOT</version>
        </dependency>
    </dependencies>

    <distributionManagement>
        <repository>
            <id>centit-releases</id>
            <name>centit-release</name>
            <url>http://192.168.128.16:8080/nexus/content/repositories/centit-releases/</url>
        </repository>
        <snapshotRepository>
            <id>centit-snapshots</id>
            <name>centit-snapshots</name>
            <url>http://192.168.128.16:8080/nexus/content/repositories/centit-snapshots/</url>
        </snapshotRepository>
    </distributionManagement>

    <build>
        <resources>
            <resource>
                <directory>src/main/webapp</directory>
                <excludes>
                    <exclude>WEB-INF/*</exclude>
                </excludes>
                <targetPath>META-INF/resources/</targetPath>
            </resource>
        </resources>
    </build>
</project>
```

*web.xml*

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">
    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
    </welcome-file-list>
</web-app>
```

*index.html*

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title></title>

    <script>
        window.ContextPath = '/api/';       // 后台工程路径
        window.ViewContextPath ='/centit/'; // 前台工程路径
    </script>
</head>

<body class="centit-ui">
</body>
<script data-main="ui/app" src="ui/js/require.js"></script>
</html>
```


如果一切顺利，工程结构如下：
![QQ截图20161207131035.png-17.3kB][4]

> **framework-base-view-easyui.jar** 在Tomcat启动时发布到 **WEB-INF\lib** 目录下，所以工程的源码里并不会有任何文件

启动服务器，打开DEMO，里面有常用组件的介绍：
![qui.png-110.7kB][5]

## 配置
**Centit UI** 提供多个文件接口方便配置，这些文件必须放在固定的目录 **custom** 下。比如改变框架主题，新建 *custom/config.js*
![QQ截图20161207140039.png-40.1kB][6]
>  **custom/config.js** 可以从 **framework-base-view-easyui.jar** 中对应的位置获取源码，里面已经以注释的方式写出了所有配置项

找到 **Theme** => **DefaultTheme** ，将值改写成 **xjoa**，刷新浏览器，就能看到新主题的效果
![xjoa.png-82.2kB][7]


  [1]: http://static.zybuluo.com/zard110/k3yf9vbt9t42ddsdny8eexxn/controllers.png
  [2]: http://productsvr.centit.com:8090/api/index.jsp
  [3]: http://productsvr:8090/demo/
  [4]: http://static.zybuluo.com/zard110/bu443ort6walahzxt6ipp7iq/QQ%E6%88%AA%E5%9B%BE20161207131035.png
  [5]: http://static.zybuluo.com/zard110/1j9zaw3dliawlufhjaus3yrt/qui.png
  [6]: http://static.zybuluo.com/zard110/kbbn6aw2g8terzb4r5h6o61m/QQ%E6%88%AA%E5%9B%BE20161207140039.png
  [7]: http://static.zybuluo.com/zard110/lp8lr3ameiadoz7zfa4c03zl/xjoa.png