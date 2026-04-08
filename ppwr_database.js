window.PPWR_DB = {
  meta: {
    title: "PPWR 材料与设计核查库",
    subtitle: "按材料、场景、判断逻辑、专题问题和 Article 顺序进行点击核查",
    regulation: "Regulation (EU) 2025/40",
    oj: "OJ L, 2025/40, 22.1.2025",
    updatedAt: "2026-04-08",
    note: "英文内容为核查型关键摘录与压缩表达，中文为工作翻译与实务解读，用于快速比对正式条文。最终判断仍应以欧盟官方发布的法规原文为准。"
  },
  sourceLinks: [
    {
      label: "PPWR 官方法规原文（欧盟法律数据库）",
      href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32025R0040"
    },
    {
      label: "PPWR 法规摘要（欧盟法律数据库）",
      href: "https://eur-lex.europa.eu/legal-content/en/LSU/?uri=CELEX:32025R0040"
    }
  ],
  materials: [
    {
      id: "glass",
      family: "非塑料",
      category: "Annex II Table 1 - Category 1",
      name: "玻璃",
      interpretation: "玻璃原则上可用，但仍受物质、可回收设计、最小化、标签、空隙率和具体场景义务约束。",
      relatedArticles: ["art_5", "art_6", "annex_ii_t4", "art_10", "art_12", "art_24", "art_29"]
    },
    {
      id: "paper_board",
      family: "纤维基",
      category: "Annex II Table 1 - Category 2",
      name: "纸 / 纸板",
      interpretation: "纸并不是天然自动合规，仍要看覆膜、阻隔层、标签、胶黏剂、减量和场景限制。",
      relatedArticles: ["art_5", "art_6", "annex_ii_t4", "art_10", "art_12", "art_24", "art_25"]
    },
    {
      id: "paper_composite",
      family: "复合",
      category: "Annex II Table 1 - Category 3",
      name: "纸基复合包装",
      interpretation: "允许存在，但回收设计压力通常高于单材纸包装，适合确有阻隔和液体保持需求的路线。",
      relatedArticles: ["art_5", "art_6", "annex_ii_t4", "art_10", "art_12"]
    },
    {
      id: "steel",
      family: "金属",
      category: "Annex II Table 1 - Category 4",
      name: "钢基金属包装",
      interpretation: "原则允许，适合高阻隔和高完整性运输，但仍要满足最小化、标签和回收设计。",
      relatedArticles: ["art_5", "art_6", "annex_ii_t4", "art_10", "art_12", "art_29"]
    },
    {
      id: "aluminum",
      family: "金属",
      category: "Annex II Table 1 - Category 5/6",
      name: "铝基包装",
      interpretation: "原则允许，但柔性和复合形式要特别关注回收友好性、印刷与小部件影响。",
      relatedArticles: ["art_5", "art_6", "annex_ii_t4", "art_10", "art_12", "art_29"]
    },
    {
      id: "pet",
      family: "塑料",
      category: "Annex II Table 1 - Category 7/8/9",
      name: "PET",
      interpretation: "PET 是回收设计和再生料双重重点材料，尤其要看接触敏感包装和饮料瓶要求。",
      relatedArticles: ["art_5_limits", "art_6", "annex_ii_t4", "art_7", "art_10", "art_12", "art_24", "art_29"]
    },
    {
      id: "pe",
      family: "塑料",
      category: "Annex II Table 1 - Category 10/11/14",
      name: "PE / HDPE",
      interpretation: "允许，但柔性和多材料形式的回收设计难度通常更高，运输和电商场景还受空隙率与再利用目标约束。",
      relatedArticles: ["art_5_limits", "art_6", "annex_ii_t4", "art_7", "art_10", "art_12", "art_24", "art_29"]
    },
    {
      id: "pp",
      family: "塑料",
      category: "Annex II Table 1 - Category 12/13/14",
      name: "PP",
      interpretation: "用途广，但不因可加工性强就自动合规；仍要看场景、再生料和结构设计。",
      relatedArticles: ["art_5_limits", "art_6", "annex_ii_t4", "art_7", "art_10", "art_12", "art_24", "art_29"]
    },
    {
      id: "ps_eps",
      family: "塑料",
      category: "Annex II Table 1 - Category 15/16",
      name: "PS / XPS / EPS",
      interpretation: "可以存在，但在很多项目里会面临更高的回收和减量压力，缓冲和保温用途要特别论证必要性。",
      relatedArticles: ["art_5_limits", "art_6", "annex_ii_t4", "art_7", "art_10", "art_24"]
    },
    {
      id: "other_rigid_plastics",
      family: "塑料",
      category: "Annex II Table 1 - Category 17",
      name: "其他刚性塑料",
      interpretation: "不是一刀切禁止，但通常比主流单材塑料面临更高的回收解释压力，常属于高风险路线。",
      relatedArticles: ["art_5_limits", "art_6", "annex_ii_t4", "art_7", "art_10", "art_12"]
    },
    {
      id: "other_flexible_plastics",
      family: "塑料",
      category: "Annex II Table 1 - Category 18",
      name: "其他柔性塑料",
      interpretation: "多材料柔性包装不是自动不合规，但通常是 PPWR 下最需要重点核查的一类结构。",
      relatedArticles: ["art_5_limits", "art_6", "annex_ii_t4", "art_7", "art_10", "art_12", "art_24"]
    },
    {
      id: "biodegradable_plastics",
      family: "塑料",
      category: "Annex II Table 1 - Category 19",
      name: "可生物降解塑料",
      interpretation: "不是通用优先路线。除 Article 9 明确要求或允许的场景外，仍应优先按可回收设计来判断。",
      relatedArticles: ["art_6", "art_7", "art_8", "art_9", "annex_iii", "art_12"]
    },
    {
      id: "wood_cork",
      family: "其他材料",
      category: "Annex II Table 1 - Category 20",
      name: "木材 / 软木",
      interpretation: "销售包装在 Article 6 下有特定例外，但并不免于最小化、标签和场景判断。",
      relatedArticles: ["art_6", "art_10", "art_12", "art_29"]
    },
    {
      id: "textile",
      family: "其他材料",
      category: "Annex II Table 1 - Category 21",
      name: "纺织",
      interpretation: "纺织路线更适合可重复使用逻辑，不适合仅靠高端感堆叠包装层级。",
      relatedArticles: ["art_6", "art_10", "art_11", "annex_vi", "art_12"]
    },
    {
      id: "ceramic",
      family: "其他材料",
      category: "Annex II Table 1 - Category 22",
      name: "陶瓷 / 炻器 / 瓷器",
      interpretation: "适合少数高端和可重复使用容器，但重量和运输风险必须有更强的功能论证。",
      relatedArticles: ["art_6", "art_10", "art_11", "art_12"]
    }
  ],
  scenarios: [
    {
      id: "general",
      name: "通用要求",
      interpretation: "适用于大多数包装。先看物质、可回收设计、最小化、标签，再看是否触发场景性限制。",
      relatedArticles: ["art_5", "art_6", "art_10", "art_12"]
    },
    {
      id: "food_contact",
      name: "食品接触",
      interpretation: "重点看 PFAS、重金属、接触敏感塑料再生料比例、可堆肥例外和食品安全兼容性。",
      relatedArticles: ["art_5_limits", "art_7", "art_9", "annex_iii"]
    },
    {
      id: "ecommerce",
      name: "电商包装",
      interpretation: "重点看 Article 10 减量和 Article 24 空隙率，避免大箱小货和过量填充。",
      relatedArticles: ["art_10", "annex_iv", "art_24", "art_29"]
    },
    {
      id: "horeca_on_site",
      name: "HORECA 场内消费",
      interpretation: "重点看 Annex V 对堂食或场内消费一次性塑料包装的限制。",
      relatedArticles: ["art_25", "art_12"]
    },
    {
      id: "horeca_takeaway",
      name: "HORECA 外卖",
      interpretation: "重点看自带容器、可重复使用包装选项和 reusable system 的成立条件。",
      relatedArticles: ["art_11", "annex_vi", "art_32", "art_33"]
    },
    {
      id: "transport",
      name: "运输 / B2B 周转",
      interpretation: "重点看运输包装再利用目标、可重复使用系统和 Article 24 空隙率。",
      relatedArticles: ["art_11", "art_24", "art_29"]
    },
    {
      id: "hospitality",
      name: "住宿业",
      interpretation: "重点看 Annex V 对单次预订一次性小包装的限制，优先改为补充装或 reusable 方案。",
      relatedArticles: ["art_25", "art_32", "art_33"]
    },
    {
      id: "fresh_produce",
      name: "果蔬",
      interpretation: "重点看鲜果蔬一次性塑料包装限制，以及果蔬粘性标签应可堆肥。",
      relatedArticles: ["art_9", "art_25", "annex_iii"]
    },
    {
      id: "beverage",
      name: "饮料",
      interpretation: "重点看一次性塑料饮料瓶再生料比例、饮料销售包装再利用目标和可重复使用标签。",
      relatedArticles: ["art_7", "art_11", "art_12", "art_29"]
    }
  ],
  judgementGuide: [
    {
      id: "required",
      name: "必须符合",
      interpretation: "这是硬性要求。缺失或不达标通常就是直接合规风险。",
      relatedArticles: ["art_5", "art_6", "art_7", "art_10", "art_12", "art_24", "art_29", "art_32", "art_33"]
    },
    {
      id: "prohibited",
      name: "明确禁止",
      interpretation: "这是直接的禁限用或阈值红线，触发后不能靠一般性环保叙述来覆盖。",
      relatedArticles: ["art_5_limits", "art_10", "art_24", "art_25"]
    },
    {
      id: "conditional",
      name: "有条件符合",
      interpretation: "原则允许，但要同时满足例外条件、基础设施条件或特定系统要求。",
      relatedArticles: ["art_8", "art_9", "art_11", "annex_vi", "art_29"]
    },
    {
      id: "watch",
      name: "待二级法案",
      interpretation: "主法规已经给方向，但详细执行方法、门槛或标签规格还要等委员会后续法案。",
      relatedArticles: ["art_6", "art_7", "art_10", "art_11", "art_12", "art_24"]
    }
  ],
  otherTopics: [
    {
      id: "topic_substances",
      name: "包装中关注物质应最小化",
      interpretation: "这不是一句原则话术，而是 Article 5 的横向出发点，会影响材料、助剂、回收与再利用判断。",
      relatedArticles: ["art_5", "art_5_limits"]
    },
    {
      id: "topic_pfas_metals",
      name: "PFAS 与重金属限值",
      interpretation: "这是最容易直接判定为不符合的地方，尤其是食品接触包装。",
      relatedArticles: ["art_5_limits"]
    },
    {
      id: "topic_dfr",
      name: "回收设计参数",
      interpretation: "标签、套筒、颜色、胶黏剂、阻隔层、残留物和小组件都会直接影响可回收等级。",
      relatedArticles: ["art_6", "annex_ii_t4"]
    },
    {
      id: "topic_minimisation",
      name: "包装最小化",
      interpretation: "双层壁、假底、不必要分层包装是 PPWR 明确点名的高风险结构。",
      relatedArticles: ["art_10", "annex_iv", "art_24"]
    },
    {
      id: "topic_recycled_content",
      name: "塑料最低再生料含量",
      interpretation: "塑料不能只看能不能回收，还要看 2030/2040 的消费后再生料比例。",
      relatedArticles: ["art_7"]
    },
    {
      id: "topic_compostable",
      name: "可堆肥不是通用优先路线",
      interpretation: "PPWR 只在少数场景明确要求或允许可堆肥，其他大部分包装仍应走可回收路线。",
      relatedArticles: ["art_8", "art_9", "annex_iii"]
    },
    {
      id: "topic_reuse",
      name: "可重复使用不是做厚一点",
      interpretation: "必须有 rotations、回收返还、卫生安全、修复能力和 reusable system 才成立。",
      relatedArticles: ["art_11", "annex_vi", "art_29", "art_33"]
    },
    {
      id: "topic_labels",
      name: "统一标签与误导风险",
      interpretation: "材料组成、可堆肥、可重复使用、数字载体和误导性标签，都会成为后续执法重点。",
      relatedArticles: ["art_12"]
    }
  ],
  insightCategories: [
    {
      id: "insights_official",
      name: "官方解读",
      interpretation: "来自欧盟委员会或欧盟出版体系的说明、FAQ、指南和实施动态。权威性最高，但其中的指南和 FAQ 仍不等于法院的最终法律解释。",
      relatedArticles: ["art_5", "art_6", "art_7", "art_12", "art_24", "art_29"]
    },
    {
      id: "insights_professional",
      name: "专业解读",
      interpretation: "来自专业律所或合规机构的实务解读，适合补充理解过渡期、执法重点和文档要求，但不替代正式法规。",
      relatedArticles: ["art_5_limits", "art_6", "art_7", "art_10", "art_12", "art_25"]
    },
    {
      id: "insights_industry",
      name: "行业观察",
      interpretation: "来自行业协会或行业平台的应用性观察，适合看材料路线、行业适配和实施难点，但要注意立场和利益相关性。",
      relatedArticles: ["art_6", "art_7", "art_9", "art_24", "art_29"]
    }
  ],
  insights: [
    {
      id: "insight_ec_overview_2026",
      categoryId: "insights_official",
      title: "欧盟委员会包装废弃物专题页",
      sourceName: "European Commission",
      publishedAt: "页面持续更新，2026-04 抓取内容包含最新时间线",
      sourceType: "官方说明页面",
      legalWeight: "官方解释性信息，不替代法规正文",
      url: "https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en",
      summary: "这是理解 PPWR 总体适用范围、时间线、配套文件和政策目标的最好入口之一。",
      keyPoints: [
        "PPWR 于 2025-02-11 生效，通常自 2026-08-12 起适用。",
        "委员会页面明确把 Guidance 和 FAQ 作为经济运营者和成员国的实施支持文件。",
        "页面用通俗方式归纳了可回收、再生料、可重复使用和 PFAS 等重点。"
      ],
      caution: [
        "它是政策说明页，不是正式条文本身。",
        "发生冲突时应以 Regulation (EU) 2025/40 正文为准。"
      ],
      relatedArticles: ["art_5", "art_6", "art_7", "art_12", "art_24", "art_29"]
    },
    {
      id: "insight_ec_guidance_2026",
      categoryId: "insights_official",
      title: "欧盟委员会 PPWR 指南文件",
      sourceName: "European Commission, DG Environment",
      publishedAt: "2026-03-30",
      sourceType: "官方 Guidance document",
      legalWeight: "重要官方实施解释，但非司法上的最终约束解释",
      url: "https://environment.ec.europa.eu/publications/guidance-document-packaging-and-packaging-waste-regulation-ppwr_en",
      summary: "这是目前最重要的官方实施解释来源之一，用来说明委员会如何理解关键条款。",
      keyPoints: [
        "适合用来理解经济运营者、制造商、标签、可回收性和技术文件等执行口径。",
        "可作为程序里扩展解读层的官方补充，但应和正式条文分栏显示。",
        "很多市场上争议较大的问题，会先在该 Guidance 中看到委员会的倾向性口径。"
      ],
      caution: [
        "它是 Guidance，不是法院判决。",
        "程序展示时必须标明为官方实施解释，而不是新增法律义务。"
      ],
      relatedArticles: ["art_5", "art_6", "art_7", "art_10", "art_11", "art_12"]
    },
    {
      id: "insight_ec_faq_2026",
      categoryId: "insights_official",
      title: "欧盟委员会 PPWR FAQ",
      sourceName: "European Commission, DG Environment",
      publishedAt: "2026-03-30",
      sourceType: "官方 FAQ",
      legalWeight: "官方问答解释，适合实务澄清，但不替代法规正文",
      url: "https://environment.ec.europa.eu/publications/faq-packaging-and-packaging-waste-regulation-ppwr_en",
      summary: "FAQ 更适合回答企业在准备合规时遇到的具体操作性问题。",
      keyPoints: [
        "适合程序里做成常见追问风格的扩展节点。",
        "可以帮助解释制造商定义、适用范围、技术文件和某些阈值问题。",
        "与 Guidance 搭配使用，比单独看法规正文更容易理解落地逻辑。"
      ],
      caution: [
        "FAQ 是解释性材料，不是正式附加法条。",
        "如果 FAQ 与法规字面冲突，仍应先回到法规正文。"
      ],
      relatedArticles: ["art_5", "art_5_limits", "art_6", "art_7", "art_10", "art_12"]
    },
    {
      id: "insight_ec_pallet_exemption",
      categoryId: "insights_official",
      title: "托盘缠绕膜与捆扎带豁免动态",
      sourceName: "European Commission",
      publishedAt: "2026-02-25",
      sourceType: "官方新闻 / Delegated Act 说明",
      legalWeight: "重要实施动态，说明 Article 29 已开始通过授权法案细化",
      url: "https://environment.ec.europa.eu/news/pallet-wrapping-straps-exempt-100-reuse-requirement-2026-02-25_en",
      summary: "这条新闻说明 PPWR 不是静止文本，Article 29 的再利用目标已经开始通过授权法案被具体调整。",
      keyPoints: [
        "托盘缠绕和捆扎带被豁免于某项 100% reuse 要求。",
        "说明运输包装相关条款会受到后续 delegated acts 的实质影响。",
        "适合程序里作为法规实施动态案例节点。"
      ],
      caution: [
        "应把它标成实施动态，不要误写成正文里一开始就有的固定结论。"
      ],
      relatedArticles: ["art_29"]
    },
    {
      id: "insight_packaginglaw_guidance",
      categoryId: "insights_professional",
      title: "专业法律解读：最终指南发布后的实务影响",
      sourceName: "PackagingLaw / Keller and Heckman",
      publishedAt: "2026-04-01",
      sourceType: "专业法律解读",
      legalWeight: "二手专业分析，非官方约束文件",
      url: "https://www.packaginglaw.com/news/european-commission-publishes-final-ppwr-guidance-advance-august-2026-application-date",
      summary: "这篇专业解读把官方 Guidance 和 FAQ 拆成企业更容易执行的事项，特别适合补充 PFAS、技术文件和一次性塑料禁限用判断。",
      keyPoints: [
        "强调 PFAS 限值适用于整个食品包装单元，包括油墨、涂层、胶黏剂等相关材料。",
        "指出 2026-08-12 后 PFAS 超限食品包装没有库存耗尽过渡。",
        "提到 Guidance/FAQ 口径下，含塑料达到一定比例的纸基包装可能落入 Annex V 某些一次性塑料限制。"
      ],
      caution: [
        "这是专业律所总结，不是委员会原文。",
        "程序里应标明其属于专业解读，只能作为解释辅助。"
      ],
      relatedArticles: ["art_5_limits", "art_7", "art_12", "art_25"]
    },
    {
      id: "insight_eumeps_guidance",
      categoryId: "insights_industry",
      title: "行业解读：PPWR 指南对可回收性过渡期的说明",
      sourceName: "EUMEPS",
      publishedAt: "2026-03-31",
      sourceType: "行业协会解读",
      legalWeight: "行业观察，不是官方法律解释",
      url: "https://eumeps.eu/eumeps-newsroom-packaging/news/ppwr-guidance-european-commission-packaging-regulation",
      summary: "这条行业解读突出了一点：在 Article 6 的 delegated acts 生效前，可回收性要求存在过渡逻辑。",
      keyPoints: [
        "强调在 Article 6(2)(a) 适用之前，企业仍要继续参考既有规则和协调标准。",
        "认为 Guidance 给了企业一段监管连续性的过渡窗口。",
        "对技术文件和 recycled content 豁免的文档要求做了行业角度总结。"
      ],
      caution: [
        "这是行业视角，存在行业立场。",
        "涉及过渡口径时，仍应优先回到官方 Guidance 和 FAQ。"
      ],
      relatedArticles: ["art_6", "art_7"]
    },
    {
      id: "insight_fieldfisher_overview",
      categoryId: "insights_professional",
      title: "企业准备视角：全球业务应如何准备 PPWR",
      sourceName: "Fieldfisher",
      publishedAt: "2026-03 附近抓取到相关更新",
      sourceType: "专业商业法律解读",
      legalWeight: "二手专业分析，适合企业准备工作参考",
      url: "https://www.fieldfisher.com/en/insights/new-eu-packaging-and-packaging-waste-rules-10-key-things-every-global-business-should-know",
      summary: "这类总览文章适合解释 PPWR 对非欧盟企业和整个供应链的影响，不只限于包装本体。",
      keyPoints: [
        "强调 PPWR 覆盖设计、材料、标签、再利用系统和 EPR，全链条都受影响。",
        "有助于把程序中的条文节点和业务准备节点区分开。",
        "适合作为面向企业管理者的阅读层。"
      ],
      caution: [
        "更偏合规准备和业务影响总结，不是条文字对字解释。",
        "程序里更适合放在延伸阅读层，而不是核心判断层。"
      ],
      relatedArticles: ["art_6", "art_7", "art_10", "art_12", "art_25", "art_29"]
    },
    {
      id: "insight_ec_factsheet",
      categoryId: "insights_official",
      title: "欧盟委员会 PPWR factsheet",
      sourceName: "European Commission",
      publishedAt: "2026-04 附近抓取到最新页面",
      sourceType: "官方通俗说明",
      legalWeight: "公众沟通材料，不替代法规正文",
      url: "https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste/facts-about-new-eu-rules-packaging-and-packaging-waste_en",
      summary: "factsheet 适合把复杂法规翻成公众能快速理解的主线目标。",
      keyPoints: [
        "强调 2030 年前让所有包装在经济可行条件下可回收。",
        "突出再生料、减少不必要包装和增加 reusable 选项。",
        "适合程序里作为入门阅读节点。"
      ],
      caution: [
        "内容高度概括，不能代替 Article 和 Annex 的精确判断。"
      ],
      relatedArticles: ["art_6", "art_7", "art_10", "art_24", "art_29", "art_33"]
    }
  ],
  articles: [
    {
      id: "art_5",
      order: 5,
      label: "Article 5",
      title: "Requirements for substances in packaging",
      kind: "Article",
      englishText:
        "Packaging placed on the market shall be manufactured so that the presence and concentration of substances of concern are minimised, including their presence in emissions and waste-management outputs such as secondary raw materials, ashes or materials for final disposal. The Commission must monitor substances of concern and assess whether they negatively affect re-use, recycling or chemical safety.",
      chineseText:
        "投放市场的包装应采用这样的制造方式：将包装材料和包装组件中的关注物质浓度尽量降到最低，并考虑这些物质在排放、二次原料、灰渣和最终处置物中的存在。委员会还要持续监测这些物质是否妨碍再利用、回收或化学安全。",
      interpretation: [
        "这条是 PPWR 的总出发点，不是只看某个材料本体，而是看整个材料体系和助剂体系。",
        "如果某种材料路线虽然能用，但会显著妨碍回收或带来高污染残留，它就会在 PPWR 下变成高风险。",
        "这条也解释了为什么后面可回收设计标准会和物质限制联动。"
      ],
      appliesTo: {
        materials: ["glass", "paper_board", "paper_composite", "steel", "aluminum", "pet", "pe", "pp", "ps_eps", "other_rigid_plastics", "other_flexible_plastics", "biodegradable_plastics", "wood_cork", "textile", "ceramic"],
        scenarios: ["general"]
      },
      timeline: "作为通用可持续性要求持续适用。",
      exceptions: [
        "无材料一刀切豁免，但会与 REACH、食品接触材料法规等并行适用。"
      ]
    },
    {
      id: "art_5_limits",
      order: 5.1,
      label: "Article 5(4)-(6)",
      title: "Heavy metals and PFAS thresholds",
      kind: "Article",
      englishText:
        "The sum of concentration levels of lead, cadmium, mercury and hexavalent chromium in packaging or packaging components shall not exceed 100 mg/kg. From 12 August 2026, food-contact packaging shall not be placed on the market if PFAS reaches or exceeds any of the specified thresholds: 25 ppb for any targeted PFAS, 250 ppb for the sum of targeted PFAS, or 50 ppm for PFAS including polymeric PFAS.",
      chineseText:
        "包装或包装组件中铅、镉、汞和六价铬的总浓度不得超过 100 mg/kg。自 2026 年 8 月 12 日起，食品接触包装中 PFAS 只要达到以下任一阈值，就不得上市：任一目标 PFAS 25 ppb、目标 PFAS 总和 250 ppb、PFAS 总量 50 ppm。",
      interpretation: [
        "这是最容易被直接判定为不符合的条款之一。",
        "PFAS 限制只针对食品接触包装，不是所有包装一律触发。",
        "如果总氟超过 50 mg/kg，还需要能证明测到的是 PFAS 还是非 PFAS 的氟。"
      ],
      appliesTo: {
        materials: ["paper_board", "paper_composite", "steel", "aluminum", "pet", "pe", "pp", "ps_eps", "other_rigid_plastics", "other_flexible_plastics", "biodegradable_plastics"],
        scenarios: ["general", "food_contact"]
      },
      timeline: "PFAS 限值自 2026-08-12 起适用。",
      exceptions: [
        "重金属部分的特定豁免仍可能通过后续授权法案维持或调整。",
        "PFAS 的适用以食品接触包装为前提。"
      ]
    },
    {
      id: "art_6",
      order: 6,
      label: "Article 6",
      title: "Recyclable packaging",
      kind: "Article",
      englishText:
        "All packaging placed on the market shall be recyclable. Packaging is recyclable where it is designed for material recycling so that the resulting secondary raw materials are of sufficient quality to substitute primary raw materials, and where it can be separately collected, sorted into specific waste streams and recycled at scale. From 2030, packaging must meet recyclability grades A, B or C. From 2038, only grades A or B remain marketable.",
      chineseText:
        "所有投放市场的包装都应可回收。所谓可回收，不只是理论上能回收，而是设计上能进入材料回收，回收后产出的二次原料质量足以替代部分原生原料，并且在现实体系里能被单独收集、分拣并实现规模化回收。2030 年起至少达到 A/B/C；2038 年起至少达到 A/B。",
      interpretation: [
        "PPWR 的核心不是只问材料是什么，而是问这套结构能不能在现实体系里被有效回收。",
        "2030 前后和 2038 前后是两个重要门槛。",
        "创新包装可以有过渡，但不是自动豁免。"
      ],
      appliesTo: {
        materials: ["glass", "paper_board", "paper_composite", "steel", "aluminum", "pet", "pe", "pp", "ps_eps", "other_rigid_plastics", "other_flexible_plastics", "biodegradable_plastics"],
        scenarios: ["general"]
      },
      timeline: "2030-01-01 起至少 A/B/C；2038-01-01 起至少 A/B。",
      exceptions: [
        "药品、部分医疗器械、危险品运输、轻木/软木/纺织/橡胶/陶瓷/蜡制销售包装有特定例外。",
        "设计标准和大规模回收方法还要等二级法案细化。"
      ]
    },
    {
      id: "annex_ii_t4",
      order: 6.4,
      label: "Annex II Table 4",
      title: "Parameters for design for recycling",
      kind: "Annex",
      englishText:
        "The non-exhaustive design-for-recycling parameters include labels, sleeves, additives, adhesives, closures and small components, colours, barrier layers and coatings, separability, material composition, ease of emptying and product residues, inks, varnishes, printing and coding.",
      chineseText:
        "Annex II 表 4 给出了非穷尽的回收设计参数，包括标签、套筒、添加剂、胶黏剂、封口件和小部件、颜色、阻隔层与涂层、可拆解性、材料组成、易排空性与残留物、油墨清漆印刷编码等。",
      interpretation: [
        "这是做材料和结构判断时最实用的一张表。",
        "很多包装不是输在主材，而是输在标签、套筒、胶黏剂、颜色和阻隔层。",
        "它决定了未来各材料子类的 DfR 细则会怎么长出来。"
      ],
      appliesTo: {
        materials: ["glass", "paper_board", "paper_composite", "steel", "aluminum", "pet", "pe", "pp", "ps_eps", "other_rigid_plastics", "other_flexible_plastics", "biodegradable_plastics"],
        scenarios: ["general"]
      },
      timeline: "现已作为 Annex 参数存在，详细门槛待 delegated acts。",
      exceptions: [
        "无单独豁免，但每个包装类别的具体权重和门槛要等后续法案。"
      ]
    },
    {
      id: "art_7",
      order: 7,
      label: "Article 7",
      title: "Minimum recycled content in plastic packaging",
      kind: "Article",
      englishText:
        "From 2030, each plastic part of packaging shall contain a minimum percentage of recycled content recovered from post-consumer plastic waste: 30% for PET contact-sensitive packaging other than single-use plastic beverage bottles, 10% for non-PET contact-sensitive packaging, 30% for single-use plastic beverage bottles and 35% for other plastic packaging. From 2040, those percentages rise to 50%, 25%, 65% and 65% respectively.",
      chineseText:
        "自 2030 年起，每个塑料包装部件都要达到最低消费后再生料比例：PET 接触敏感包装 30%，非 PET 接触敏感包装 10%，一次性塑料饮料瓶 30%，其他塑料包装 35%。到 2040 年，上述比例分别提高到 50%、25%、65%、65%。",
      interpretation: [
        "塑料路线不能只讲‘未来可回收’，还要讲‘现在和未来的再生料吸纳能力’。",
        "接触敏感包装并没有被完全豁免，只是门槛和例外更复杂。",
        "生物基原料不是 Article 7 下现成可替代再生料的通用答案。"
      ],
      appliesTo: {
        materials: ["pet", "pe", "pp", "ps_eps", "other_rigid_plastics", "other_flexible_plastics"],
        scenarios: ["general", "food_contact", "beverage"]
      },
      timeline: "2030 / 2040 两级门槛。",
      exceptions: [
        "药品直接包装、部分医疗包装、危险品运输包装、可堆肥塑料包装、部分婴幼儿和特殊医学用途食品包装等有例外。",
        "具体计算与验证方法要等 Article 7(8) 实施法案。"
      ]
    },
    {
      id: "art_8",
      order: 8,
      label: "Article 8",
      title: "Biobased feedstock in plastic packaging",
      kind: "Article",
      englishText:
        "By 12 February 2028, the Commission shall review the technological development and environmental performance of biobased plastic packaging and, where appropriate, present a legislative proposal on sustainability requirements, targets or the possible use of biobased feedstock in specific circumstances.",
      chineseText:
        "到 2028 年 2 月 12 日，委员会应审查生物基塑料包装的技术发展和环境表现，并在适当情况下提出关于可持续性要求、目标或特定条件下使用生物基原料的立法建议。",
      interpretation: [
        "这条不是现成的强制生物基比例要求。",
        "所以不能说‘PPWR 已经要求生物基含量’，这会造成误读。",
        "当前主战场仍然是可回收设计、再生料、减量和场景限制。"
      ],
      appliesTo: {
        materials: ["biodegradable_plastics", "pet", "pe", "pp", "other_rigid_plastics", "other_flexible_plastics"],
        scenarios: ["general"]
      },
      timeline: "委员会审查期限为 2028-02-12。",
      exceptions: [
        "当前阶段没有现行硬性生物基含量门槛。"
      ]
    },
    {
      id: "art_9",
      order: 9,
      label: "Article 9",
      title: "Compostable packaging",
      kind: "Article",
      englishText:
        "By 12 February 2028, the packaging referred to in Article 3(1), points (f) and adhesive labels affixed to fruit and vegetables shall comply with industrial composting standards. Member States may require additional packaging formats to be compostable where appropriate bio-waste collection and treatment infrastructure exists. Other biodegradable packaging shall still be designed for recycling in accordance with Article 6.",
      chineseText:
        "到 2028 年 2 月 12 日，Article 3(1)(f) 所指的茶包/咖啡包/饮品包，以及贴在水果和蔬菜上的粘性标签，应符合工业堆肥标准。成员国只有在生物废弃物收集和处理基础设施充分时，才可要求其他特定包装必须可堆肥。除此之外，其他可生物降解包装仍应按 Article 6 设计为可回收。",
      interpretation: [
        "PPWR 没有把可堆肥变成普遍优先路线。",
        "可堆肥只在少数场景明确成立，其他大部分包装仍然以可回收为主。",
        "这是最容易被市场宣传误读的一组条款。"
      ],
      appliesTo: {
        materials: ["biodegradable_plastics", "paper_board"],
        scenarios: ["food_contact", "fresh_produce"]
      },
      timeline: "核心场景门槛为 2028-02-12。",
      exceptions: [
        "附加可堆肥要求必须建立在成员国具备合适基础设施的前提上。"
      ]
    },
    {
      id: "annex_iii",
      order: 9.1,
      label: "Annex III",
      title: "Conditions for compostable packaging",
      kind: "Annex",
      englishText:
        "Compostable packaging should only be considered where it could not reasonably be designed as reusable or the products could not be placed on the market without packaging, where it is designed to enter the organic waste stream, where it increases separate collection of organic waste and reduces contamination without worsening other waste streams.",
      chineseText:
        "Annex III 明确指出：只有当包装不能合理设计成可重复使用、或者产品没有包装就无法上市，并且其生命周期末端确实要进入有机废弃物流、能提高有机废弃物单独收集、减少堆肥污染且不增加其他废物流污染时，可堆肥路线才有合理性。",
      interpretation: [
        "这张 Annex 是判断‘为什么这个包装可以做成可堆肥’的核心依据。",
        "如果只是为了营销或绿色叙事而做成可堆肥，通常站不住。"
      ],
      appliesTo: {
        materials: ["biodegradable_plastics"],
        scenarios: ["food_contact", "fresh_produce"]
      },
      timeline: "作为 Article 9 的条件性 Annex 适用。",
      exceptions: [
        "不是独立授权，而是限定可堆肥路线成立的条件。"
      ]
    },
    {
      id: "art_10",
      order: 10,
      label: "Article 10",
      title: "Packaging minimisation",
      kind: "Article",
      englishText:
        "By 1 January 2030, manufacturers and importers shall ensure that packaging is designed so that its weight and volume are reduced to the minimum necessary for its functionality, taking into account the shape and material. Packaging with design features aimed only at increasing the perceived volume of the product, including double walls, false bottoms and unnecessary layers, shall not be placed on the market unless a narrow exception applies.",
      chineseText:
        "到 2030 年 1 月 1 日，制造商和进口商应确保包装在设计上将重量和体积减到实现其功能所必需的最小限度，并考虑包装的形状和材质。仅为了增加产品视觉体积的设计，包括双层壁、假底和不必要的分层包装，不得上市，除非落入狭义例外。",
      interpretation: [
        "品牌感、高端感、开箱感，本身不是增加包装体积和层级的正当理由。",
        "但如果是为了保护产品、保证卫生、实现再利用或提高可回收性，增加一定体积或重量可以被解释。",
        "这条和 Annex IV 必须一起看。"
      ],
      appliesTo: {
        materials: ["glass", "paper_board", "paper_composite", "steel", "aluminum", "pet", "pe", "pp", "ps_eps", "other_rigid_plastics", "other_flexible_plastics", "wood_cork", "textile", "ceramic"],
        scenarios: ["general", "ecommerce", "hospitality"]
      },
      timeline: "2030-01-01；协调标准另行细化。",
      exceptions: [
        "2025-02-11 前已受设计权、商标或地理标志保护的部分包装有狭义例外。"
      ]
    },
    {
      id: "annex_iv",
      order: 10.1,
      label: "Annex IV",
      title: "Methodology for packaging minimisation",
      kind: "Annex",
      englishText:
        "The performance criteria include product protection, packaging manufacturing process, logistics, packaging functionality, information requirements, hygiene and safety, legal requirements and, where relevant, recycled content, recyclability and re-use. Technical documentation must explain why weight or volume cannot be reduced further without undermining those criteria.",
      chineseText:
        "Annex IV 规定了包装减量的性能标准，包括产品保护、制造工艺、物流、包装功能、信息要求、卫生安全、法律要求，以及再生料、可回收性和再利用。技术文件必须解释：为什么重量和体积不能再继续减少，否则会损害这些标准。",
      interpretation: [
        "这是判断‘包装真的有必要这么大/这么厚吗’的实操工具。",
        "不是一句‘为了保护产品’就够了，最好有测试、研究或建模说明。"
      ],
      appliesTo: {
        materials: ["glass", "paper_board", "paper_composite", "steel", "aluminum", "pet", "pe", "pp", "ps_eps", "other_rigid_plastics", "other_flexible_plastics", "wood_cork", "textile", "ceramic"],
        scenarios: ["general", "ecommerce", "transport"]
      },
      timeline: "与 Article 10 配套适用。",
      exceptions: [
        "无独立豁免，主要是 Article 10 的方法支撑。"
      ]
    },
    {
      id: "art_11",
      order: 11,
      label: "Article 11",
      title: "Reusable packaging",
      kind: "Article",
      englishText:
        "Packaging placed on the market from 11 February 2025 shall be considered reusable where it is conceived and designed for multiple use, capable of as many rotations as possible under normal conditions, can be emptied and refilled without impairing safety or quality, can be repaired, and fulfils the requirements for recyclable packaging when it becomes waste.",
      chineseText:
        "自 2025 年 2 月 11 日后上市的包装，只有在其明确为多次使用而构思和设计、能在正常条件下完成尽可能多的周转、可安全清空和再装填、可修复，并且在寿命结束后仍符合可回收包装要求时，才可被认定为 reusable packaging。",
      interpretation: [
        "reusable 不是把包装做厚一点，也不是把一次性包装改个文案。",
        "必须同时满足周转、卫生、安全、修复和最终回收条件。",
        "这条和 Annex VI、Article 29、Article 33 要一起看。"
      ],
      appliesTo: {
        materials: ["glass", "steel", "aluminum", "pet", "pe", "pp", "wood_cork", "textile", "ceramic"],
        scenarios: ["transport", "horeca_takeaway", "beverage"]
      },
      timeline: "适用于 2025-02-11 后上市并声称可重复使用的包装。",
      exceptions: [
        "最小 rotations 数量还要等委员会 delegated act。"
      ]
    },
    {
      id: "annex_vi",
      order: 11.1,
      label: "Annex VI",
      title: "Requirements for re-use systems, repair and refill",
      kind: "Annex",
      englishText:
        "Annex VI gives the operating logic for re-use systems, the repair operations for reusable packaging and the conditions applicable to refill stations. It is the practical backbone behind Article 11, Article 29 and Article 32/33.",
      chineseText:
        "Annex VI 给出了 reusable system、修复操作和补充装站的运行逻辑，是 Article 11、29、32、33 背后的操作性基础。",
      interpretation: [
        "如果没有系统运营、回收返还、修复和卫生流程，很多所谓 reusable 方案都站不住。",
        "这张 Annex 更接近系统规则，不只是材料规则。"
      ],
      appliesTo: {
        materials: ["glass", "steel", "aluminum", "pet", "pe", "pp", "textile", "ceramic"],
        scenarios: ["transport", "horeca_takeaway", "beverage"]
      },
      timeline: "作为 reusable 和 refill 体系的配套 Annex 使用。",
      exceptions: [
        "开放式系统与闭环系统的要求并不完全相同。"
      ]
    },
    {
      id: "art_12",
      order: 12,
      label: "Article 12",
      title: "Labelling of packaging",
      kind: "Article",
      englishText:
        "From 12 August 2028, packaging placed on the market shall bear a harmonised label with information on material composition to facilitate sorting. Compostable packaging shall indicate compostability, the fact that it is not suitable for home composting and that it should not be discarded in nature. Reusable packaging placed on the market from 12 February 2029 shall bear a label informing users that it is reusable and shall provide additional digital information.",
      chineseText:
        "自 2028 年 8 月 12 日起，投放市场的包装应有统一材料组成标签，以帮助消费者分类。可堆肥包装应标明其可堆肥、不适合家庭堆肥、且不得乱丢到自然环境。自 2029 年 2 月 12 日起，可重复使用包装还要明确标注 reusable，并提供额外数字信息。",
      interpretation: [
        "后续执法很可能会重点看标签误导问题。",
        "‘看起来环保’但又没有正式统一标签支持的图示和话术，风险会越来越高。",
        "Article 12 同时约束实体标签和数字载体信息。"
      ],
      appliesTo: {
        materials: ["glass", "paper_board", "paper_composite", "steel", "aluminum", "pet", "pe", "pp", "ps_eps", "other_rigid_plastics", "other_flexible_plastics", "biodegradable_plastics", "wood_cork", "textile", "ceramic"],
        scenarios: ["general", "food_contact", "beverage"]
      },
      timeline: "材料标签 2028-08-12；可重复使用标签 2029-02-12。",
      exceptions: [
        "具体图示和数字识别方法还要等实施法案。",
        "部分药品和兽药包装因空间或安全原因可豁免。"
      ]
    },
    {
      id: "art_24",
      order: 24,
      label: "Article 24",
      title: "Obligation related to excessive packaging",
      kind: "Article",
      englishText:
        "By 1 January 2030, economic operators filling grouped packaging, transport packaging or e-commerce packaging shall ensure that the maximum empty space ratio is 50%. Empty space filled with paper shreds, air cushions, bubble wrap, foam filling, wood wool or similar materials still counts as empty space.",
      chineseText:
        "到 2030 年 1 月 1 日，从事成组包装、运输包装或电商包装的经营者应确保最大空隙率不超过 50%。即使空隙里塞满了纸屑、气垫、气泡膜、泡沫或木丝，这些空间仍然被算作空隙。",
      interpretation: [
        "这条直接冲着大箱小货和过量填充而来。",
        "很多电商包装问题不是主材问题，而是体积和空隙问题。",
        "销售包装本身也要尽量把内部空余空间降到功能所需最小限度。"
      ],
      appliesTo: {
        materials: ["paper_board", "paper_composite", "pet", "pe", "pp", "ps_eps", "other_rigid_plastics", "other_flexible_plastics", "wood_cork"],
        scenarios: ["ecommerce", "transport"]
      },
      timeline: "2030-01-01 或相关实施法案生效后 3 年，以较晚者为准。",
      exceptions: [
        "不规则形状、液体、易损品和运输标签空间会在计算方法里被考虑。",
        "具体算法要等委员会实施法案。"
      ]
    },
    {
      id: "art_25",
      order: 25,
      label: "Article 25 + Annex V",
      title: "Restrictions on use of certain packaging formats",
      kind: "Article + Annex",
      englishText:
        "From 1 January 2030, economic operators shall not place on the market packaging in the formats and for the uses listed in Annex V. Those include certain single-use plastic grouped packaging used at points of sale, certain single-use plastic packaging for fresh fruit and vegetables, certain single-use plastic packaging used in HORECA for on-site consumption, certain condiment mini-portions and single-use miniature packaging in the hospitality sector.",
      chineseText:
        "自 2030 年 1 月 1 日起，经济经营者不得将 Annex V 所列格式和用途的包装投放市场。重点包括：销售点多件促销用一次性塑料组合包装、部分鲜果蔬一次性塑料包装、HORECA 场内消费的一次性塑料包装、部分单份调味小包装，以及住宿业的一次性小样包装。",
      interpretation: [
        "这不是原则性软要求，而是最直接的禁限用条款。",
        "一旦你的包装方案落进 Annex V，通常就不是靠一般性的‘优化设计’能补救的。"
      ],
      appliesTo: {
        materials: ["pet", "pe", "pp", "ps_eps", "other_rigid_plastics", "other_flexible_plastics", "biodegradable_plastics"],
        scenarios: ["horeca_on_site", "horeca_takeaway", "fresh_produce", "hospitality", "beverage"]
      },
      timeline: "2030-01-01。",
      exceptions: [
        "部分鲜果蔬保鲜、医院和个体护理场景、微型企业等有狭义例外。"
      ]
    },
    {
      id: "art_29",
      order: 29,
      label: "Article 29",
      title: "Re-use and refill targets",
      kind: "Article",
      englishText:
        "Article 29 sets targets for reusable packaging and re-use systems. For transport packaging and packaging used to transport products, at least 40% must be reusable and part of a re-use system from 2030, and 70% is the 2040 effort target. For grouped packaging in box form other than cardboard, the targets are 10% and 25%. For beverage sales packaging supplied to consumers, the targets are 10% and 40%, subject to multiple sectoral exemptions.",
      chineseText:
        "Article 29 规定了 reusable packaging 和 re-use system 的目标。运输包装和运输用销售包装自 2030 年起至少 40% 要进入 reusable system，2040 年目标为 70%。非纸板箱式组合包装目标为 10% 和 25%。提供给消费者的饮料销售包装目标为 10% 和 40%，但同时伴随多项行业例外。",
      interpretation: [
        "这是系统型条款，不是只换个材质就能达标。",
        "如果没有 reusable system、回收返还和统计口径，材料再高级也不能满足 Article 29。"
      ],
      appliesTo: {
        materials: ["glass", "steel", "aluminum", "pet", "pe", "pp", "paper_board", "wood_cork"],
        scenarios: ["transport", "ecommerce", "beverage"]
      },
      timeline: "2030 / 2040 两阶段目标。",
      exceptions: [
        "危险品运输、大型机械定制包装、部分食品接触柔性运输包装、纸板箱、部分饮料品类、小规模经营者和微型企业都有不同层面的例外。"
      ]
    },
    {
      id: "art_32",
      order: 32,
      label: "Article 32",
      title: "Refill obligations in the take-away sector",
      kind: "Article",
      englishText:
        "By 12 February 2027, final distributors operating in HORECA and providing take-away hot or cold beverages or ready-prepared food shall give consumers the possibility of obtaining those products in their own containers. Products supplied into consumers' own containers shall be offered at a price no higher than the price for the same product in single-use packaging and under no less favourable conditions.",
      chineseText:
        "到 2027 年 2 月 12 日，在 HORECA 外卖场景中提供热饮、冷饮或即食食品的最终经销商，应允许消费者使用自带容器。使用自带容器购买时，价格不得高于相同一次性包装版本，提供条件也不得更差。",
      interpretation: [
        "这是外卖场景的 BYO 义务，不只是倡议。",
        "如果商家拒绝自带容器，或者通过价格和条件变相阻止，就会有合规风险。"
      ],
      appliesTo: {
        materials: ["glass", "pet", "pe", "pp", "paper_board", "aluminum", "textile"],
        scenarios: ["horeca_takeaway"]
      },
      timeline: "2027-02-12。",
      exceptions: [
        "补充装站和容器仍需满足卫生和安全要求。"
      ]
    },
    {
      id: "art_33",
      order: 33,
      label: "Article 33",
      title: "Obligation to offer reusable packaging in the take-away sector",
      kind: "Article",
      englishText:
        "By 12 February 2028, final distributors operating in HORECA and offering hot or cold beverages or ready-prepared take-away food shall offer consumers the option of obtaining those products in reusable packaging within a re-use system. From 2030, final distributors shall endeavour to offer 10% of products for sale in a reusable packaging format.",
      chineseText:
        "到 2028 年 2 月 12 日，在 HORECA 场景中提供热饮、冷饮或即食外卖食品的最终经销商，应向消费者提供 reusable packaging 选项，并且该选项必须处于真正的 re-use system 中。自 2030 年起，最终经销商应努力将 10% 的产品以 reusable format 销售。",
      interpretation: [
        "这条和 Article 32 一起构成外卖场景的双要求：既要允许自带容器，也要提供 reusable option。",
        "微型企业可豁免，但一般经营者不能只保留一次性路线。"
      ],
      appliesTo: {
        materials: ["glass", "pet", "pe", "pp", "steel", "aluminum", "textile", "ceramic"],
        scenarios: ["horeca_takeaway"]
      },
      timeline: "2028-02-12；2030 起努力达到 10%。",
      exceptions: [
        "微型企业可豁免；成员国在一定条件下可设更高目标。"
      ]
    }
  ]
};
