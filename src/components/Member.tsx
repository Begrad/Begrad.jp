import React from "react";
import "../css/Member.css"; 

const members = [
  {
    id: 1,
    name: "--- mr ---",
    description: "プログラマ、映像編集、ヒューマンビートボックス、DJ。",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1400873894957912065/miy4qjRw_400x400.jpg",
    link: "hhttps://MasujimaRyohei.jp  ", 
  },
  {
    id: 2,
    name: "ToMoKi",
    description:
      "ゲーム実況者(ホラゲ)兼クリエイター。現役介護福祉士。アイドルが好き。",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1222926260331933696/rgQUPPw8_400x400.jpg",
  },
  {
    id: 3,
    name: "リゼ・ベルトーネ",
    description:
      "ちゃんとPoppin'PartyとチームYとカレンチャンとブシロードに魂を売ったスクールアイドルの勇者。ラリーとギターやるウマ娘",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1658836753828945931/e2yIrojS_400x400.jpg",
  },
  {
    id: 4,
    name: "中崎",
    description: "隠居したい",
    imageUrl:
      "https://pbs.twimg.com/profile_images/818135510132531200/AHKqFifL_400x400.jpg",
  },
  {
    id: 5,
    name: "𝑳𝒐𝒗𝒆𝒐𝒏𝒍𝒚",
    description: " 𝐷𝐽⍣𝑘𝑒𝑦𝑏𝑜𝑎𝑟𝑑⍣𝑣𝑜𝑐𝑎𝑙⍣𝑠𝑜𝑛𝑔𝑤𝑟𝑖𝑡𝑖𝑛𝑔",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1473813297258725376/Kop92QNv_400x400.jpg",
  },
];

const Member: React.FC = () => {
  return (
    <section id="member" className="member">
      <h2>MEMBER</h2>
      <div className="member-list">
        {members.map((member) => (
          <div key={member.id} className="member-item">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="member-icon"
            />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.description}</p>
              {member.link && (
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  詳細
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Member;
