import styles from '../css/TomoMemoPages.module.css';

const APP_PRIVACY_TITLE = 'ともメモ プライバシーポリシー';
const INTRO = `本プライバシーポリシー（以下「本ポリシー」といいます）は、Begrad（以下「当方」といいます）が提供するともメモアプリ（以下「本アプリ」といいます）において、当方がユーザー情報をどのように取り扱うかを定めるものです。本ポリシーは、2026年3月24日に最終更新されました。`;

const SECTION1_TITLE = '第1条（適用範囲）';
const SECTION1_BODY = `1. 本ポリシーは、本アプリにおけるユーザー情報の取扱いに適用されます。
2. 本アプリの利用に際しては、本ポリシーに同意したものとみなします。`;

const SECTION2_TITLE = '第2条（取得する情報）';
const SECTION2_INTRO = `当方は、本アプリを通じて、主に以下の情報を取得・保存することがあります。`;
const SECTION2_LIST = [
  '・ユーザーが入力する「友達」に関する情報',
  '　- 氏名',
  '　- 電話番号',
  '　- 住所',
  '　- 誕生日',
  '　- SNSアカウント情報（プラットフォーム名・ユーザー名 等）',
  '　- プロフィール画像',
  '　- タグ情報',
  '　- カスタムフィールドにユーザーが任意で入力した情報',
  '　- 次回連絡予定日',
  '　- ヒストリーメモ（History Memo）',
];
const SECTION2_ITEM2 = `2. アカウント情報
メールアドレス、ユーザー識別子、認証に関するトークン等、アカウント登録およびログイン（認証基盤としてクラウドサービスを利用する場合があります）に伴い取得・保存される情報。
Google アカウントや Apple アカウントによるログインを別途提供する場合は、その開始時に取得する情報の範囲を本アプリ内または当方サイト等で明示します。`;
const SECTION2_ITEM3 = `3. 利用状況・ログ情報
・アプリのクラッシュ情報
・アプリのバージョン、OS のバージョンなどの技術情報
これらは主に不具合調査および品質改善のために利用されます。`;

const SECTION3_TITLE = '第3条（情報の取得方法）';
const SECTION3_BODY = `1. ユーザーが本アプリに手動で入力した情報は、端末内ストレージに保存されるほか、ログイン中は同期のため当方が利用するクラウド上のデータベース等に送信・保存される場合があります。
2. クラッシュログや利用状況に関する情報は、アプリ内に組み込まれた仕組み（クラッシュレポート等）を通じて、自動的に収集される場合があります。`;

const SECTION4_TITLE = '第4条（情報の利用目的）';
const SECTION4_INTRO = `当方は、取得した情報を、以下の目的のために利用します。`;
const SECTION4_LIST = [
  '1. 本アプリの提供・維持・運営のため',
  '2. 友達情報・タグ・カスタムフィールド・ヒストリーメモ等を管理し、ユーザーが人とのつながりを整理・記録する機能を提供するため',
  '3. ログイン機能利用時における、データのバックアップおよび複数端末間での同期のため',
  '4. 不具合の調査、トラブル対応、セキュリティ対策のため',
  '5. 本アプリの機能改善・品質向上のため（この場合、個人を特定できない形に加工された統計情報として利用することがあります。）',
  '6. ユーザーからの問い合わせに対応するため',
  '7. 法令に基づく対応のため',
];
const SECTION4_NOTE = '上記の目的を超えて情報を利用することはありません。';

const SECTION5_TITLE = '第5条（データの保存場所）';
const SECTION5_BODY1 = `1. 端末内の保存
ユーザーが入力したデータのうち、同期の対象とならないもの、または一時的に端末上に保持されるキャッシュ等は、ユーザーの端末内（例：ローカルストレージ）に保存されます。`;
const SECTION5_BODY2 = `2. クラウド（サーバー）上の保存
ログインしたユーザーの友だち情報等は、データのバックアップおよび複数端末間の同期のため、当方が契約するクラウドサービス（認証およびデータベースのホスティング等）上に保存されます。保存されたデータは、本ポリシーに定める目的の範囲でのみ利用されます。`;

const SECTION6_TITLE = '第6条（第三者提供）';
const SECTION6_BODY1 =
  '1. 当方は、以下の場合を除き、ユーザー情報を第三者に提供することはありません。';
const SECTION6_LIST = [
  '（1）ユーザー本人の同意がある場合',
  '（2）法令に基づき開示が求められた場合',
  '（3）個人を特定できない形式に統計処理した情報として提供する場合（サービス改善や利用状況の分析などのため）',
  '（4）広告の表示・配信・効果測定のため、広告配信事業者（例：Google LLC およびその関連会社）に対し、法令および各事業者のポリシーに従い必要な範囲で情報が提供・処理される場合',
];
const SECTION6_BODY2 =
  '2. 当方は、本条第1項各号に定める場合を除き、ユーザー情報を第三者に対価を得て売却・貸与することはありません。';

const SECTION7_TITLE = '第7条（外部サービスの利用）';
const SECTION7_BODY = `1. 当方は、本アプリの安定運用・品質向上を目的として、認証・データ同期用のクラウド基盤、クラッシュレポート、解析、広告配信（例：Google AdMob）等の外部サービスを利用する場合があります。
2. これらのサービスに提供される情報は、各サービスの提供に必要な範囲にとどめ、可能な限り個人を特定できない形式で取り扱われるよう努めます。
3. 外部サービスの利用にあたっては、当該事業者のプライバシーポリシー等もあわせてご確認ください。`;

