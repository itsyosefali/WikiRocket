import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '@mui/material';

type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <Typography variant="h5" component="h2" className="text-xl font-bold underline">
        <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank">
          {result.title}
        </Link>
      </Typography>
      <Typography variant="body1">{result.extract}</Typography>
    </div>
  );

  
  const content = result?.thumbnail?.source ? (
    <article className="m-4 max-w-lg">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          <Image
            src={result.thumbnail.source}
            alt={result.title}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            loading="lazy"
          />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg">
      {itemTextCol}
    </article>
  );

  return content;
}
