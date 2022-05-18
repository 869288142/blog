# TCP

TCP（Transmission Control Protocol，传输控制协议）

## 特点

* 可靠

* 面向连接

## 实现

**三次握手和四次挥手是TCP可靠的保证**

### 三次握手


**基础规范**

1) A --> B  SYN my sequence number is X 
2) A <-- B  ACK your sequence number is X 
3) A <-- B  SYN my sequence number is Y 
4) A --> B  ACK your sequence number is Y


可以看到2-3步都是B发送给A，可以合并

**单词缩写**

* **SYN** - 同步序列编号（Synchronize Sequence Numbers）

* **ACK** -  确认字符  (Acknowledge character）

* **ISN** - 初始序列号（ initial sequence number ISN）


**连接过程**

1. 客户端（通过执行`connect`函数）向服务器端发送一个**SYN**包，请求一个主动打开。该包携带客户端为这个连接请求而设定的随机数**ISN(c)**作为消息序列号。

2. 服务器端收到一个合法的**SYN**包后，把该包放入**SYN**队列中；回送一个**SYN/ACK**。**ACK**的确认码应为**ISN(c) + 1**，**SYN/ACK**包本身携带一个随机产生的序号**ISN(b) + 1**。

3. 客户端收到**SYN/ACK**包后，发送一个**ACK**包，该包的序号被设定为**ISN(c) + 1**，而**ACK**的确认码则为**ISN(b) + 1**。然后客户端的`connect`函数成功返回。


### 四次挥手

1. **客户端发送给服务器**。客户端以**FIN=1**, **seq=u** 的形式发送给服务器，表示需要关闭客户端和服务器的数据传输。此时客户端处于 **FIN_WAIT** 状态。

2. **服务器发送给客户端**。服务器收到信息，先返回 **ACK** 给客户端，即以 **ACK=1**, **seq=v**, **ack=u+1** 的形式返回给客户端，表示收到客户端报文了。此时服务器处于 **CLOST_WAIT** 状态。

3. **服务器发送给客户端**。服务器等待一会，看客户端还有没有数据没发过来，等处理完这些数据之后，也想断开连接了，于是发送 **FIN** 给客户端，即以 **FIN=1**, **ACK=1**, **seq=w**, **ack=u+1** 的形式发送给客户端。此时服务器处于 **LAST_ACK** 状态。

4. **客户端发送给服务器**。客户端收到 **FIN** 之后，返回 **ACK** 报文作为应答，即以 **ACK=1**, **seq=w+1** 的形式发送给服务器。此时客户端处于 **TIME_WAIT** 状态。