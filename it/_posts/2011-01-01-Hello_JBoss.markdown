---
title: Hello JBoss
---

This project tries to evolve from a simple JBoss HelloWorld Servlet into an implementation using as many commonly used Java technologies as possible.

I  started documenting my explorations into these technologies using this source  tree, when I needed to take up a new project and had to refresh my knowledge. This time I wanted to go over all aspects in detail, before relying on predefined build systems that take care of most of all this for me.

The goal is to use: JBoss, a Servlet, an EJB Bean, all nicely packaged in JAR's, WAR's & EAR's, with database access to a MySQL server, JSF, Seam 2, Maven, ...

A Git repository containing all intermediate steps as separate commits is available from [git://github.com/christophevg/HelloJBoss.git](git://github.com/christophevg/HelloJBoss.git)  with a web-front-end at [http://github.com/christophevg/HelloJBoss](http://github.com/christophevg/HelloJBoss)

## Getting Started
* read the documentation on this page
* checkout a revision from GitHub
* run $ make deploy
* visit http://localhost:8080/HelloJBoss/sayHello

## JBoss Installation
* [http://www.jboss.org/jbossas/downloads.html](http://www.jboss.org/jbossas/downloads.html)
* JBoss <= 4.2.3 : patch run.sh (on Mac OS X)

{% highlight bash %}
$ unzip ~/Downloads/jboss-4.2.3.GA-jdk6.zip

$ patch jboss-4.2.3.GA/bin/run.sh <<EOF
9a10,13
> JAVA_OPTS=" -Xms256m -Xmx512m -XX:PermSize=128m -XX:MaxPermSize=256 "
> JAVA_OPTS="\${JAVA_OPTS} -Dsun.rmi.dgc.client.gcInterval=3600000 -Dsun.rmi.dgc.server.gcInterval=3600000 "
> JAVA_OPTS="\${JAVA_OPTS} -Xdebug -Xrunjdwp:transport=dt_socket,address=8787,server=y,suspend=n "
> 
82a87,89
>     if [ "\$darwin" = "true" ]; then
>         MAX_FD_LIMIT=\`sysctl -n kern.maxfilesperproc\`
>     fi
EOF

$ jboss-4.2.3.GA/bin/run.sh
=======================================================================

  JBoss Bootstrap Environment

  JBOSS_HOME: /Users/xtof/Workspace/jboss/jboss-4.2.3.GA

  JAVA: java

  JAVA_OPTS: -Dprogram.name=run.sh  -Xms256m -Xmx512m -XX:PermSize=128m -XX:MaxPermSize=256  -Dsun.rmi.dgc.client.gcInterval=3600000 -Dsun.rmi.dgc.server.gcInterval=3600000  -Xdebug -Xrunjdwp:transport=dt_socket,address=8787,server=y,suspend=n 

  CLASSPATH: /Users/xtof/Workspace/jboss/jboss-4.2.3.GA/bin/run.jar

=======================================================================

Listening for transport dt_socket at address: 8787
09:40:32,416 INFO  [Server] Starting JBoss (MX MicroKernel)...
...
09:44:08,245 INFO  [Server] JBoss (MX MicroKernel) [4.2.3.GA (build: SVNTag=JBoss_4_2_3_GA date=200807181439)] Started in 56s:692ms
{% endhighlight %}

### Start/Stop

{% highlight bash %}
$ run.sh -c <configuration>

$ shutdown.sh -S
{% endhighlight %}

## Step 1 : A simple Helo World Servlet

Access the code for this step also @ [http://github.com/christophevg/HelloJBoss/tree/servlet](http://github.com/christophevg/HelloJBoss/tree/servlet)

### Project Structure

{% highlight bash %}
$ mkdir HelloJBoss
$ cd HelloJBoss
$ mkdir -p hello-war/src/vg/christophe/HelloJBoss
$ mkdir -p hello-war/WEB-INF

$ touch Makefile
$ touch hello-war/src/vg/christophe/HelloJBoss/HelloServlet.java
$ touch hello-war/WEB-INF/web.xml
{% endhighlight %}

### Makefile

{% highlight make %}
PROJECT=HelloJBoss

DIR=$(shell pwd)
CLASSPATH=vg/christophe/${PROJECT}

CC=javac

JBOSS=../jboss-4.2.3.GA
JBOSS_CONFIG=default
JBOSS_INSTANCE=${JBOSS}/server/${JBOSS_CONFIG}
JBOSS_DEPLOY=${JBOSS_INSTANCE}/deploy

WAR=${PROJECT}.war
WAR_DIR=${PROJECT}-war
WAR_SRCS=${WAR_DIR}/src/${CLASSPATH}/*
WAR_TARGET=${WAR_DIR}/target/${WAR_DIR}
WAR_PKG=${WAR_DIR}/target/${WAR}

LIB_SERVLET=${JBOSS_INSTANCE}/lib/servlet-api.jar

all: compile-war

compile-war: ${WAR_SRCS}
	@echo "*** compiling WAR"
	@mkdir -p ${WAR_TARGET}/WEB-INF/classes
	@cp -r ${WAR_DIR}/WEB-INF ${WAR_TARGET}
	@${CC} -classpath ${LIB_SERVLET} \
	   -d ${WAR_TARGET}/WEB-INF/classes ${WAR_SRCS}

deploy: compile-war
	@echo "*** deploying ${WAR}"
	@cp -r ${WAR_TARGET} ${WAR_TARGET}.deploy
	@mv ${WAR_TARGET}.deploy ${JBOSS_DEPLOY}/${WAR}
  
undeploy:
	@echo "*** undeploying ${WAR}"
	@rm -rf ${JBOSS_DEPLOY}/${WAR}

clean:
	@rm -rf */target
{% endhighlight %}

### HelloServlet.java ###

{% highlight java %}
package vg.christophe.HelloJBoss;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@SuppressWarnings("serial")
public class HelloServlet extends HttpServlet {
  @Override
  public void service( HttpServletRequest request, HttpServletResponse response ) 
         throws ServletException, IOException 
  {
    PrintWriter out = response.getWriter();
    out.println( "Hello, this is JBoss World!" ); 
    out.close();
  }   
}
{% endhighlight %}

### web.xml
{% highlight xml %}
<web-app version="2.5" xmlns="http://java.sun.com/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd">
  <servlet>
    <servlet-name>Hello Servlet</servlet-name>
    <servlet-class>vg.christophe.jboss.hello.HelloServlet</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>Hello Servlet</servlet-name>
    <url-pattern>/world</url-pattern>
  </servlet-mapping>
</web-app>
{% endhighlight %}

### Action

{% highlight bash %}
$ make deploy
*** compiling WAR
*** deploying HelloJBoss.war

10:23:53,820 INFO  [TomcatDeployer] deploy, ctxPath=/HelloJBoss, warUrl=.../deploy/HelloJBoss.war/
{% endhighlight %}

![](images/full/HelloJBoss-Servlet.png)

{% highlight bash %}
$ make undeploy
*** undeploying HelloJBoss.war

10:27:17,624 INFO  [TomcatDeployer] undeploy, ctxPath=/HelloJBoss, warUrl=.../deploy/HelloJBoss.war/
{% endhighlight %}

## Step 2 : Deployment using Twiddle

Twiddle is another way to deploy software on the JBoss AS. We even no longer need to copy the directory into the deploy zone, which also means that when restarting the AS, we need to redeploy everything.

Access the code for this step also @ http://github.com/christophevg/HelloJBoss/tree/twiddle

### Makefile

{% highlight make %}
PROJECT=HelloJBoss

DIR=$(shell pwd)
CLASSPATH=vg/christophe/${PROJECT}

CC=javac

JBOSS=../jboss-4.2.3.GA
JBOSS_CONFIG=default
JBOSS_INSTANCE=${JBOSS}/server/${JBOSS_CONFIG}
JBOSS_DEPLOY=${JBOSS_INSTANCE}/deploy

WAR=${PROJECT}.war
WAR_DIR=${PROJECT}-war
WAR_SRCS=${WAR_DIR}/src/${CLASSPATH}/*
WAR_TARGET=${WAR_DIR}/target/${WAR_DIR}
WAR_PKG=${WAR_DIR}/target/${WAR}

LIB_SERVLET=${JBOSS_INSTANCE}/lib/servlet-api.jar

TWIDDLE=${JBOSS}/bin/twiddle.sh
TWIDDLE_DEPLOYER=${TWIDDLE} invoke "jboss.system:service=MainDeployer"
TWIDDLE_DEPLOY=${TWIDDLE_DEPLOYER} deploy
TWIDDLE_UNDEPLOY=${TWIDDLE_DEPLOYER} undeploy

all: compile-war

compile-war: ${WAR_SRCS}
	@echo "*** compiling WAR"
	@mkdir -p ${WAR_TARGET}/WEB-INF/classes
	@cp -r ${WAR_DIR}/WEB-INF ${WAR_TARGET}
	@${CC} -classpath ${LIB_SERVLET} \
	   -d ${WAR_TARGET}/WEB-INF/classes ${WAR_SRCS}
	
deploy: compile-war
	@echo "*** deploying ${WAR_PKG}"
	@mv ${WAR_TARGET} ${WAR_PKG}
	@${TWIDDLE_DEPLOY} file:${DIR}/${WAR_PKG}/

undeploy: 
	@echo "*** undeploying ${WAR_PKG}"
	@${TWIDDLE_UNDEPLOY} file:${DIR}/${WAR_PKG}/

clean:
	@rm -rf */target
{% endhighlight %}

{% highlight bash %}
$ make deploy
*** compiling WAR
*** deploying HelloJBoss-war/target/HelloJBoss.war
'null'

08:01:54,572 INFO  [TomcatDeployer] deploy, ctxPath=/HelloJBoss, warUrl=file:/Users/xtof/Workspace/jboss/HelloJBoss/HelloJBoss-war/target/HelloJBoss.war/

$ make undeploy
*** undeploying hello.war
'null'

08:01:58,986 INFO  [TomcatDeployer] undeploy, ctxPath=/HelloJBoss, warUrl=file:/Users/xtof/Workspace/jboss/HelloJBoss/HelloJBoss-war/target/HelloJBoss.war/
{% endhighlight %}

## Step 3 : Packaging a WAR

In stead of deploying a directory, we can also nicely package the entire content in a WAR (Web Archive).

Access the code for this step also @ http://github.com/christophevg/HelloJBoss/tree/war

### Makefile

{% highlight make %}
PROJECT=HelloJBoss

DIR=$(shell pwd)
CLASSPATH=vg/christophe/${PROJECT}

CC=javac
JAR=jar
JAR_MAKE=${JAR} -cf

JBOSS=../jboss-4.2.3.GA
JBOSS_CONFIG=default
JBOSS_INSTANCE=${JBOSS}/server/${JBOSS_CONFIG}
JBOSS_DEPLOY=${JBOSS_INSTANCE}/deploy

WAR=${PROJECT}.war
WAR_DIR=${PROJECT}-war
WAR_SRCS=${WAR_DIR}/src/${CLASSPATH}/*
WAR_TARGET=${WAR_DIR}/target/${WAR_DIR}
WAR_PKG=${WAR_DIR}/target/${WAR}

LIB_SERVLET=${JBOSS_INSTANCE}/lib/servlet-api.jar

TWIDDLE=${JBOSS}/bin/twiddle.sh
TWIDDLE_DEPLOYER=${TWIDDLE} invoke "jboss.system:service=MainDeployer"
TWIDDLE_DEPLOY=${TWIDDLE_DEPLOYER} deploy
TWIDDLE_UNDEPLOY=${TWIDDLE_DEPLOYER} undeploy

all: compile-war

compile-war: ${WAR_SRCS}
	@echo "*** compiling WAR"
	@mkdir -p ${WAR_TARGET}/WEB-INF/classes
	@cp -r ${WAR_DIR}/WEB-INF ${WAR_TARGET}
	@${CC} -classpath ${LIB_SERVLET} \
	   -d ${WAR_TARGET}/WEB-INF/classes ${WAR_SRCS}

HelloJBoss-war/target/HelloJBoss.war: compile-war
	@echo "*** packaging $@"
	@(cd ${WAR_TARGET}; ${JAR_MAKE} ../${WAR} *)

deploy: ${WAR_PKG}
	@echo "*** deploying $<"
	@${TWIDDLE_DEPLOY} file:${DIR}/${WAR_PKG}

undeploy:
	@echo "*** undeploying ${WAR_PKG}"
	@${TWIDDLE_UNDEPLOY} file:${DIR}/${WAR_PKG}

clean:
	@rm -rf */target
{% endhighlight %}

### Action

{% highlight bash %}
$ make deploy
*** compiling WAR
*** packaging HelloJBoss-war/target/HelloJBoss.war
*** deploying HelloJBoss-war/target/HelloJBoss.war
'null'

08:35:23,192 INFO  [TomcatDeployer] deploy, ctxPath=/HelloJBoss, warUrl=.../tmp/deploy/tmp7576180846093857732HelloJBoss-exp.war/

$ make undeploy
*** undeploying HelloJBoss-war/target/HelloJBoss.war
'null'

08:35:37,252 INFO  [TomcatDeployer] undeploy, ctxPath=/HelloJBoss, warUrl=.../tmp/deploy/tmp7576180846093857732HelloJBoss-exp.war/
{% endhighlight %}

## Step 4 : Adding Database Access through a DataSource

We can let JBoss take care of setting up and maintaining a connection to our database using a DataSource.

Access the code for this step also @ http://github.com/christophevg/HelloJBoss/tree/datasource

See [MySQL](MySQL.html) for instructions on how to create a basic user/database setup.

Create a table holding some ... information:

{% highlight bash %}
$ mysql -uusername -ppassword db
mysql> CREATE TABLE info ( name VARCHAR(25) );
Query OK, 0 rows affected (0.73 sec)

mysql> INSERT INTO info VALUES ( 'xtof' );
Query OK, 1 row affected (0.05 sec)
{% endhighlight %}

### Datasource: db-ds.xml

{% highlight xml %}
<datasources>
  <local-tx-datasource>
    <jndi-name>db</jndi-name>
    <connection-url>jdbc:mysql://localhost:3306/db</connection-url>
    <driver-class>com.mysql.jdbc.Driver</driver-class>
    <user-name>username</user-name>
    <password>password</password>
    <min-pool-size>5</min-pool-size>
    <max-pool-size>20</max-pool-size>
    <idle-timeout-minutes>0</idle-timeout-minutes>
    <blocking-timeout-millis>5000</blocking-timeout-millis>
    <exception-sorter-class-name>
      org.jboss.resource.adapter.jdbc.vendor.MySQLExceptionSorter
    </exception-sorter-class-name>
    <check-valid-connection-sql>
      SELECT COUNT(*) FROM info
    </check-valid-connection-sql>
    <metadata>
      <type-mapping>MySQL</type-mapping>
    </metadata>
  </local-tx-datasource>
</datasources>
{% endhighlight %}

* Download MySQL JAR from [http://dev.mysql.com/downloads/connector/j/](http://dev.mysql.com/downloads/connector/j/)
* Install it in de lib/ dir of the JBoss server:

{% highlight bash %}
$ unzip -qq ~/Downloads/mysql-connector-java-5.1.12.zip 
$ cp mysql-connector-java-5.1.12/mysql-connector-java-5.1.12-bin.jar ../jboss-4.2.3.GA/server/default/lib/
{% endhighlight %}

* restart the JBoss server to detect the JAR

### HelloServlet.java ###


{% highlight java %}
package vg.christophe.HelloJBoss;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

@SuppressWarnings("serial")
public class HelloServlet extends HttpServlet {
  @Override
  public void service( HttpServletRequest request, HttpServletResponse response ) 
         throws ServletException, IOException 
  {
    PrintWriter out = response.getWriter();
    String name = "";
    try {
      name = this.getFirstName();
    } catch( Exception e ) {
      out.println( "Error: <pre>" + e + "</pre>" );
      name = "Somebody";
    } finally {
      out.println( "Hello " + name +  ", this is JBoss World!" ); 
      out.close();
    }
  }
  
  private String getFirstName() throws NamingException, SQLException {
    final String sql = "SELECT * FROM info;";
    InitialContext context = new InitialContext();
    DataSource ds = (DataSource) context.lookup("java:db");
    Connection con = null;
    Statement stmt = null;
    ResultSet rs = null;
    try {
      con = ds.getConnection();
      stmt = con.createStatement();
      rs = stmt.executeQuery(sql);
      if(rs.next()) {
        return rs.getString(1);
      }
    } finally {
      if(rs != null) rs.close();
      if(stmt != null) stmt.close();
      if(con != null) con.close();
    }
    return "Nobody";
  }
}
{% endhighlight %}

### Makefile

{% highlight make %}
PROJECT=HelloJBoss

DIR=$(shell pwd)
CLASSPATH=vg/christophe/${PROJECT}

CC=javac
JAR=jar
JAR_MAKE=${JAR} -cf

JBOSS=../jboss-4.2.3.GA
JBOSS_CONFIG=default
JBOSS_INSTANCE=${JBOSS}/server/${JBOSS_CONFIG}
JBOSS_DEPLOY=${JBOSS_INSTANCE}/deploy

WAR=${PROJECT}.war
WAR_DIR=${PROJECT}-war
WAR_SRCS=${WAR_DIR}/src/${CLASSPATH}/*
WAR_TARGET=${WAR_DIR}/target/${WAR_DIR}
WAR_PKG=${WAR_DIR}/target/${WAR}

DS=db-ds.xml

LIB_SERVLET=${JBOSS_INSTANCE}/lib/servlet-api.jar

TWIDDLE=${JBOSS}/bin/twiddle.sh
TWIDDLE_DEPLOYER=${TWIDDLE} invoke "jboss.system:service=MainDeployer"
TWIDDLE_DEPLOY=${TWIDDLE_DEPLOYER} deploy
TWIDDLE_UNDEPLOY=${TWIDDLE_DEPLOYER} undeploy

all: compile-war

compile-war: ${WAR_SRCS}
	@echo "*** compiling WAR"
	@mkdir -p ${WAR_TARGET}/WEB-INF/classes
	@cp -r ${WAR_DIR}/WEB-INF ${WAR_TARGET}
	@${CC} -classpath ${LIB_SERVLET} \
	   -d ${WAR_TARGET}/WEB-INF/classes ${WAR_SRCS}

HelloJBoss-war/target/HelloJBoss.war: compile-war
	@echo "*** packaging $@"
	@(cd ${WAR_TARGET}; ${JAR_MAKE} ../${WAR} *)

deploy: ${DS} ${WAR_PKG}
	@echo "*** deploying datasource db"
	@${TWIDDLE_DEPLOY} file:${DIR}/${DS}
	@echo "*** deploying ${WAR_PKG}"
	@${TWIDDLE_DEPLOY} file:${DIR}/${WAR_PKG}

undeploy:
	@echo "*** undeploying ${WAR_PKG}"
	@${TWIDDLE_UNDEPLOY} file:${DIR}/${WAR_PKG}
	@echo "*** undeploying datasource db"
	@${TWIDDLE_UNDEPLOY} file:${DIR}/${DS}

clean:
	@rm -rf */target
	@rm twiddle.log
{% endhighlight %}

### Action

{% highlight bash %}
$ make deploy
*** compiling WAR
*** packaging HelloJBoss-war/target/HelloJBoss.war
*** deploying datasource db
'null'
*** deploying HelloJBoss-war/target/HelloJBoss.war
'null'

09:13:15,952 INFO  [ConnectionFactoryBindingService] Bound ConnectionManager 'jboss.jca:service=DataSourceBinding,name=db' to JNDI name 'java:db'
09:13:17,647 INFO  [TomcatDeployer] deploy, ctxPath=/HelloJBoss, warUrl=.../tmp/deploy/tmp3460387247149222507HelloJBoss-exp.war/
{% endhighlight %}

![](images/full/HelloJBoss-DataSource.png)

{% highlight bash %}
$ make undeploy
*** undeploying HelloJBoss-war/target/HelloJBoss.war
'null'
*** undeploying datasource db
'null'

09:14:18,770 INFO  [TomcatDeployer] undeploy, ctxPath=/HelloJBoss, warUrl=.../tmp/deploy/tmp3460387247149222507HelloJBoss-exp.war/
09:14:19,920 INFO  [ConnectionFactoryBindingService] Unbound ConnectionManager 'jboss.jca:service=DataSourceBinding,name=db' from JNDI name 'java:db'
{% endhighlight %}

## Step 5 : Packaging everything in one EAR

We now can package both the WAR and the DS in one deployable package: and EAR (Enterprise Archive).

Access the code for this step also @ [http://github.com/christophevg/HelloJBoss/tree/ear](http://github.com/christophevg/HelloJBoss/tree/ear)

### Structure

{% highlight bash %}
$ mkdir -p HelloJBoss-ear/{META-INF,src}
$ touch HelloJBoss-ear/META-INF/{application,jboss-app}.xml
$ git mv db-ds.xml HelloJBoss-ear/src/
{% endhighlight %}

### application.xml

{% highlight xml %}
<application>
  <display-name>Hello JBoss World</display-name>
  <module>
    <web>
      <web-uri>HelloJBoss.war</web-uri>
    </web>
  </module>
</application>
{% endhighlight %}

### jboss-app.xml

{% highlight xml %}
<!DOCTYPE jboss-app PUBLIC "-//JBoss//DTD J2EE Application 1.4//EN" "http://www.jboss.org/j2ee/dtd/jboss-app_4_0.dtd">
<jboss-app>
  <module>
    <service>db-ds.xml</service>
  </module>
</jboss-app>
{% endhighlight %}

### Makefile

{% highlight make %}
PROJECT=HelloJBoss

DIR=$(shell pwd)
CLASSPATH=vg/christophe/${PROJECT}

CC=javac
JAR=jar
JAR_MAKE=${JAR} -cf

JBOSS=../jboss-4.2.3.GA
JBOSS_CONFIG=default
JBOSS_INSTANCE=${JBOSS}/server/${JBOSS_CONFIG}
JBOSS_DEPLOY=${JBOSS_INSTANCE}/deploy

WAR=${PROJECT}.war
WAR_DIR=${PROJECT}-war
WAR_SRCS=${WAR_DIR}/src/${CLASSPATH}/*
WAR_TARGET=${WAR_DIR}/target/${WAR_DIR}
WAR_PKG=${WAR_DIR}/target/${WAR}

EAR=${PROJECT}.ear
EAR_DIR=${PROJECT}-ear
EAR_SRCS=${EJB_PKG} ${WAR_PKG} ${EAR_DIR}/src/db-ds.xml
EAR_TARGET=${EAR_DIR}/target/${EAR_DIR}
EAR_PKG=${EAR_DIR}/target/${EAR}

LIB_SERVLET=${JBOSS_INSTANCE}/lib/servlet-api.jar

TWIDDLE=${JBOSS}/bin/twiddle.sh
TWIDDLE_DEPLOYER=${TWIDDLE} invoke "jboss.system:service=MainDeployer"
TWIDDLE_DEPLOY=${TWIDDLE_DEPLOYER} deploy
TWIDDLE_UNDEPLOY=${TWIDDLE_DEPLOYER} undeploy

all: compile-war

compile-war: ${WAR_SRCS}
	@echo "*** compiling WAR"
	@mkdir -p ${WAR_TARGET}/WEB-INF/classes
	@cp -r ${WAR_DIR}/WEB-INF ${WAR_TARGET}
	@${CC} -classpath ${LIB_SERVLET} \
	   -d ${WAR_TARGET}/WEB-INF/classes ${WAR_SRCS}

HelloJBoss-war/target/HelloJBoss.war: compile-war
	@echo "*** packaging $@"
	@(cd ${WAR_TARGET}; ${JAR_MAKE} ../${WAR} *)

HelloJBoss-ear/target/HelloJBoss.ear: ${EAR_SRCS}
	@echo "*** packaging $@"
	@mkdir -p ${EAR_TARGET}
	@cp -r ${EAR_SRCS} ${EAR_TARGET}
	@cp -r ${EAR_DIR}/META-INF ${EAR_TARGET}
	@(cd ${EAR_TARGET}; ${JAR_MAKE} ../${EAR} *)

deploy: ${EAR_PKG}
	@echo "*** deploying $<"
	@${TWIDDLE_DEPLOY} file:${DIR}/$<

undeploy: 
	@echo "*** undeploying ${EAR_PKG}"
	@${TWIDDLE_UNDEPLOY} file:${DIR}/${EAR_PKG}

clean:
	@rm -rf */target
	@rm twiddle.log
{% endhighlight %}

### Action

{% highlight bash %}
$ make deploy
*** compiling WAR
*** packaging HelloJBoss-war/target/HelloJBoss.war
*** packaging HelloJBoss-ear/target/HelloJBoss.ear
*** deploying HelloJBoss-ear/target/HelloJBoss.ear
'null'

09:39:19,575 INFO  [EARDeployer] Init J2EE application: file:/Users/xtof/Workspace/jboss/HelloJBoss/HelloJBoss-ear/target/HelloJBoss.ear
09:39:19,695 INFO  [ConnectionFactoryBindingService] Bound ConnectionManager 'jboss.jca:service=DataSourceBinding,name=db' to JNDI name 'java:db'
09:39:19,702 INFO  [TomcatDeployer] deploy, ctxPath=/HelloJBoss, warUrl=.../tmp/deploy/tmp1849921934304073651HelloJBoss.ear-contents/HelloJBoss-exp.war/
09:39:19,855 INFO  [EARDeployer] Started J2EE application: file:/Users/xtof/Workspace/jboss/HelloJBoss/HelloJBoss-ear/target/HelloJBoss.ear

$ make undeploy
*** undeploying HelloJBoss-ear/target/HelloJBoss.ear
'null'

09:40:19,362 INFO  [TomcatDeployer] undeploy, ctxPath=/HelloJBoss, warUrl=.../tmp/deploy/tmp1849921934304073651HelloJBoss.ear-contents/HelloJBoss-exp.war/
09:40:19,368 INFO  [ConnectionFactoryBindingService] Unbound ConnectionManager 'jboss.jca:service=DataSourceBinding,name=db' from JNDI name 'java:db'
09:40:19,381 INFO  [EARDeployer] Undeploying J2EE application, destroy step: file:/Users/xtof/Workspace/jboss/HelloJBoss/HelloJBoss-ear/target/HelloJBoss.ear
09:40:19,382 INFO  [EARDeployer] Undeployed J2EE application: file:/Users/xtof/Workspace/jboss/HelloJBoss/HelloJBoss-ear/target/HelloJBoss.ear
{% endhighlight %}

## Step 6: Adding an EJB Bean

Seperating business logic from presentation logic is clearly a best practice. Let's introduce an EJB Bean to accomplish this.

Access the code for this step also @ [http://github.com/christophevg/HelloJBoss/tree/ejb](http://github.com/christophevg/HelloJBoss/tree/ejb)

### Project Structure

{% highlight bash %}
$ mkdir -p HelloJBoss-ejb/META-INF
$ mkdir -p HelloJBoss-ejb/src/vg/christophe/HelloJBoss/
$ touch HelloJBoss-ejb/src/vg/christophe/HelloJBoss/{Greeter,GreeterBean}.java
{% endhighlight %}

### Bean Interface: Greeter.java

{% highlight java %}
package vg.christophe.HelloJBoss;

import javax.ejb.Local;

@Local
public interface Greeter {
  public String greet( String name );
}
{% endhighlight %}

### Bean Implementation: GreeterBean.java

{% highlight java %}
package vg.christophe.HelloJBoss;

import javax.ejb.Stateless;

@Stateless
public class GreeterBean implements Greeter {
  public String greet( String name ) { 
    return "Hello from EJB3, " + name + ", this is JBoss World!" ; 
  }
}
{% endhighlight %}

### HelloServlet.java

{% highlight java %}
package vg.christophe.HelloJBoss;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import javax.ejb.EJB;

@SuppressWarnings("serial")
public class HelloServlet extends HttpServlet {

  @EJB
  private Greeter greeter;

  // This initialization is required for JBoss-4.2.3, where the annotations
  // aren't picked up correctly yet (due to a Tomcat issue)
  // As of Jboss-5.x this entire init method can be removed.
  public void init() throws ServletException {
    super.init();
    try {
      this.greeter = (Greeter)(new InitialContext())
        .lookup("HelloJBoss/GreeterBean/local");
    } catch( NamingException e ) {
      throw new RuntimeException(e);
    }
  }
  
  @Override
  public void service(HttpServletRequest request,HttpServletResponse response) 
         throws ServletException, IOException 
  {
    PrintWriter out = response.getWriter();
    String name = "";
    try {
      name = this.getFirstName();
    } catch( Exception e ) {
      out.println( "Error: <pre>" + e + "</pre>" );
      name = "Somebody";
    } finally {
      out.println( "<html><body>" + 
                   this.greeter.greet(name) +  
                   "</body></html>" );
      out.close();
    }
  }

  private String getFirstName() throws NamingException, SQLException {
    final String sql = "SELECT * FROM info;";
    InitialContext context = new InitialContext();
    DataSource ds = (DataSource) context.lookup("java:db");
    Connection con = null;
    Statement stmt = null;
    ResultSet rs = null;
    try {
      con = ds.getConnection();
      stmt = con.createStatement();
      rs = stmt.executeQuery(sql);
      if(rs.next()) {
        return rs.getString(1);
      }
    } finally {
      if(rs != null) rs.close();
      if(stmt != null) stmt.close();
      if(con != null) con.close();
    }
    return "Nobody";
  }
}
{% endhighlight %}

### Application.xml

{% highlight xml %}
<application>
  <display-name>Hello JBoss World</display-name>
  <module>
    <ejb>HelloJBoss.jar</ejb>
  </module>
  <module>
    <web>
      <web-uri>HelloJBoss.war</web-uri>
    </web>
  </module>
</application>
{% endhighlight %}

### Makefile

{% highlight make %}
PROJECT=HelloJBoss

DIR=$(shell pwd)
CLASSPATH=vg/christophe/${PROJECT}

CC=javac
JAR=jar
JAR_MAKE=${JAR} -cf

JBOSS=../jboss-4.2.3.GA
JBOSS_CONFIG=default
JBOSS_INSTANCE=${JBOSS}/server/${JBOSS_CONFIG}
JBOSS_DEPLOY=${JBOSS_INSTANCE}/deploy

EJB=${PROJECT}.jar
EJB_DIR=${PROJECT}-ejb
EJB_SRCS=${EJB_DIR}/src/${CLASSPATH}/*
EJB_TARGET=${EJB_DIR}/target/${EJB_DIR}
EJB_PKG=${EJB_DIR}/target/${EJB}

WAR=${PROJECT}.war
WAR_DIR=${PROJECT}-war
WAR_SRCS=${WAR_DIR}/src/${CLASSPATH}/*
WAR_TARGET=${WAR_DIR}/target/${WAR_DIR}
WAR_PKG=${WAR_DIR}/target/${WAR}

EAR=${PROJECT}.ear
EAR_DIR=${PROJECT}-ear
EAR_SRCS=${EJB_PKG} ${WAR_PKG} ${EAR_DIR}/src/db-ds.xml
EAR_TARGET=${EAR_DIR}/target/${EAR_DIR}
EAR_PKG=${EAR_DIR}/target/${EAR}

LIB_SERVLET=${JBOSS_INSTANCE}/lib/servlet-api.jar
LIB_EJB3=${JBOSS_INSTANCE}/lib/jboss-ejb3x.jar

TWIDDLE=${JBOSS}/bin/twiddle.sh
TWIDDLE_DEPLOYER=${TWIDDLE} invoke "jboss.system:service=MainDeployer"
TWIDDLE_DEPLOY=${TWIDDLE_DEPLOYER} deploy
TWIDDLE_UNDEPLOY=${TWIDDLE_DEPLOYER} undeploy

all: HelloJBoss-ear/target/HelloJBoss.ear

compile-ejb: ${EJB_SRCS}
	@echo "*** compiling EJB"
	@mkdir -p ${EJB_TARGET}
	@cp -r ${EJB_DIR}/META-INF ${EJB_TARGET}
	@${CC} -classpath ${LIB_EJB3} -d ${EJB_TARGET} ${EJB_SRCS}

HelloJBoss-ejb/target/HelloJBoss.jar: compile-ejb
	@echo "*** packaging $@"
	@(cd ${EJB_TARGET}; ${JAR_MAKE} ../${EJB} *)

compile-war: ${WAR_SRCS}
	@echo "*** compiling WAR"
	@mkdir -p ${WAR_TARGET}/WEB-INF/classes
	@cp -r ${WAR_DIR}/WEB-INF ${WAR_TARGET}
	@${CC} -classpath ${LIB_SERVLET}:${LIB_EJB3}:${EJB_PKG} \
	   -d ${WAR_TARGET}/WEB-INF/classes ${WAR_SRCS}

HelloJBoss-war/target/HelloJBoss.war: compile-war
	@echo "*** packaging $@"
	@(cd ${WAR_TARGET}; ${JAR_MAKE} ../${WAR} *)

HelloJBoss-ear/target/HelloJBoss.ear: ${EAR_SRCS}
	@echo "*** packaging $@"
	@mkdir -p ${EAR_TARGET}
	@cp -r ${EAR_SRCS} ${EAR_TARGET}
	@cp -r ${EAR_DIR}/META-INF ${EAR_TARGET}
	@(cd ${EAR_TARGET}; ${JAR_MAKE} ../${EAR} *)

deploy: ${EAR_PKG}
	@echo "*** deploying $<"
	@${TWIDDLE_DEPLOY} file:${DIR}/$<

undeploy:	
	@echo "*** undeploying ${EAR_PKG}"
	@${TWIDDLE_UNDEPLOY} file:${DIR}/${EAR_PKG}

redeploy: undeploy deploy

clean:
	@rm -rf */target
	@rm -f twiddle.log
{% endhighlight %}

### Action

{% highlight bash %}
$ make deploy
*** compiling EJB
*** packaging HelloJBoss-ejb/target/HelloJBoss.jar
*** compiling WAR
*** packaging HelloJBoss-war/target/HelloJBoss.war
*** packaging HelloJBoss-ear/target/HelloJBoss.ear
*** deploying HelloJBoss-ear/target/HelloJBoss.ear
'null'

13:29:11,768 INFO  [EARDeployer] Init J2EE application: file:/Users/xtof/Workspace/jboss/HelloJBoss/HelloJBoss-ear/target/HelloJBoss.ear
13:29:11,995 INFO  [ConnectionFactoryBindingService] Bound ConnectionManager 'jboss.jca:service=DataSourceBinding,name=db' to JNDI name 'java:db'
13:29:12,013 INFO  [JmxKernelAbstraction] creating wrapper delegate for: org.jboss.ejb3.stateless.StatelessContainer
13:29:12,014 INFO  [JmxKernelAbstraction] installing MBean: jboss.j2ee:ear=HelloJBoss.ear,jar=HelloJBoss.jar,name=GreeterBean,service=EJB3 with dependencies:
13:29:12,023 INFO  [EJBContainer] STARTED EJB: vg.christophe.HelloJBoss.GreeterBean ejbName: GreeterBean
13:29:12,038 INFO  [EJB3Deployer] Deployed: file:/Users/xtof/Workspace/jboss/jboss-4.2.3.GA/server/default/tmp/deploy/tmp8759263019598811955HelloJBoss.ear-contents/HelloJBoss.jar
13:29:12,063 INFO  [TomcatDeployer] deploy, ctxPath=/HelloJBoss, warUrl=.../tmp/deploy/tmp8759263019598811955HelloJBoss.ear-contents/HelloJBoss-exp.war/
13:29:12,203 INFO  [EARDeployer] Started J2EE application: file:/Users/xtof/Workspace/jboss/HelloJBoss/HelloJBoss-ear/target/HelloJBoss.ear
{% endhighlight %}

![](images/full/HelloJBoss-EJB.png)

{% highlight bash %}
$ make undeploy
*** undeploying HelloJBoss-ear/target/HelloJBoss.ear
'null'

13:31:06,051 INFO  [TomcatDeployer] undeploy, ctxPath=/HelloJBoss, warUrl=.../tmp/deploy/tmp8759263019598811955HelloJBoss.ear-contents/HelloJBoss-exp.war/
13:31:06,059 INFO  [EJBContainer] STOPPED EJB: vg.christophe.HelloJBoss.GreeterBean ejbName: GreeterBean
13:31:06,060 WARN  [JmxKernelAbstraction] jboss.j2ee:ear=HelloJBoss.ear,jar=HelloJBoss.jar,name=GreeterBean,service=EJB3 is not registered
13:31:06,062 INFO  [ConnectionFactoryBindingService] Unbound ConnectionManager 'jboss.jca:service=DataSourceBinding,name=db' from JNDI name 'java:db'
13:31:06,085 INFO  [EARDeployer] Undeploying J2EE application, destroy step: file:/Users/xtof/Workspace/jboss/HelloJBoss/HelloJBoss-ear/target/HelloJBoss.ear
13:31:06,086 INFO  [EARDeployer] Undeployed J2EE application: file:/Users/xtof/Workspace/jboss/HelloJBoss/HelloJBoss-ear/target/HelloJBoss.ear
{% endhighlight %}

## Step 7: Move to Maven

So far we've micro-managed everything ourselves using basic Makefile automation. Maven automates a lot of these steps if we adhere to a given set of conventions.

Access the code for this step also @ [http://github.com/christophevg/HelloJBoss/tree/maven](http://github.com/christophevg/HelloJBoss/tree/maven)

### Project Structure

{% highlight bash %}
$ touch HelloJBoss-ear/pom.xml
$ mkdir -p HelloJBoss-ear/src/main/application
$ git mv HelloJBoss-ear/src/db-ds.xml HelloJBoss-ear/src/main/application/
$ git rm HelloJBoss-ear/META-INF/application.xml 
rm 'HelloJBoss-ear/META-INF/application.xml'
$ git rm HelloJBoss-ear/META-INF/jboss-app.xml 
rm 'HelloJBoss-ear/META-INF/jboss-app.xml'
$ touch HelloJBoss-ejb/pom.xml
$ mkdir -p HelloJBoss-ejb/src/main/java/vg/christophe/HelloJBoss
$ git mv HelloJBoss-ejb/src/vg/christophe/HelloJBoss/Greeter.java HelloJBoss-ejb/src/main/java/vg/christophe/HelloJBoss/
$ git mv HelloJBoss-ejb/src/vg/christophe/HelloJBoss/GreeterBean.java HelloJBoss-ejb/src/main/java/vg/christophe/HelloJBoss/
$ rm -rf HelloJBoss-ejb/META-INF
$ rm -rf HelloJBoss-ejb/src/vg
$ touch HelloJBoss-war/pom.xml
$ mkdir -p HelloJBoss-war/src/main/java/vg/christophe/HelloJBoss
$ git mv HelloJBoss-war/src/vg/christophe/HelloJBoss/HelloServlet.java HelloJBoss-war/src/main/java/vg/christophe/HelloJBoss/
$ mkdir -p HelloJBoss-war/src/main/webapp/WEB-INF
$ git mv HelloJBoss-war/WEB-INF/web.xml HelloJBoss-war/src/main/webapp/WEB-INF/
$ rm -rf HelloJBoss-war/src/vg
$ rm -rf HelloJBoss-war/WEB-INF
$ touch pom.xml
$ git rm Makefile 
{% endhighlight %}

### pom.xml

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">

  <modelVersion>4.0.0</modelVersion>

  <groupId>vg.christophe.HelloJBoss</groupId>
  <artifactId>HelloJBoss</artifactId>
  <packaging>pom</packaging>
  <version>0.7</version>
  <name>Hello JBoss</name>
  <url>http://christophe.vg/HelloJBoss</url>
  
  <developers>
    <developer>
      <id>xtof</id>
      <name>Christophe VG</name>
      <organizationUrl>http://christophe.vg</organizationUrl>
    </developer>
  </developers>

  <modules>
    <module>HelloJBoss-ejb</module>    
    <module>HelloJBoss-war</module>
    <module>HelloJBoss-ear</module>
  </modules>
  
  <properties>
    <project-name>HelloJBoss</project-name>
  </properties>
  
  <build>
    <plugins>
      <plugin>
        <artifactId>maven-compiler-plugin</artifactId> <configuration>
        <source>1.6</source>
        <target>1.6</target> </configuration>
      </plugin>
    </plugins>
  </build>
  
</project>
{% endhighlight %}

### HelloJBoss-ear/pom.xml

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" 
         xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <artifactId>HelloJBoss</artifactId>
    <groupId>vg.christophe.HelloJBoss</groupId>
    <version>0.7</version>
  </parent>

  <groupId>vg.christophe.HelloJBoss</groupId>
  <artifactId>HelloJBoss-ear</artifactId>
  <version>0.7</version>
  <packaging>ear</packaging>
  <name>Hello JBoss EAR</name>

  <dependencies>
    <dependency>
      <groupId>${project.groupId}</groupId>
      <artifactId>${project-name}-war</artifactId>
      <version>${project.version}</version>
      <type>war</type>
    </dependency>
    <dependency>
      <groupId>${project.groupId}</groupId>
      <artifactId>${project-name}-ejb</artifactId>
      <version>${project.version}</version>
      <type>ejb</type>
    </dependency>
  </dependencies>

  <build>
    <finalName>HelloJBoss</finalName>
    <plugins>
      <plugin>
        <artifactId>maven-ear-plugin</artifactId>
        <version>2.3.2</version> <!-- important for data-sources -->
        <configuration>
          <jboss>
            <version>4.2</version>
            <data-sources>
              <data-source>db-ds.xml</data-source>
            </data-sources>
          </jboss>
          <modules>
            <webModule>
              <groupId>${project.groupId}</groupId>
              <artifactId>${project-name}-war</artifactId>
              <contextRoot>${project-name}</contextRoot>
            </webModule>
          </modules>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
{% endhighlight %}

### HelloJBoss-ejb/pom.xml

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" 
         xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <artifactId>HelloJBoss</artifactId>
    <groupId>vg.christophe.HelloJBoss</groupId>
    <version>0.7</version>
  </parent>

  <groupId>vg.christophe.HelloJBoss</groupId>
  <artifactId>HelloJBoss-ejb</artifactId>
  <version>0.7</version>
  <packaging>ejb</packaging>
  <name>Hello JBoss Bean</name>

  <dependencies>
    <dependency>
      <groupId>javax.ejb</groupId>
      <artifactId>ejb-api</artifactId>
      <version>3.0</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>

  <build>
    <finalName>HelloJBoss</finalName>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-ejb-plugin</artifactId>
        <configuration>
          <ejbVersion>3.0</ejbVersion>
        </configuration>
      </plugin>
    </plugins>
  </build>
  
</project>
{% endhighlight %}

### HelloJBoss-war/pom.xml

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" 
         xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <artifactId>HelloJBoss</artifactId>
    <groupId>vg.christophe.HelloJBoss</groupId>
    <version>0.7</version>
  </parent>

  <groupId>vg.christophe.HelloJBoss</groupId>
  <artifactId>HelloJBoss-war</artifactId>
  <version>0.7</version>
  <packaging>war</packaging>
  <name>Hello JBoss Webapp</name>

  <dependencies>
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>servlet-api</artifactId>
      <version>2.4</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>javax.ejb</groupId>
      <artifactId>ejb-api</artifactId>
      <version>3.0</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>${project.groupId}</groupId>
      <artifactId>${project-name}-ejb</artifactId>
      <version>${project.version}</version>
      <type>ejb</type>
      <scope>provided</scope>
    </dependency>
  </dependencies>

  <build>
    <finalName>HelloJBoss</finalName>
  </build>
</project>
{% endhighlight %}

### Action

{% highlight bash %}
$ mvn package
[INFO] Scanning for projects...
[INFO] Reactor build order: 
[INFO]   Hello JBoss
[INFO]   Hello JBoss Bean
[INFO]   Hello JBoss Webapp
[INFO]   Hello JBoss EAR
[INFO] ------------------------------------------------------------------------
...
[INFO] Building jar: /Users/xtof/Workspace/jboss/HelloJBoss/HelloJBoss-ear/target/HelloJBoss.ear
[INFO] 
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary:
[INFO] ------------------------------------------------------------------------
[INFO] Hello JBoss ........................................... SUCCESS [2.166s]
[INFO] Hello JBoss Bean ...................................... SUCCESS [2.240s]
[INFO] Hello JBoss Webapp .................................... SUCCESS [1.758s]
[INFO] Hello JBoss EAR ....................................... SUCCESS [0.826s]
[INFO] ------------------------------------------------------------------------
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESSFUL
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 7 seconds
[INFO] Finished at: Fri May 14 22:09:22 CEST 2010
[INFO] Final Memory: 29M/79M
[INFO] ------------------------------------------------------------------------

[xtof@RoadWarrion]$ cp /Users/xtof/Workspace/jboss/HelloJBoss/HelloJBoss-ear/target/HelloJBoss.ear /Users/xtof/Workspace/jboss/jboss-4.2.3.GA/server/default/deploy/

22:06:16,048 INFO  [EARDeployer] Init J2EE application: file:/Users/xtof/Workspace/jboss/jboss-4.2.3.GA/server/default/deploy/HelloJBoss.ear
22:06:16,204 INFO  [ConnectionFactoryBindingService] Bound ConnectionManager 'jboss.jca:service=DataSourceBinding,name=db' to JNDI name 'java:db'
22:06:16,214 INFO  [JmxKernelAbstraction] creating wrapper delegate for: org.jboss.ejb3.stateless.StatelessContainer
22:06:16,214 INFO  [JmxKernelAbstraction] installing MBean: jboss.j2ee:ear=HelloJBoss.ear,jar=HelloJBoss.jar,name=GreeterBean,service=EJB3 with dependencies:
22:06:16,219 INFO  [EJBContainer] STARTED EJB: vg.christophe.HelloJBoss.GreeterBean ejbName: GreeterBean
22:06:16,228 INFO  [EJB3Deployer] Deployed: file:/Users/xtof/Workspace/jboss/jboss-4.2.3.GA/server/default/tmp/deploy/tmp8437792112032132235HelloJBoss.ear-contents/HelloJBoss.jar
22:06:16,253 INFO  [TomcatDeployer] deploy, ctxPath=/HelloJBoss, warUrl=.../tmp/deploy/tmp8437792112032132235HelloJBoss.ear-contents/HelloJBoss-exp.war/
22:06:16,479 INFO  [EARDeployer] Started J2EE application: file:/Users/xtof/Workspace/jboss/jboss-4.2.3.GA/server/default/deploy/HelloJBoss.ear

[xtof@RoadWarrion]$ rm /Users/xtof/Workspace/jboss/jboss-4.2.3.GA/server/default/deploy/HelloJBoss.ear

22:07:01,536 INFO  [TomcatDeployer] undeploy, ctxPath=/HelloJBoss, warUrl=.../tmp/deploy/tmp8437792112032132235HelloJBoss.ear-contents/HelloJBoss-exp.war/
22:07:01,554 INFO  [EJBContainer] STOPPED EJB: vg.christophe.HelloJBoss.GreeterBean ejbName: GreeterBean
22:07:01,555 WARN  [JmxKernelAbstraction] jboss.j2ee:ear=HelloJBoss.ear,jar=HelloJBoss.jar,name=GreeterBean,service=EJB3 is not registered
22:07:01,565 INFO  [ConnectionFactoryBindingService] Unbound ConnectionManager 'jboss.jca:service=DataSourceBinding,name=db' from JNDI name 'java:db'
22:07:01,593 INFO  [EARDeployer] Undeploying J2EE application, destroy step: file:/Users/xtof/Workspace/jboss/jboss-4.2.3.GA/server/default/deploy/HelloJBoss.ear
22:07:01,594 INFO  [EARDeployer] Undeployed J2EE application: file:/Users/xtof/Workspace/jboss/jboss-4.2.3.GA/server/default/deploy/HelloJBoss.ear
{% endhighlight %}

## Step 8: Use JSF to generate the UI

We already separated the business logic into an EJB Bean. Time to upgrade our front-end a bit. 

Access the code for this step also @ [http://github.com/christophevg/HelloJBoss/tree/jsf](http://github.com/christophevg/HelloJBoss/tree/jsf)

### Project Structure

JSF is built on top of html pages, which in fact are servlets-tobe. Currently we still call our database from the servlet, which should be moved to the bean behind it. So let's replace the HelloServlet by two JSP's, move the database call to the GreeterBean and glue everything together with some very basic JSF stuff.

{% highlight bash %}
$ git rm HelloJBoss-war/src/main/java/vg/christophe/HelloJBoss/HelloServlet.java
$ touch HelloJBoss-war/src/main/webapp/greeting.jsp
$ touch HelloJBoss-war/src/main/webapp/hello.jsp
$ touch HelloJBoss-war/src/main/webapp/index.html
$ touch HelloJBoss-war/src/main/webapp/WEB-INF/faces-config.xml
{% endhighlight %}

### index.html

{% highlight html %}
<html:forward page="/hello.jsf"/>
{% endhighlight %}

### hello.jsp

{% highlight html %}
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>

<html>
<head>
  <title>Hello JBoss</title>
</head>  
<body>
  <f:view>
  <h:form id="helloForm" >
  <h2>Hi. I'm a JSF app.</h2>
  <h:commandButton id="submit" action="greeting" value="Hello ..." /> 
 </h:form>
</f:view>
</html>
{% endhighlight %}

### greeting.jsp

{% highlight html %}
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>

<html>
<head>
  <title>Hello JBoss Greeting Page</title>
</head>    
<body>
  <f:view>
  <h3><h:outputText value="#{GreeterBean.greeting}"/></h3>
</f:view>
</body>	
</html>
{% endhighlight %}

### faces-config.xml

{% highlight xml %}
<?xml version="1.0"?>
<!DOCTYPE faces-config PUBLIC
  "-//Sun Microsystems, Inc.//DTD JavaServer Faces Config 1.1//EN"
  "http://java.sun.com/dtd/web-facesconfig_1_1.dtd">

<faces-config>

  <managed-bean>
    <managed-bean-name>GreeterBean</managed-bean-name>
    <managed-bean-class>vg.christophe.HelloJBoss.GreeterBean</managed-bean-class>
    <managed-bean-scope>session</managed-bean-scope>
  </managed-bean>
  
  <navigation-rule>
    <from-view-id>/hello.jsp</from-view-id>
    <navigation-case>
      <from-outcome>greeting</from-outcome>
      <to-view-id>/greeting.jsp</to-view-id>
    </navigation-case>
  </navigation-rule>
  
</faces-config>
{% endhighlight %}

### Greeter.java

{% highlight java %}
package vg.christophe.HelloJBoss;

import javax.ejb.Local;

@Local
public interface Greeter {
  public String getGreeting();
}
{% endhighlight %}

### GreeterBean.java

{% highlight java %}
package vg.christophe.HelloJBoss;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import javax.ejb.EJB;
import javax.ejb.Stateless;

@Stateless
public class GreeterBean implements Greeter {

  public String getGreeting() { 
    try {
      return "Hello from EJB3 & JSF land, " + this.getFirstName()  
            + ", this is JBoss World!" ; 
    } catch( Exception e ) {
      throw new RuntimeException(e);
    }
  }

  private String getFirstName() throws NamingException, SQLException {
    final String sql = "SELECT * FROM info;";
    InitialContext context = new InitialContext();
    DataSource ds = (DataSource) context.lookup("java:db");
    Connection con = null;
    Statement stmt = null;
    ResultSet rs = null;
    try {
      con = ds.getConnection();
      stmt = con.createStatement();
      rs = stmt.executeQuery(sql);
      if(rs.next()) {
        return rs.getString(1);
      }
    } finally {
      if(rs != null) rs.close();
      if(stmt != null) stmt.close();
      if(con != null) con.close();
    }
    return "Nobody";
  }
}
{% endhighlight %}

### web.xml

{% highlight xml %}
<?xml version="1.0"?>
<web-app version="2.5" 
  xmlns="http://java.sun.com/xml/ns/javaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd">

  <!-- Faces Servlet -->
  <servlet>
    <servlet-name>Faces Servlet</servlet-name>
    <servlet-class>javax.faces.webapp.FacesServlet</servlet-class>
    <load-on-startup>1</load-on-startup>
  </servlet>

  <!-- Faces Servlet Mapping -->
  <servlet-mapping>
    <servlet-name>Faces Servlet</servlet-name>
    <url-pattern>*.jsf</url-pattern>
  </servlet-mapping>
  
  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
  </welcome-file-list>

</web-app>
{% endhighlight %}

### Action

![](images/full/HelloJBoss-JSF1.png)

![](images/full/HelloJBoss-JSF2.png)

## Step 9: Add interaction and Entities

With JSF in place, we can now bind input from the user to entity beans and map those to the database.

Access the code for this step also @ [http://github.com/christophevg/HelloJBoss/tree/entity](http://github.com/christophevg/HelloJBoss/tree/entity)

### Project Structure

{% highlight bash %}
$ mkdir -p HelloJBoss-model/src/main/java/vg/christophe/HelloJBoss
$ mkdir -p HelloJBoss-model/src/main/resources/META-INF
$ touch HelloJBoss-model/src/main/java/vg/christophe/HelloJBoss/User{,Respository,RepositoryBean}.java
$ mkdir -p HelloJBoss-model/src/main/resources/META-INF/persistence.xml
$ mkdir -p HelloJBoss-war/src/main/java/vg/christophe/HelloJBoss
$ touch HelloJBoss-war/src/main/java/vg/christophe/HelloJBoss/Controler.java
{% endhighlight %}

### User.java

{% highlight java %}
package vg.christophe.HelloJBoss;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name="users")
public class User implements Serializable {
  private String userName;
  private String realName;
  
  public User() {
    this.userName = "";
    this.realName = "";
  }
  
  @Id 
  public String getUserName() { 
    return this.userName; 
  }
  
  public void setUserName(String name) {
    this.userName = name;
  }

  public String getRealName() { 
    return this.realName; 
  }
  
  public void setRealName(String name) {
    this.realName = name;
  }
}
{% endhighlight %}

### UserRepository.java

{% highlight java %}
package vg.christophe.HelloJBoss;

import javax.ejb.Local;

@Local
public interface UserRepository {
  public User find(String id);
}
{% endhighlight %}

### UserRepositoryBean.java

{% highlight java %}
package vg.christophe.HelloJBoss;

import javax.ejb.*;
import javax.persistence.*;
import static javax.persistence.PersistenceContextType.EXTENDED;

@Stateless
public class UserRepositoryBean implements UserRepository {

  @PersistenceContext
  private EntityManager em;

  public User find(String username) {
    return (User) em.find(User.class, username);
  }

}
{% endhighlight %}

### persistence.xml

{% highlight xml %}
<persistence>
  <persistence-unit name="db">
    <provider>org.hibernate.ejb.HibernatePersistence</provider>
    <jta-data-source>java:/db</jta-data-source>
  </persistence-unit>
</persistence>
{% endhighlight %}

### HelloJBoss-model/pom.xml

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" 
         xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <artifactId>HelloJBoss</artifactId>
    <groupId>vg.christophe.HelloJBoss</groupId>
    <version>0.7</version>
  </parent>

  <groupId>vg.christophe.HelloJBoss</groupId>
  <artifactId>HelloJBoss-model</artifactId>
  <version>0.7</version>
  <packaging>ejb</packaging>
  <name>Hello JBoss Entity</name>

  <dependencies>
    <dependency>
      <groupId>javax.persistence</groupId>
      <artifactId>persistence-api</artifactId>
      <version>1.0</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>javax.ejb</groupId>
      <artifactId>ejb-api</artifactId>
      <version>3.0</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>

  <build>
    <finalName>HelloJBoss-model</finalName>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-ejb-plugin</artifactId>
        <configuration>
          <ejbVersion>3.0</ejbVersion>
        </configuration>
      </plugin>
    </plugins>
  </build>
  
</project>
{% endhighlight %}

### HelloJBoss-ejb/pom.xml

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" 
         xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <artifactId>HelloJBoss</artifactId>
    <groupId>vg.christophe.HelloJBoss</groupId>
    <version>0.7</version>
  </parent>

  <groupId>vg.christophe.HelloJBoss</groupId>
  <artifactId>HelloJBoss-ejb</artifactId>
  <version>0.7</version>
  <packaging>ejb</packaging>
  <name>Hello JBoss Bean</name>

  <dependencies>
    <dependency>
      <groupId>javax.ejb</groupId>
      <artifactId>ejb-api</artifactId>
      <version>3.0</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>${project.groupId}</groupId>
      <artifactId>${project-name}-model</artifactId>
      <version>${project.version}</version>
      <type>ejb</type>
      <scope>provided</scope>
    </dependency>
  </dependencies>

  <build>
    <finalName>HelloJBoss-ejb</finalName>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-ejb-plugin</artifactId>
        <configuration>
          <ejbVersion>3.0</ejbVersion>
        </configuration>
      </plugin>
    </plugins>
  </build>
  
</project>
{% endhighlight %}

### Greeter.java

{% highlight java %}
package vg.christophe.HelloJBoss;

import javax.ejb.Local;

@Local
public interface Greeter {
  public String greet(User user);
}
{% endhighlight %}

### GreeterBean.java

{% highlight java %}
package vg.christophe.HelloJBoss;

import javax.ejb.Stateless;

@Stateless
public class GreeterBean implements Greeter {

  public String greet(User user) {
    try {
      return "Hello from EJB3 & JSF land, " + 
            ( user != null ? user.getRealName() : "Mr. Unknown" )
            + ", this is JBoss World!" ; 
    } catch( Exception e ) {
      throw new RuntimeException(e);
    }
  }

}
{% endhighlight %}

### HelloJBoss-war/pom.xml

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" 
         xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <artifactId>HelloJBoss</artifactId>
    <groupId>vg.christophe.HelloJBoss</groupId>
    <version>0.7</version>
  </parent>

  <groupId>vg.christophe.HelloJBoss</groupId>
  <artifactId>HelloJBoss-war</artifactId>
  <version>0.7</version>
  <packaging>war</packaging>
  <name>Hello JBoss Webapp</name>

  <dependencies>
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>servlet-api</artifactId>
      <version>2.4</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>javax.ejb</groupId>
      <artifactId>ejb-api</artifactId>
      <version>3.0</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>${project.groupId}</groupId>
      <artifactId>${project-name}-model</artifactId>
      <version>${project.version}</version>
      <type>ejb</type>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>${project.groupId}</groupId>
      <artifactId>${project-name}-ejb</artifactId>
      <version>${project.version}</version>
      <type>ejb</type>
      <scope>provided</scope>
    </dependency>
  </dependencies>

  <build>
    <finalName>HelloJBoss</finalName>
  </build>
</project>
{% endhighlight %}

### faces-config.xml

{% highlight xml %}
<?xml version="1.0"?>
<!DOCTYPE faces-config PUBLIC
  "-//Sun Microsystems, Inc.//DTD JavaServer Faces Config 1.1//EN"
  "http://java.sun.com/dtd/web-facesconfig_1_1.dtd">

<faces-config>

  <managed-bean>
    <managed-bean-name>Greeter</managed-bean-name>
    <managed-bean-class>vg.christophe.HelloJBoss.Controler</managed-bean-class>
    <managed-bean-scope>request</managed-bean-scope>
  </managed-bean>
  
  <navigation-rule>
    <from-view-id>/hello.jsp</from-view-id>
    <navigation-case>
      <from-outcome>greeting</from-outcome>
      <to-view-id>/greeting.jsp</to-view-id>
    </navigation-case>
  </navigation-rule>
  
</faces-config>
{% endhighlight %}

### hello.jsp

{% highlight html %}
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>

<html>
<head>
  <title>Hello JBoss</title>
</head>  
<body>
  <f:view>
  <h:form id="helloForm" >
  <h2>Hi. I'm a JSF app.</h2>
  <p>What is your username ?<br/>
    <h:inputText id="title" value="#{Greeter.user.userName}" size="15"/>
  </p>
  <h:commandButton id="submit" action="greeting" value="Hello ..." /> 
 </h:form>
</f:view>
</html>
{% endhighlight %}

### greeting.jsp

{% highlight html %}
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>

<html>
<head>
  <title>Hello JBoss Greeting Page</title>
</head>    
<body>
  <f:view>
  <h3><h:outputText value="#{Greeter.greet}"/></h3>
  <br><br>
  <a href="/HelloJBoss">&lt;&lt; back</a>
</f:view>
</body>	
</html>
{% endhighlight %}

### HelloJBoss-ear/pom.xml

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" 
         xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <artifactId>HelloJBoss</artifactId>
    <groupId>vg.christophe.HelloJBoss</groupId>
    <version>0.7</version>
  </parent>

  <groupId>vg.christophe.HelloJBoss</groupId>
  <artifactId>HelloJBoss-ear</artifactId>
  <version>0.7</version>
  <packaging>ear</packaging>
  <name>Hello JBoss EAR</name>

  <dependencies>
    <dependency>
      <groupId>${project.groupId}</groupId>
      <artifactId>${project-name}-model</artifactId>
      <version>${project.version}</version>
      <type>ejb</type>
    </dependency>
    <dependency>
      <groupId>${project.groupId}</groupId>
      <artifactId>${project-name}-ejb</artifactId>
      <version>${project.version}</version>
      <type>ejb</type>
    </dependency>
    <dependency>
      <groupId>${project.groupId}</groupId>
      <artifactId>${project-name}-war</artifactId>
      <version>${project.version}</version>
      <type>war</type>
    </dependency>
  </dependencies>

  <build>
    <finalName>HelloJBoss</finalName>
    <plugins>
      <plugin>
        <artifactId>maven-ear-plugin</artifactId>
        <version>2.3.2</version> <!-- important for data-sources -->
        <configuration>
          <jboss>
            <version>4.2</version>
            <data-sources>
              <data-source>db-ds.xml</data-source>
            </data-sources>
          </jboss>
          <modules>
            <webModule>
              <groupId>${project.groupId}</groupId>
              <artifactId>${project-name}-war</artifactId>
              <contextRoot>${project-name}</contextRoot>
            </webModule>
          </modules>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
{% endhighlight %}

### pom.xml

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">

  <modelVersion>4.0.0</modelVersion>

  <groupId>vg.christophe.HelloJBoss</groupId>
  <artifactId>HelloJBoss</artifactId>
  <packaging>pom</packaging>
  <version>0.7</version>
  <name>Hello JBoss</name>
  <url>http://christophe.vg/HelloJBoss</url>
  
  <developers>
    <developer>
      <id>xtof</id>
      <name>Christophe VG</name>
      <organizationUrl>http://christophe.vg</organizationUrl>
    </developer>
  </developers>

  <modules>
    <module>HelloJBoss-model</module>
    <module>HelloJBoss-ejb</module>
    <module>HelloJBoss-war</module>
    <module>HelloJBoss-ear</module>
  </modules>
  
  <properties>
    <project-name>HelloJBoss</project-name>
  </properties>
  
  <build>
    <plugins>
      <plugin>
        <artifactId>maven-compiler-plugin</artifactId> <configuration>
        <source>1.6</source>
        <target>1.6</target> </configuration>
      </plugin>
    </plugins>
  </build>
  
</project>
{% endhighlight %}

### Action

![](images/full/HelloJBoss-entity1.png)

![](images/full/HelloJBoss-entity2.png)

## Step 10: Add a REST interface

Everything's a web service these days, and when applied correctly it's a good thing. 

Access the code for this step also @ [http://github.com/christophevg/HelloJBoss/tree/rest](http://github.com/christophevg/HelloJBoss/tree/rest)

*Work-in-progress*

## Step ...: Integrate everything using the SEAM Framework

The SEAM Framework integrates most of the technologies we've picked up so far and adds some more in the mix.

Access the code for this step also @ [http://github.com/christophevg/HelloJBoss/tree/seam](http://github.com/christophevg/HelloJBoss/tree/seam)

*Work-in-progress*
