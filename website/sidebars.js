module.exports = {
  docsSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "intro",
    },
    "quickstart",
    {
      type: "category",
      label: "指南",
      link: {
        type: "generated-index",
        // title: "Docusaurus Guides",
        // description:
        //   "Let's learn about the most important Docusaurus concepts!",
        // keywords: ["guides"],
        // image: "/img/docusaurus.png",
      },
      collapsed: false,
      items: [
        "guides/introduction",
        "guides/formula",
        {
          type: "category",
          label: "题型",
          link: {
            // type: "generated-index",
            type: "doc",
            id: "guides/questions/index",
          },
          items: ["guides/questions/radio"],
        },
        {
          type: "category",
          label: "自定义逻辑",
          link: {
            type: "doc",
            id: "guides/logic/introduction",
          },
          items: [
            "guides/logic/show",
            "guides/logic/jump",
            "guides/logic/validate",
            "guides/logic/calculate",
            "guides/logic/replaceText",
            "guides/logic/redirect",
          ],
        },
        "guides/public_query",
        "guides/custom_field",
      ],
    },
    "faq",
    "changelog",
  ],

  apiSidebar: [
    {
      type: "autogenerated",
      dirName: "api",
    },
  ],
};
