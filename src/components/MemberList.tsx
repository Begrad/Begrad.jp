import React, { useEffect } from "react";
import "../css/Member.css";
import { getMembers, Member } from "../microCMS/apiClient";

export const MemberList: React.FC = () => {
  const [members, setMembers] = React.useState<Member[]>([]);

  useEffect(() => {
    console.log(process.env);
    const fetchMembers = async () => {
      const response = await getMembers();
      if (response != null) {
        setMembers(response);
      }
    };
    void fetchMembers();
  }, []);

  if (members.length === 0) return <div>Loading...</div>;

  return (
    <section id="member" className="member">
      <h2>MEMBER</h2>
      <div className="member-list">
        {members.map((member) => (
          <div key={member.memberId} className="member-item">
            <img
              src={member.icon?.url}
              alt={member.name}
              className="member-icon"
            />
            <div className="member-info">
              <h3>{member.name}</h3>
              {member.role && <p className="member-role">{member.role}</p>}
              <pre>{member.description}</pre>
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

export default MemberList;
