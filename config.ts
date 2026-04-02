interface Site {
  sst: string;
  url: string;
  title: string;
  github: string;
  discord: string;
  description: string;
}

export const SITE: Site = {
  title: "OpenNext 中文文档",
  sst: "https://sst.dev",
  url: "https://opennext.zhcndoc.com",
  github: "https://github.com/opennextjs",
  discord: "https://discord.gg/opennextjs",
  description: "开源的 Next.js 适配器，支持 SST、Next.js 和 Vercel 平台",
};
