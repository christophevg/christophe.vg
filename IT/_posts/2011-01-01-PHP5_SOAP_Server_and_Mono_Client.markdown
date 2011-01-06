---
layout: post
title: PHP5 SOAP Server and Mono Client
---
### the WSDL file

{% highlight xml %}
<?xml version="1.0"?>

<definitions name="TestService"
             targetNamespace="urn:TestService"
             xmlns:typens="urn:TestService"
             xmlns:xsd="http://www.w3.org/2001/XMLSchema"
             xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
             xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/"
             xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/"
             xmlns="http://schemas.xmlsoap.org/wsdl/">

  <message name="GetMsg">
    <part name="msg"            type="xsd:string"/>
  </message>

  <message name="GetMsgResponse">
    <part name="return"         type="xsd:string"/>
  </message>

  <portType name="TestServicePort">

    <operation name="GetMsg">
      <input message="typens:GetMsg"/>
      <output message="typens:GetMsgResponse"/>
    </operation>

  </portType>

  <binding name="TestServiceBinding" type="typens:TestServicePort">
    <soap:binding style="rpc"
                  transport="http://schemas.xmlsoap.org/soap/http"/>

    <operation name="GetMsg">
      <soap:operation soapAction="urn:TestServiceAction"/>
      <input>
        <soap:body use="encoded"
                   namespace="urn:TestService"
                   encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>
      </input>
      <output>
        <soap:body use="encoded"
                   namespace="urn:TestService"
                   encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>
      </output>
    </operation>
  </binding>

  <service name="TestService">
    <port name="TestServicePort" binding="typens:TestServiceBinding">
      <soap:address location="http://localhost/soap/TestService.php5"/>
    </port>
  </service>

</definitions>
{% endhighlight %}

### the TestService.php

{% highlight php %}
<?

class TestService {

  function GetMsg($question) { 
    return "Q: $question\nA: Hello TestClient!";
  }

} 

ini_set("soap.wsdl_cache_enabled", "0"); // disabling WSDL cache 
$server = new SoapServer("TestService.wsdl"); 
$server->setClass("TestService"); 
$server->handle(); 

?>
{% endhighlight %}

### the TestClient.php

{% highlight php %}
<?

  $client = new SoapClient("TestService.wsdl"); 
  print($client->GetMsg("Hello TestService!")); 

?>
{% endhighlight %}

### the TestClient.cs

{% highlight csharp %}
using System;
 
class TestClient {
  public static void Main(string [] args) {
    
    TestService service = new TestService();
    String response = service.GetMsg("Hello TestService!");

    if( response == null ) {
      Console.WriteLine("[No response]");
    } else  {
      Console.WriteLine(response);
    }
  }
}
{% endhighlight %}

### the Makefile

{% highlight basemake %}
all: run

run: TestService.dll TestClient.exe
    mono TestClient.exe

%.exe: TestService.dll TestClient.cs
    mcs /r:TestService.dll TestClient.cs

%.dll: %.cs
    mcs /target:library /r:System.Web.Services.dll $<

%.cs: %.wsdl
    wsdl -nologo $<

clean:
    rm -f *~ *.exe *.dll TestService.cs
{% endhighlight %}

### Action !

{% highlight bash %}
$ ls
Makefile         TestClient.php   TestService.wsdl
TestClient.cs    TestService.php

$ make
wsdl -nologo TestService.wsdl
Writing file 'TestService.cs'
mcs /target:library /r:System.Web.Services.dll TestService.cs
mcs /r:TestService.dll TestClient.cs
mono TestClient.exe
Q: Hello TestService!
A: Hello TestClient!
rm TestService.cs
{% endhighlight %}
  
### References

* [http://www.zend.com/php5/articles/php5-SOAP.php#Heading8](http://www.zend.com/php5/articles/php5-SOAP.php#Heading8)
* [http://www.mono-project.com/Web_Services](http://www.mono-project.com/Web_Services)
