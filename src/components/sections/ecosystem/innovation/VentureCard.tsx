import Image from "next/image";
import Link from "next/link";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";

export function VentureCard() {
  return (
    <section className="w-full relative py-16 bg-white overflow-hidden">
      {/* 顶部 LogoWithTitle：创投生态 VC Ecosystem */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <LogoWithTitle 
          chineseText="创投生态" 
          englishText="VC Ecosystem" 
        />
      </div>

      <div className="relative w-[1100px] h-[1700px] mx-auto">
        {/* 1. 顶部 Banner */}
        <div
          className="absolute rounded-[25px] overflow-hidden"
          style={{
            width: "1100px",
            height: "620px",
            left: "0",
            top: 0,
          }}
        >
          <Image
            src="/innovation/delta_x/banner.svg"
            alt="Delta X Banner"
            fill
            className="object-cover"
          />
        </div>

        {/* 2. 了解详情 白色外框 + 渐变边框（已修复位置） */}
        <div
          className="absolute relative"
          style={{
            width: "1100px",
            height: "70px",
            left: "0",
            top: "640px", // 下移10px = banner与白色框增加间距
          }}
        >
          {/* 渐变边框（正确位置，不再乱飞） */}
          <div
            className="absolute inset-0 rounded-[15px] z-0"
            style={{
              background: "linear-gradient(90deg, #0071EF 0%, #149BFF 100%)",
              padding: "2px",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
            }}
          />

          {/* 白色内容层 */}
          <div
            className="relative bg-white shadow-lg rounded-[15px] z-10 w-full h-full"
            style={{
              boxShadow: "4px 0px 4px rgba(0,0,0,0.25), 0px 4px 4px rgba(0,0,0,0.25)",
            }}
          >
            {/* 左侧 Logo */}
            <div
              className="absolute"
              style={{
                width: "40px",
                height: "25px",
                left: "25px",
                top: "22px",
              }}
            >
              <Image
                src="/innovation/delta_x/logo.svg"
                alt="Delta X Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Logo 右侧文本 */}
            <div
              className="absolute font-bold text-[24px] leading-[36px] flex items-center"
              style={{
                width: "480px",
                height: "36px",
                left: "80px",
                top: "17px",
                fontFamily: "'Source Han Sans CN', sans-serif",
                color: "#000000",
              }}
            >
              Delta X 迭代未来：实验室体外商业孵化器
            </div>

            {/* 右侧“了解详情”按钮 */}
            <Link
              href="https://mp.weixin.qq.com/s/Z7AZ3sFlwmdXqKLwaGFHig"
              className="absolute"
              style={{
                width: "200px",
                height: "42px",
                left: "870px",
                top: "20px",
              }}
            >
              <Image
                src="/innovation/delta_x/button_details.svg"
                alt="了解详情"
                fill
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* 3. 两张照片 */}
        {/* 照片 1 */}
        <div
          className="absolute rounded-[25px] overflow-hidden"
          style={{
            width: "400px",
            height: "260px",
            left: "0",
            top: "730px",
          }}
        >
          <Image
            src="/innovation/delta_x/photo1.svg"
            alt="活动照片1"
            fill
            className="object-cover"
          />
        </div>

        {/* 照片 2 */}
        <div
          className="absolute rounded-[25px] overflow-hidden"
          style={{
            width: "400px",
            height: "260px",
            left: "420px",
            top: "730px",
          }}
        >
          <Image
            src="/innovation/delta_x/photo2.svg"
            alt="活动照片2"
            fill
            className="object-cover"
          />
        </div>

        {/* 4. “我们是谁”文本框 */}
        <div
          className="absolute bg-white border border-gray-300 shadow-lg rounded-[25px]"
          style={{
            width: "820px",
            height: "180px",
            left: "0",
            top: "1020px",
            boxShadow: "4px 0px 4px rgba(0,0,0,0.25), 0px 4px 4px rgba(0,0,0,0.25)",
          }}
        >
          {/* 标题 */}
          <div
            className="absolute font-bold text-[22px]"
            style={{
              left: "30px",
              top: "20px",
            }}
          >
            我们是谁
          </div>

          {/* 蓝色渐变横线 */}
          <div
            className="absolute rounded-[25px]"
            style={{
              width: "90px",
              height: "4px",
              left: "30px",
              top: "55px",
              background: "linear-gradient(90deg, #0071EF 0%, #149BFF 100%)",
            }}
          />

          {/* 描述文本 */}
          <div
            className="absolute text-[17px] leading-[26px] font-bold"
            style={{
              width: "760px",
              left: "30px",
              top: "75px",
              fontFamily: "'Source Han Sans CN', sans-serif",
              color: "#333",
            }}
          >
            Delta X 迭代未来是一家关注<span className="text-[#FF8706]">中国年轻人原生创新</span>和<span className="text-[#FF8706]">PMF商业闭环</span>的早期孵化器，聚焦AI应用落地；<br />
            孵化器立足杭州、辐射全国，致力于推动这片土地上最聪明的头脑开启一场迭代式创业，以更市场化的力量建设务实创新的创业生态。
          </div>
        </div>

        {/* 5. "我们能为你提供什么"文本框 */}
        <div
          className="absolute bg-white border border-gray-300 shadow-lg rounded-[25px]"
          style={{
            width: "820px",
            height: "260px",
            left: "0",
            top: "1220px",
            boxShadow: "4px 0px 4px rgba(0,0,0,0.25), 0px 4px 4px rgba(0,0,0,0.25)",
          }}
        >
          {/* 标题 */}
          <div
            className="absolute font-bold text-[22px]"
            style={{
              left: "30px",
              top: "20px",
            }}
          >
            我们能为你提供什么
          </div>

          {/* 蓝色渐变横线 */}
          <div
            className="absolute rounded-[25px]"
            style={{
              width: "190px",
              height: "4px",
              left: "30px",
              top: "55px",
              background: "linear-gradient(90deg, #0071EF 0%, #149BFF 100%)",
            }}
          />

          {/* 渐变文本 */}
          <div
            className="absolute text-[17px] leading-[30px] font-bold"
            style={{
              width: "760px",
              left: "30px",
              top: "75px",
              fontFamily: "'Source Han Sans CN', sans-serif",
            }}
          >
            <span className="bg-gradient-to-r from-[#FF8706] to-[#FFCA0B] bg-clip-text text-transparent">资本支持：</span>
            <span className="text-black">直投双币基金与VC伙伴计划</span><br />
            <span className="bg-gradient-to-r from-[#FF8706] to-[#FFCA0B] bg-clip-text text-transparent">产业生态：</span>
            <span className="text-black">链接大厂生态，帮助年轻创业者拿到第一笔订单</span><br />
            <span className="bg-gradient-to-r from-[#FF8706] to-[#FFCA0B] bg-clip-text text-transparent">资源支持：</span>
            <span className="text-black">算力与技术基建、媒体与品牌曝光、团建组建与招募、运营与落地服务</span><br />
            <span className="bg-gradient-to-r from-[#FF8706] to-[#FFCA0B] bg-clip-text text-transparent">创业兜底计划：</span>
            <span className="text-black">帮助完成人才与企业伙伴的链接</span><br />
            <span className="bg-gradient-to-r from-[#FF8706] to-[#FFCA0B] bg-clip-text text-transparent">活动赋能：</span>
            <span className="text-black">定期举办各类主题活动，连接技术、资本与创意</span>
          </div>
        </div>

        {/* 6. 右侧“加入生态社区” */}
        <div
          className="absolute rounded-[25px] overflow-hidden"
          style={{
            width: "260px",
            height: "755px",
            left: "840px",
            top: "730px",
          }}
        >
          {/* ✅ 白色背景层 */}
          <div
            className="absolute inset-0 bg-white rounded-[25px] z-0"
          />

          {/* 背景渐变图 */}
          <Image
            src="/innovation/delta_x/community_bg.png"
            alt="社区背景"
            fill
            className="object-cover relative z-10" // ✅ 提升层级，覆盖白色背景
          />

          {/* 标题 */}
          <div
            className="absolute font-bold text-[22px] text-center w-full z-20" // ✅ 确保标题在最上层
            style={{
              top: "50px",
            }}
          >
            加入生态社区
          </div>

          {/* 蓝色渐变横线 */}
          <div
            className="absolute rounded-[25px] left-1/2 -translate-x-1/2 z-20"
            style={{
              width: "140px",
              height: "4px",
              top: "80px",
              background: "linear-gradient(90deg, #0071EF 0%, #149BFF 100%)",
            }}
          />

          {/* 二维码 1 */}
          <div
            className="absolute z-20"
            style={{
              width: "180px",
              height: "180px",
              left: "50%",
              transform: "translateX(-50%)",
              top: "120px",
            }}
          >
            <Image
              src="/innovation/delta_x/QRcode1.svg"
              alt="二维码1"
              fill
              className="object-contain"
            />
          </div>

          {/* 二维码 2 */}
          <div
            className="absolute z-20"
            style={{
              width: "180px",
              height: "180px",
              left: "50%",
              transform: "translateX(-50%)",
              top: "350px",
            }}
          >
            <Image
              src="/innovation/delta_x/QRcode2.svg"
              alt="二维码2"
              fill
              className="object-contain"
            />
          </div>

          {/* 使用说明书按钮 */}
          <Link
            href="https://ucns4q7cn89b.feishu.cn/wiki/MSMDwy1mhirIJCkiICrc0GSSnyd?from=from_parent_docx"
            className="absolute bg-black rounded-[15px] flex items-center justify-center text-white z-20"
            style={{
              width: "210px",
              height: "90px",
              left: "25px",
              top: "590px",
            }}
          >
            <Image
              src="/innovation/delta_x/button_instruction.svg"
              alt="使用说明书"
              fill
              className="object-contain"
            />
          </Link>
        </div>

        {/* 7. 底部 Footer Slogan*/}
        <div
          className="absolute"
          style={{
            width: "1100px",
            height: "250px",
            left: "0",
            top: "1510px",
          }}
        >
          <Image
            src="/innovation/delta_x/footer.svg"
            alt="Be the change. Be the Delta X."
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}