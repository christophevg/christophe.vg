---
title: PInvoke Hello World
---

## the library: hello.c

{% highlight c %}
  #include <stdio.h>;

  void say_hello( char* name ) {
    printf( "hello %s, welcome to the unmanaged world\n", name );
  }
{% endhighlight %}

## the header: hello.h

{% highlight c %}
  void say_hello( char* );
{% endhighlight %}

## the C caller: caller.c

{% highlight c %}
  #include <stdio.h>
  #include "hello.h"

  int main(int argc, char* argv[]) {
    if( argc > 1 ) {
      say_hello( argv[1] );
    } else {
      say_hello( "Stranger" );
    }
    return 0;
  }
{% endhighlight %}

## the C# caller: caller.cs

{% highlight csharp %}
  using System;
  using System.IO;
  using System.Runtime.InteropServices;

  struct my_wrapper {
    [DllImport ("libhello.so.1.0.1")]
    public static extern void say_hello( String name );
  };

  class caller {

    public static void Main( String[] args ) {
      if( args.Length > 0 ) {
        my_wrapper.say_hello( args[0] );
      } else {
        my_wrapper.say_hello( "Stranger" );
      }
    }
  };
{% endhighlight %}

## the Makefile

{% highlight basemake %}
  CC=gcc
  CFLAGS=-fPIC

  all: clean libs mono

  mono: caller.exe
          mono $<
          mono $< "Mr. Mono"

  %.exe: %.cs
          mcs $<

  libs: static_caller dynamic_caller
          ./static_caller
          ./static_caller "Mr. Static"
          ./dynamic_caller
          ./dynamic_caller "Mr. Dynamic"

  static_caller: hello.a caller.c
          ${CC} -static caller.c -L. -lhello -o $@

  dynamic_caller: hello.so caller.c
          gcc caller.c -o $@ -L. -lhello

  %.a: %.o
          ar rcs lib$@ $<

  %.o: %.c
          ${CC} ${CFLAGS} -c $< -o $@

  %.so: %.o
          ${CC} -shared -Wl,-soname,lib$@.1 -o lib$@.1.0.1  $<

  .PHONY: clean
  clean:
          @rm -f *~
          @rm -f *.o *.a

  dist: clean
          @rm -f *.so*
          @rm -f *.exe
          @rm -f *_caller
{% endhighlight %}

## Action!

{% highlight bash %}
$ ls
caller.c  caller.cs  hello.c  hello.h  Makefile  README

$ make
gcc -fPIC -c hello.c -o hello.o
ar rcs libhello.a hello.o
gcc -static caller.c -L. -lhello -o static_caller
gcc -shared -Wl,-soname,libhello.so.1 -o libhello.so.1.0.1  hello.o
gcc caller.c -o dynamic_caller -L. -lhello
./static_caller
hello Stranger, welcome to the unmanaged world
./static_caller "Mr. Static"
hello Mr. Static, welcome to the unmanaged world
./dynamic_caller
hello Stranger, welcome to the unmanaged world
./dynamic_caller "Mr. Dynamic"
hello Mr. Dynamic, welcome to the unmanaged world
mcs caller.cs
mono caller.exe
hello Stranger, welcome to the unmanaged world
mono caller.exe "Mr. Mono"
hello Mr. Mono, welcome to the unmanaged world
rm hello.o

$ ls
caller.c   caller.exe      hello.c  libhello.a        Makefile  static_caller
caller.cs  dynamic_caller  hello.h  libhello.so.1.0.1  README
{% endhighlight %}

## Links

* [http://www.adp-gmbh.ch/cpp/gcc/create_lib.html](http://www.adp-gmbh.ch/cpp/gcc/create_lib.html)
* [http://www.gnu.org/software/make/manual/html_mono/make.html](http://www.gnu.org/software/make/manual/html_mono/make.html)
* [http://www.mono-project.com/Interop_with_Native_Libraries](http://www.mono-project.com/Interop_with_Native_Libraries)
