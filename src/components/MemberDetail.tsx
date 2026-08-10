import styles from '../css/Member.module.css';
import { getMemberById } from '../microCMS/apiClient';
import MembersList from './MembersList';
import { getDomain, getIcon } from './memberSocialIcon';

type Props = {
  memberId: string;
};

const MemberDetail = async ({ memberId }: Props): Promise<React.JSX.Element> => {
  const member = await getMemberById(memberId);
  const youtubeList = member?.youtubeList?.map((v) => v.link) ?? [];

  return (
    <>
      <h1>{member?.name}</h1>
      <h2>{member?.role}</h2>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={member?.icon?.url} alt={member?.name} className={styles['member-datail-img']} />
      <pre className={styles['member-datail-description']}>{member?.descriptionDetail}</pre>
      {member?.youtubeList !== null && (
        <div className={styles['member-detail-youtube']}>
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
          <a key={index} href={v.link} className={styles['member-detail-link']}>
            {getIcon(getDomain(v.link))}
          </a>
          <br />
        </>
      ))}
      <MembersList />
    </>
  );
};

export default MemberDetail;
