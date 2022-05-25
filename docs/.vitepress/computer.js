const collapsable = true;
export default {
  "/基础/计算机组成/": [
    {
      text: "位运算",
      link: "/基础/计算机组成/位运算",
    },
  ],
  "/基础/编译原理/": [
    {
      text: "编译原理",
      link: "/基础/编译原理/",
    },
  ],
  "/基础/网络原理/": [
    {
      text: "DNS",
      link: "/基础/网络原理/DNS/dns",
    },
    {
      text: "TCP",
      link: "/基础/网络原理/TCP/tcp",
    },
    {
      text: "HTTP",
      link: "/基础/网络原理/HTTP",
      children: [
        {
          text: "http",
          link: "/基础/网络原理/HTTP/http",
        },
        {
          text: "http2、http3",
          link: "/基础/网络原理/HTTP/http2、http3",
        },
        {
          text: "https",
          link: "/基础/网络原理/HTTP/https",
        },
        {
          text: "缓存",
          link: "/基础/网络原理/HTTP/缓存",
        },
      ],
    },
  ],
  "/基础/数据结构与算法/": [
    {
      text: "数据结构",
      link: "/基础/数据结构与算法/数据结构",
      children: [
        {
          text: "数组",
          link: "/基础/数据结构与算法/数据结构/数组/",
        },
        {
          text: "队列",
          link: "/基础/数据结构与算法/数据结构/队列/",
        },
        {
          text: "栈",
          link: "/基础/数据结构与算法/数据结构/栈/",
        },
        {
          text: "链表",
          link: "/基础/数据结构与算法/数据结构/链表/",
        },
        {
          text: "集合",
          link: "/基础/数据结构与算法/数据结构/集合/",
          children: [
              {
                text: "Set",
                link: "/基础/数据结构与算法/数据结构/集合/Set",
              },
              {
                text: "Map",
                link: "/基础/数据结构与算法/数据结构/集合/Map",
              }
          ]
        },
        {
          text: "树",
          link: "/基础/数据结构与算法/数据结构/树/",
        },
        {
          text: "图",
          link: "/基础/数据结构与算法/数据结构/图/",
        },
      ],
    },
    {
      text: "算法",
      link: "/基础/数据结构与算法/算法",
      children: [
        {
          text: "动态规划",
          link: "/基础/数据结构与算法/算法/动态规划",
        },
        {
          text: "贪心算法",
          link: "/基础/数据结构与算法/算法/贪心算法",
        },
        {
          text: "回溯法",
          link: "/基础/数据结构与算法/算法/回溯法",
        },
        {
          text: "递归",
          link: "/基础/数据结构与算法/算法/递归",
        },
      ],
    },
  ],
};
