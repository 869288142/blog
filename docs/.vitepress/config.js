import htmlSidebar from "./html";
import cssSidebar from "./css";
import jsSidebar from "./js";
import tsSidebar from "./ts";
import fronendFramework from "./fronendFramework";
import computer from "./computer";
import frontendProject from "./frontendProject";
import arch from "./arch";
const collapsable = true;
let browserSidebar = {
  "/前端/前端基础/browser/": [
    {
      text: "ajax", // 侧边栏名称
      collapsable,
      children: [
        {
          text: "ajax",
          link: "/前端/前端基础/browser/ajax/ajax",
        },
      ],
    },
    {
      text: "bom", // 侧边栏名称
      collapsable,
      children: [],
    },
    {
      text: "dom", // 侧边栏名称
      collapsable,
      children: [
        {
          text: "事件",
          link: "/前端/前端基础/browser/dom/事件",
        },
      ],
    },
    {
      text: "跨域", // 侧边栏名称
      collapsable,
      children: [
        {
          text: "jsonp",
          link: "/前端/前端基础/browser/跨域/jsonp",
        },
        {
          text: "跨域",
          link: "/前端/前端基础/browser/跨域/跨域",
        },
      ],
    },
    {
      text: "存储", // 侧边栏名称
      collapsable,
      children: [
        {
          text: "存储",
          link: "/前端/前端基础/browser/存储/存储",
        },
      ],
    },
    {
      text: "开发者工具", // 侧边栏名称
      collapsable,
      children: [
        {
          text: "开发者工具",
          link: "/前端/前端基础/browser/调试技巧/开发者工具",
        },
      ],
    },
  ],
};
let config = {
  themeConfig: {
    nav: [
      {
        text: "计算机基础",
        items: [
          { text: "计算机组成原理", link: "/基础/计算机组成/" },
          { text: "编译原理", link: "/基础/编译原理/" },
          { text: "计算机网络原理", link: "/基础/网络原理/" },
          { text: "数据结构与算法", link: "/基础/数据结构与算法/" },
        ],
      },
      {
        text: "前端",
        items: [
          { text: "browser", link: "/前端/前端基础/browser/" },
          { text: "HTML", link: "/前端/前端基础/HTML/" },
          { text: "CSS", link: "/前端/前端基础/css/" },
          { text: "JS", link: "/前端/前端基础/JS/" },
          { text: "前端框架", link: "/前端/前端基础/前端框架/" },
        ],
      },
      {
        text: "前端工程化",
        items: [
          { text: "代码规范", link: "/前端/前端工程化/代码规范/" },
          { text: "代码质量", link: "/前端/前端工程化/代码质量/" },
          { text: "开发效率", link: "/前端/前端工程化/开发效率/" },
          { text: "性能优化", link: "/前端/前端工程化/性能优化/" },
          { text: "开发流程", link: "/前端/前端工程化/开发流程/" },
        ],
      },
      {
        text: "架构",
        link: "/基础/架构/",
      },
    ],
    sidebar: {
      ...htmlSidebar,
      ...cssSidebar,
      ...jsSidebar,
      ...browserSidebar,
      ...tsSidebar,
      ...fronendFramework,
      ...computer,
      ...frontendProject,
      ...arch,
    },
  },
  base: "/blog/",
};

export default config;