const SECTION8_TITLE = '第8条（データの保管期間・削除）';
const SECTION8_BODY = `1. 当方は、利用目的の達成に必要な範囲でユーザー情報を保持します。
2. ユーザーは、本アプリ内の機能（例：「全データ削除」等）を利用することで、端末内および同期対象となっているサーバー上のデータを削除できる場合があります。削除の対象範囲・反映タイミングは、機能の仕様およびクラウド側の処理に依存します。
3. アカウント自体の削除や、サーバー上に残存するデータの消去を希望される場合は、本アプリ内のお問い合わせまたは当方が指定する連絡先までご連絡ください。
4. アプリのアンインストールにより、端末内に保存されたデータは原則として利用できなくなります。`;

const SECTION9_TITLE = '第9条（ユーザーの権利）';
const SECTION9_BODY = `ユーザーは、本アプリの利用を通じて以下の権利を有します。
1. 自分が登録したデータの閲覧・編集・削除（本アプリの機能の範囲内）
2. アプリのアンインストールによる利用停止
3. 個人情報の取扱いに関する開示・訂正・利用停止等の請求（法令の定める範囲内。手続きはお問い合わせ窓口にてご案内します）`;

const SECTION10_TITLE = '第10条（未成年の利用）';
const SECTION10_BODY =
  '未成年のユーザーが本アプリを利用する場合、保護者の同意を得たうえで利用するものとします。';

const SECTION11_TITLE = '第11条（本ポリシーの変更）';
const SECTION11_BODY = `1. 当方は、必要に応じて本ポリシーの内容を変更することがあります。
2. 本ポリシーを変更する場合、変更後の内容を本アプリ内への表示その他の方法で告知します。
3. 変更後も本アプリの利用を継続した場合、ユーザーは変更後の本ポリシーに同意したものとみなします。`;

const SECTION12_TITLE = '第12条（お問い合わせ窓口）';
const SECTION12_BODY = `本ポリシーに関するお問い合わせは、本アプリ内のお問い合わせ機能、または Begrad の公式サイト（https://begrad.jp）に掲示する連絡先までご連絡ください。`;

const TomoMemoPrivacy: React.FC = () => {
  return (
    <main className={styles['tomo-page']}>
      <h1>{APP_PRIVACY_TITLE}</h1>

      <p className={styles['tomo-policy-content']}>{INTRO}</p>

      <div className={styles['tomo-policy-section']}>
        <h2>{SECTION1_TITLE}</h2>
        <p className={styles['tomo-policy-content']}>{SECTION1_BODY}</p>
      </div>

      <div className={styles['tomo-policy-section']}>
        <h2>{SECTION2_TITLE}</h2>
        <p className={styles['tomo-policy-content']}>{SECTION2_INTRO}</p>
        <div className={styles['tomo-policy-content']}>
          {SECTION2_LIST.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
        <p className={styles['tomo-policy-content']} style={{ marginTop: '0.9rem' }}>
          {SECTION2_ITEM2}
        </p>
        <p className={styles['tomo-policy-content']}>{SECTION2_ITEM3}</p>
      </div>

      <div className={styles['tomo-policy-section']}>
        <h2>{SECTION3_TITLE}</h2>
        <p className={styles['tomo-policy-content']}>{SECTION3_BODY}</p>
      </div>

      <div className={styles['tomo-policy-section']}>
        <h2>{SECTION4_TITLE}</h2>
        <p className={styles['tomo-policy-content']}>{SECTION4_INTRO}</p>
        <div className={styles['tomo-policy-content']}>
          {SECTION4_LIST.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
        <p className={styles['tomo-policy-content']} style={{ marginTop: '0.9rem' }}>
          {SECTION4_NOTE}
        </p>
      </div>

      <div className={styles['tomo-policy-section']}>
        <h2>{SECTION5_TITLE}</h2>
        <p className={styles['tomo-policy-content']}>{SECTION5_BODY1}</p>
        <p className={styles['tomo-policy-content']} style={{ marginTop: '0.9rem' }}>
          {SECTION5_BODY2}
        </p>
      </div>

      <div className={styles['tomo-policy-section']}>
        <h2>{SECTION6_TITLE}</h2>
        <p className={styles['tomo-policy-content']}>{SECTION6_BODY1}</p>
        <div className={styles['tomo-policy-content']} style={{ marginTop: '0.9rem' }}>
          {SECTION6_LIST.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
        <p className={styles['tomo-policy-content']} style={{ marginTop: '0.9rem' }}>
          {SECTION6_BODY2}
        </p>
      </div>

      <div className={styles['tomo-policy-section']}>
        <h2>{SECTION7_TITLE}</h2>
        <p className={styles['tomo-policy-content']}>{SECTION7_BODY}</p>
      </div>

      <div className={styles['tomo-policy-section']}>
        <h2>{SECTION8_TITLE}</h2>
        <p className={styles['tomo-policy-content']}>{SECTION8_BODY}</p>
      </div>

      <div className={styles['tomo-policy-section']}>
        <h2>{SECTION9_TITLE}</h2>
        <p className={styles['tomo-policy-content']}>{SECTION9_BODY}</p>
      </div>

      <div className={styles['tomo-policy-section']}>
        <h2>{SECTION10_TITLE}</h2>
        <p className={styles['tomo-policy-content']}>{SECTION10_BODY}</p>
      </div>

      <div className={styles['tomo-policy-section']}>
        <h2>{SECTION11_TITLE}</h2>
        <p className={styles['tomo-policy-content']}>{SECTION11_BODY}</p>
      </div>

      <div className={styles['tomo-policy-section']}>
        <h2>{SECTION12_TITLE}</h2>
        <p className={styles['tomo-policy-content']}>{SECTION12_BODY}</p>
      </div>
    </main>
  );
};

export default TomoMemoPrivacy;
