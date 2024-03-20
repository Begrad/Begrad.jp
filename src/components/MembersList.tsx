import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Member.css";
import { getMembers, Member } from "../microCMS/apiClient";

export const MembersList: React.FC = () => {
  const [members, setMembers] = React.useState<Member[]>([]);

  useEffect(() => {
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
    <section id="members" className="members">
      <h2>MEMBERS</h2>
      <div className="members-list">
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
              <Link to={`/members/${member.memberId}`}>詳細</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembersList;
