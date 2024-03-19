import React, { useEffect } from "react";
import "../css/Member.css";
import { getMembers, Member } from "../microCMS/apiClient";

import { useParams } from "react-router-dom";
import MembersList from "./MembersList";


export const MemberDetail: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const [member, setMember] = React.useState<Member | null>(null);
  const [members, setMembers] = React.useState<Member[]>([]);
  const [youtubeList, setYouTubeList] = React.useState<string[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await getMembers();
      if (response != null) {
        setMembers(response);
        const detailMember = response.find((m) => m.memberId === memberId);
        setMember(detailMember || null);
      }

      if (member?.youtubeList != null) {
        setYouTubeList(member.youtubeList.map((v) => v.link));
      }
    };
    void fetchMembers();
  }, [member?.memberId, member?.youtubeList, memberId]);

  if (members.length === 0) return <div>Loading...</div>;

  return (
    <>
      <h1>{member?.name}</h1>
      <h2>{member?.role}</h2>
      <img
        src={member?.icon?.url}
        alt={member?.name}
        className="member-datail-img"
      />
      <pre className="member-datail-description">
        {member?.descriptionDetail}
      </pre>
      {memberId === "2" && (
        <div className="member-detail-youtube">
          {youtubeList.map((v, index) => (
            <iframe
              key={index}
              width="400"
              height="230"
              src={v}
              title={v}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ))}
        </div>
      )}
      {member?.links?.map((v, index) => (
        <>
          <a key={index} href={v.link} className="member-detail-link">
          </a>
          <br />
        </>
      ))}
      <MembersList />
    </>
  );
};

const getDomain = (url: string) => {
  const domain = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (domain != null && domain.length > 2 && domain[2].length > 0) {
    return domain[2];
  }
  return url;
};


export default MemberDetail;
