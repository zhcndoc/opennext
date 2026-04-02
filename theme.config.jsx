import { SITE } from "./config";
import { useConfig } from "nextra-theme-docs";

import Footer from "./components/Footer";
import Logo from "./components/Logo.svg";

function DocsMain({ children }) {
  return (
    <>
      {children}
      <div
        className="wwads-cn wwads-horizontal"
        style={{ marginTop: "1rem", marginBottom: "1rem", maxWidth: "100%" }}
        data-id="354"
      />
    </>
  );
}

function TocWithAd({ headings, filePath }) {
  const config = useConfig();
  const items = headings.filter((heading) => heading.depth > 1);

  return (
    <div className="nextra-scrollbar nx-sticky nx-top-16 nx-max-h-[calc(100vh-var(--nextra-navbar-height)-env(safe-area-inset-bottom))] nx-overflow-y-auto nx-pr-4 nx-pt-6 nx-text-sm [hyphens:auto] ltr:-nx-mr-4 rtl:-nx-ml-4">
      <div
        className="wwads-cn wwads-vertical"
        style={{ marginTop: 0, marginBottom: "1rem", maxWidth: 200 }}
        data-id="354"
      />
      <p className="nx-mb-4 nx-mt-6 nx-font-semibold nx-tracking-tight">
        {config.toc.title}
      </p>
      <ul>
        {items.map(({ id, value, depth }) => (
          <li key={id} className={depth === 2 ? "nx-mb-2" : "nx-mb-1 nx-ml-4"}>
            <a
              href={`#${id}`}
              className={[
                "nx-block nx-truncate nx-transition-colors",
                depth === 2
                  ? "nx-font-medium nx-text-gray-700 dark:nx-text-gray-200"
                  : "nx-text-gray-500 dark:nx-text-gray-400",
              ].join(" ")}
            >
              {config.toc.headingComponent
                ? config.toc.headingComponent({ id, children: value })
                : value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  logo: <Logo />,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  docsRepositoryBase: `https://github.com/zhcndoc/opennext/tree/main`,
  project: {
    link: SITE.github,
  },
  chat: {
    link: SITE.discord,
  },
  footer: {
    text: <Footer />,
  },
  navigation: {
    prev: false,
    next: false,
  },
  feedback: {
    useLink: () => SITE.github,
  },
  main: DocsMain,
  toc: {
    backToTop: false,
    component: TocWithAd,
    float: true,
    title: "本页内容",
  },
  head: <script async src="https://www.zhcndoc.com/js/common.js" />,
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    return {
      additionalLinkTags: [
        {
          href: "/favicon-light.png",
          rel: "icon",
        },
      ],
      titleTemplate: "%s - OpenNext 中文文档",
      description: frontMatter.description || "开源的 Next.js 适配器，支持 SST、Next.js 和 Vercel 平台",
      openGraph: {
        titleTemplate: "%s - OpenNext 中文文档",
        images: [
          {
            url: frontMatter.image || "/share.png",
          },
        ],
      },
      twitter: {
        cardType: "summary_large_image",
        site: SITE.url,
      },
    };
  },
};
