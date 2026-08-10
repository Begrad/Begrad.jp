import Link from 'next/link';

import styles from '../css/Member.module.css';
import { getMembers } from '../microCMS/apiClient';

const MembersList = async (): Promise<React.JSX.Element> => {
  const members = await getMembers();

  return (
    <section id="members" className={styles.members}>
      <h2>MEMBERS</h2>
      <div className={styles['members-list']}>
        {members.map((member) => (
          <div key={member.memberId} className={styles['member-item']}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={member.icon?.url} alt={member.name} className={styles['member-icon']} />
            <div className={styles['member-info']}>
              <h3>{member.name}</h3>
              {member.role && <p className={styles['member-role']}>{member.role}</p>}
              <pre>{member.description}</pre>
              <Link href={`/members/${member.memberId}`}>詳細</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembersList;
