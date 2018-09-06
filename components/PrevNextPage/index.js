import Link from 'next/link';
import { regUrl } from "../../until";

const PrevNextPage = ({ dataSource = {} }) => {
  const { url = '', lastIdData = [], nextIdData = [] } = dataSource;
  return (
    <div>
      {
      url && regUrl.test(url)
      && (
      <Link href={url}>
        <a>
          参考url：
          {url}
        </a>
      </Link>
      )
    }
      {
      lastIdData.map(v => (
        <div key={v.id}>
          <Link as={`/p/${v.id}`} href={`/p?id=${v.id}`}>
            <a>
              上一篇：
              {v.title}
            </a>
          </Link>
        </div>
      ))
    }
      {
      nextIdData.map(v => (
        <div key={v.id}>
          <Link as={`/p/${v.id}`} href={`/p?id=${v.id}`}>
            <a>
              下一篇：
              {v.title}
            </a>
          </Link>
        </div>
      ))
    }
    </div>
  );
};
export default PrevNextPage;
