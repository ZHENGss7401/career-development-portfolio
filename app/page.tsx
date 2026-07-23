import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "郑惠跃｜个人职业发展档案",
  description:
    "郑惠跃的职业发展档案：AI 内容生产、新媒体运营、项目流程设计与独立站实践。",
};

const capabilities = [
  {
    index: "01",
    title: "AI 内容生产",
    body: "把大模型、图像与视频生成能力转译为稳定的选题、提示词和镜头执行流程。",
  },
  {
    index: "02",
    title: "新媒体运营",
    body: "从账号定位、人设、排班到发布追踪，建立可持续迭代的内容运营节奏。",
  },
  {
    index: "03",
    title: "业务流程设计",
    body: "习惯把模糊任务拆成字段、状态、验收标准和数据反馈，让协作可追踪。",
  },
  {
    index: "04",
    title: "独立站实践",
    body: "完成商品页首版搭建，实践定价、组合优惠、信任模块与流量承接链路。",
  },
];

const roadmap = [
  {
    time: "现在—6个月",
    title: "把项目跑成闭环",
    body: "围绕宠物赛道，打通内容生产、发布追踪、评论承接与独立站转化；建立关键指标复盘机制。",
  },
  {
    time: "1—3年",
    title: "对一个结果负责",
    body: "独立负责一个可持续盈利的新媒体项目，沉淀选题、生产、运营与转化 SOP。",
  },
  {
    time: "3—5年",
    title: "从个人执行走向带队",
    body: "带领不少于 5 人的项目小组，把个人能力转化为团队稳定产能与业务结果。",
  },
  {
    time: "5年以上",
    title: "成为 AI Native 项目负责人",
    body: "具备内容、流量、转化与团队管理的综合判断力，建设可复制的项目孵化体系。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="identity" href="#top" aria-label="回到顶部">
          <span className="identity-mark">ZH</span>
          <span>
            <strong>郑惠跃</strong>
            <small>职业发展档案 · 2026</small>
          </span>
        </a>
        <nav aria-label="页面导航">
          <a href="#evidence">项目证据</a>
          <a href="#capability">能力结构</a>
          <a href="#roadmap">职业路径</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI NATIVE · 新媒体增长实践者</p>
          <h1>
            把 AI 能力，
            <span>转化为可复用的业务系统。</span>
          </h1>
          <p className="lead">
            我是郑惠跃，现阶段聚焦 AI 内容生产、新媒体运营与独立站实践。
            我擅长把一项模糊任务拆成选题、流程、排班、交付与复盘，并让它真正开始运转。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#evidence">
              查看项目证据 <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-secondary" href="#roadmap">
              浏览职业路径
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="个人定位摘要">
          <div className="panel-topline">
            <span>POSITIONING / 01</span>
            <span className="status"><i /> 持续进化中</span>
          </div>
          <div className="radar">
            <div className="radar-core">AI</div>
            <span className="radar-node node-a">内容</span>
            <span className="radar-node node-b">运营</span>
            <span className="radar-node node-c">项目</span>
            <span className="radar-node node-d">转化</span>
          </div>
          <div className="panel-statement">
            <span>当前角色</span>
            <strong>AI 训练师 / 新媒体项目实践</strong>
          </div>
          <div className="panel-statement">
            <span>目标角色</span>
            <strong>AI Native 新媒体项目负责人</strong>
          </div>
        </aside>
      </section>

      <section className="belief-strip" aria-label="工作方法">
        <p>我的工作方法</p>
        <div><span>01</span> 先定义结果</div>
        <div><span>02</span> 再拆解系统</div>
        <div><span>03</span> 用反馈迭代</div>
      </section>

      <section className="section shell" id="evidence">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">EVIDENCE / 项目证据</p>
            <h2>不是“会使用 AI”，<br />而是让 AI 进入工作流。</h2>
          </div>
          <p>
            这里不以条目数量代替工作结果，而是呈现我如何理解问题、组织执行、观察反馈，
            以及哪些结论仍在等待真实业务验证。
          </p>
        </div>

        <div className="evidence-ledger" aria-label="工作证据与判断">
          <div className="ledger-intro">
            <p>WORKING EVIDENCE</p>
            <h3>真正被沉淀下来的，<br />是解决问题的方法。</h3>
            <span>证据来源：项目工作记录、飞书多维表格与实际页面产出</span>
          </div>
          <div className="ledger-records">
            <article>
              <span>从模糊到清晰</span>
              <h3>把需求拆成可执行的工作结构</h3>
              <p>将对标研究、账号定位、人设、叙事开头、提示词版本与任务状态组织进同一套项目资产。</p>
            </article>
            <article>
              <span>从灵感到生产</span>
              <h3>让创意不再依赖临场发挥</h3>
              <p>为画面、动作、镜头、台词与环境声建立约束，保留版本差异，减少每天从零开始的成本。</p>
            </article>
            <article>
              <span>从现象到原因</span>
              <h3>从结果异常倒推转化链路</h3>
              <p>发现内容曝光没有自然进入网站后，把问题继续拆到主页入口、评论意图、平台限制与商品页承接。</p>
            </article>
          </div>
        </div>

        <article className="case-study">
          <div className="case-copy">
            <p className="case-number">CASE 01 · PET CONTENT SYSTEM</p>
            <h3>从账号实验，到一条可复盘的内容运营链路</h3>
            <p>
              围绕宠物内容项目，我把对标、定位、叙事、提示词、发布反馈与评论承接连接起来。
              核心不是堆积素材，而是让每一轮工作都能为下一轮提供依据。
            </p>
            <ul className="check-list">
              <li>从对标样本中提炼账号定位、叙事方式与内容结构</li>
              <li>把角色、道具、镜头和台词约束沉淀为可复用提示词</li>
              <li>根据评论意图区分购买引导、产品答疑与情绪回应</li>
              <li>保留流量质量、商品页转化与履约闭环等未验证项</li>
            </ul>
          </div>
          <div className="system-map" aria-label="内容系统流程图">
            <div className="system-title">CONTENT OPERATING LOOP</div>
            <div className="system-row"><span>01</span><strong>对标与定位</strong><small>RESEARCH</small></div>
            <div className="connector" />
            <div className="system-row"><span>02</span><strong>叙事与提示词</strong><small>PROTOTYPE</small></div>
            <div className="connector" />
            <div className="system-row"><span>03</span><strong>发布与反馈</strong><small>OBSERVE</small></div>
            <div className="connector" />
            <div className="system-row"><span>04</span><strong>承接与复盘</strong><small>ITERATE</small></div>
            <div className="loop-note">让反馈重新进入下一轮判断 ↗</div>
          </div>
        </article>

        <article className="commerce-case">
          <div className="browser-frame">
            <div className="browser-bar"><i /><i /><i /><span>sileqi / product-page</span></div>
            <div className="site-crop">
              <img
                src="evidence/shopify-product-page.jpg"
                alt="SILEQI 狗狗项圈 Shopify 商品页首版长截图"
              />
            </div>
          </div>
          <div className="commerce-copy">
            <p className="case-number">CASE 02 · SHOPIFY PRACTICE</p>
            <h3>从内容曝光，继续走向交易承接</h3>
            <p>
              在 Shopify 中完成狗狗项圈商品页首版，实践商品结构、组合优惠、颜色选择、信任内容与 FAQ。
              同时围绕“用户不知道销售网站”的问题，补充主页置顶内容与评论区网站引导。
            </p>
            <div className="status-block done">
              <span>已完成</span>
              <p>商品页首版、竞品与定价研究、组合选项、信任内容、移动端页面检查</p>
            </div>
            <div className="status-block next">
              <span>下一步验证</span>
              <p>真实流量质量、商品页转化率、支付与履约闭环、稳定盈利能力</p>
            </div>
            <div className="product-pair" aria-label="狗狗项圈产品图">
              <img src="evidence/collar-red.jpg" alt="红色格纹狗狗项圈产品图" />
              <img src="evidence/collar-blue.jpg" alt="蓝色格纹狗狗项圈产品图" />
            </div>
          </div>
        </article>
      </section>

      <section className="section capability-section" id="capability">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow light">CAPABILITY / 能力结构</p>
            <h2>我正在形成的，不是单点技能，<br />而是一条完整的执行链。</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="principle">
            <span>WORKING PRINCIPLE</span>
            <blockquote>
              我更看重“能否形成结果闭环”，而不是“掌握了多少工具名称”。
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section shell" id="roadmap">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">ROADMAP / 职业路径</p>
            <h2>从可靠执行，<br />走向项目负责。</h2>
          </div>
          <p>
            我的长期方向不是脱离业务做“工具专家”，而是在真实项目中同时理解内容、流量、转化和团队协作。
          </p>
        </div>
        <div className="timeline">
          {roadmap.map((item, index) => (
            <article key={item.time}>
              <div className="timeline-index">0{index + 1}</div>
              <div>
                <p>{item.time}</p>
                <h3>{item.title}</h3>
                <span>{item.body}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <div className="shell closing-inner">
          <p className="eyebrow light">NEXT CHAPTER</p>
          <h2>持续学习，持续交付，<br />持续把个人能力变成团队资产。</h2>
          <p>
            郑惠跃 · AI 训练师 / 新媒体项目实践者<br />
            本页面用于职业发展沟通，数据更新至 2026 年 7 月。
          </p>
          <a href="#top">返回顶部 ↑</a>
        </div>
      </section>
    </main>
  );
}
