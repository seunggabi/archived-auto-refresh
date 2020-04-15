const KEYS = ["url", "count", "period"];

const data = {
  default: {
    style: "",
    className: "",
  },
  review: {
    className: "red bold",
    urls: [
      {
        name: "Chrome",
        url: "https://chrome.google.com/webstore/detail/autorefresh/kpblfhpdgghcabcfkndaicjhkppckdfk",
      },
      {
        name: "Whale",
        url: "https://store.whale.naver.com/detail/dmfiihebfllgebodghhgbldipmpiehem",
      },
      {
        name: "Toonation",
        url: "https://toon.at/donate/637225213338784448",
      }
    ]
  },
  project: [
    {
      name: "Smart Boook",
      urls: [
        {
          name: "click",
          url: "http://smartboook.com/",
        }
      ],
      className: "bold",
      style: "",
    },
    {
      name: "Auto Skip",
      urls: [
        {
          name: "Whale",
          url: "https://store.whale.naver.com/detail/elgcmjohjpjgmogomciohcdgofjmddaj",
        }
      ],
      className: "bold",
      style: "",
    },
    {
      name: "Auto Refresh",
      urls: [
        {
          name: "Chrome",
          url: "https://chrome.google.com/webstore/detail/autorefresh/kpblfhpdgghcabcfkndaicjhkppckdfk",
        },
        {
          name: "Whale",
          url: "https://store.whale.naver.com/detail/dmfiihebfllgebodghhgbldipmpiehem",
        }
      ],
      className: "bold",
      style: "",
    },
    {
      name: "Instagram Follower Count",
      urls: [
        {
          name: "click",
          url: "https://seunggabi.tistory.com/entry/insta-follwer-%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%ED%8C%94%EB%A1%9C%EC%9B%8C-%EC%88%98-%EC%B9%B4%EC%9A%B4%ED%8A%B8-%EB%B4%87",
        }
      ],
      className: "bold",
      style: "",
    },
  ]
};

const doms = {
  link_wrapper: '<div class="link-wrapper"></div>',
  a: '<a href="#" target="_blank" class="padding-left-3"></a>',
  li: '<li>'
};