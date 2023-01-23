const urls = require("./urls-mapping.js");
const sidebarUrls = require("./sidebar-urls");
const _slugify = require('@vuepress/shared-utils/lib/slugify');

const slugifyLinks = (s) => {
  if (sidebarUrls[s]) {
    return sidebarUrls[s];
  }
  return _slugify(s);
};

// set your global autometa options
const autoMetaOptions = {
  site: {
    name   : 'CloudLinux OS Documentation',
    // twitter: 'cl_docs',
  },
  canonical_base: 'https://docs.cloudlinux.com/',
};

module.exports = {
  plugins: [
    ['container', {
      type: 'warning',
      before: info => `<div class="warning custom-block"><p class="custom-block-title">${info}</p>`,
      after: '</div>',
    }],
    ['container', {
      type: 'tip',
      before: info => `<div class="tip custom-block"><p class="custom-block-title">${info}</p>`,
      after: '</div>',
    }],
    ['container', {
      type: 'danger',
      before: info => `<div class="danger custom-block"><p class="custom-block-title">${info}</p>`,
      after: '</div>',
    }],
//    ['disqus-spa', { shortname: 'docscloudlinuxcom' }],
    ['@vuepress/google-analytics',
      {
        'ga': 'UA-12711721-15'
      }
    ],
    [ 'autometa', autoMetaOptions ]
//	,
//    [ 'separate-pages', { alwaysVisibleBlocks: ['#disqus_thread'] } ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  base: "/",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
    ],
    [
      "meta",
      {
        "http-equiv": "Content-Security-Policy",
        content: "script-src 'self' 'unsafe-inline' 'unsafe-inline' 'unsafe-eval' *.survicate.com *.googletagmanager.com *.google-analytics.com *.licdn.com *.hotjar.com *.twitter.com *.facebook.net *.kernelcare.info *.twitter.com *.ads-twitter.com;"
      }
    ],
    [
      "meta",
      {
        name: "referrer",
        content: "unsafe-url"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ],
    [
      "script",
      {},
      `(function(w) {
var s = document.createElement('script');
s.src = 'https://survey.survicate.com/workspaces/8e05b856a98802352b97e8fd3118de1f/web_surveys.js';
s.async = true;
var e = document.getElementsByTagName('script')[0];
e.parentNode.insertBefore(s, e);
})(window);`
    ],
    [
      "script",
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T538N4K');`
    ]
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Documentation",
      description: "CloudLinux OS Shared Documentation"
    },
//    "/ru/": {
//      lang: "ru",
//      title: "Документация",
//      description: "Документация CloudLinux"
//    }
  },
  theme: "cloudlinux",
  markdown: {
    slugify: slugifyLinks,
    toc: {
      slugify: slugifyLinks,
    }
  },

  themeConfig: {
    repo: "cloudlinux/cloudlinux-doc",
    editLinks: true,
    docsBranch: "dev",
    docsDir: "docs",
    
    translationSource: 'docs.cloudlinux.com',
    defaultURL: "/introduction/",
    submitRequestURL: "https://www.cloudlinux.com/support-portal/",
    hideHeading: true,
    redirectionMapping: urls,
    sidebarDepth: 2,
    logo: "/logo.svg",
    try_free: "https://cloudlinux.com/trial",

    social: [
      { url: "https://www.facebook.com/cloudlinux/", logo: "/fb.png" },
      { url: "https://twitter.com/cloudlinuxos/", logo: "/tw.png" },
      { url: "https://linkedin.com/company/cloudlinux", logo: "/in.png" },
      {
        url: "https://www.youtube.com/channel/UCZ3YMHWnMP7TaxlXVay5-aw",
        logo: "/ytube.png"
      }
    ],
    cloudlinuxSite: "https://cloudlinux.com",
    locales: {
      "/": {
        stayInTouch: "Stay in touch",
        bottomLinks: [
          {
            text: "How to",
            url:
              "https://cloudlinux.zendesk.com/hc/en-us/categories/360002375940"
          },
          {
            text: "Getting started",
            url: "https://www.cloudlinux.com/getting-started-with-cloudlinux-os"
          },
          {
            text: "Submit request",
            url: "https://cloudlinux.zendesk.com/hc/en-us/requests/new"
          },
          { text: "Blog", url: "https://blog.cloudlinux.com/" },
          { text: "CloudLinux OS Solo Documentation", url: "https://docs.solo.cloudlinux.com/" }
        ],

        // text for the language dropdown title
        title: "Language",
        // text for the language dropdown
        selectText: "En",
        // label for this locale in the language dropdown
        label: "English",
        // text for the edit-on-github link
        editLinkText: "Edit this page",
        tryFree: "Try Free",
        submitRequest: "Support Portal",
        search: "Search",
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {
          apiKey: "e6b9d79daf71aa98e2e2a51d4556f9d4",
          indexName: "cloudlinuxos",
          appId: "0TCNL6CGX8"
        },

        sidebar: [
          {
            title: "Content",
            collapsable: false,
            children: [
              "/introduction/",
              "/cloudlinux_installation/",
              "/elevate/",
              "/limits/",
              "/lve_manager/",
              "/cloudlinux-os-plus/",
              "/cloudlinux-os-admin/",
              "/cloudlinux_os_components/",
              "/command-line_tools/",
              "/control_panel_integration/",
              "/cloudlinux_os_kernel/",
              "/for_cloudlinux_partners/",
              "/deprecated/"
            ]
          }
        ]
      },
//      "/ru/": {
//        title: "Язык",
//        selectText: "Рус",
//        label: "Русский",
//        editLinkText: "Редактировать",
//        tryFree: "Попробовать бесплатно",
//        search: "Поиск",
//        serviceWorker: {
//          updatePopup: {
//            message: "Доступен новый контент",
//            buttonText: "Обновить"
//          }
//        },
//        algolia: {
//          apiKey: "3990019335416f9a96a6a47d07e25187",
//          indexName: "cloudlinuxos-ru",
//          appId: "0TCNL6CGX8"
//        },
//        stayInTouch: "Будем на связи",
//        bottomLinks: [
//            {
//                text: "Инструкции",
//                url: "https://cloudlinux.zendesk.com/hc/sections/115001344329-How-do-I"
//            },
//            {
//                text: "С чего начать",
//                url: "https://www.cloudlinux.com/getting-started-with-cloudlinux-os"
//            },
//            {
//                text: "Техподдержка",
//                url: "https://hubs.ly/H0pk7990"
//            },
//            { text: "Блог", url: "https://www.cloudlinux.com/blog" }
//        ],
//        sidebar: [
//          {
//            title: "Содержание",
//            collapsable: false,
//            children: [
//              "/ru/introduction/",
              // "/ru/cloudlinux_installation/",
              // "/ru/limits/",
              // "/ru/lve_manager/",
              // "/ru/cloudlinux-os-plus/",
              // "/ru/cloudlinux_os_components/",
              // "/ru/command-line_tools/",
              // "/ru/control_panel_integration/",
              // "/ru/cloudlinux_os_kernel/",
//              "/ru/for_cloudlinux_partners/"
              // "/ru/deprecated/"
//            ]
//          }
//        ]
//      }
    }
  }
};
