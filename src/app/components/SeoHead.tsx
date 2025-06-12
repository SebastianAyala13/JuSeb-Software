import Head from 'next/head';

interface SeoHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export default function SeoHead({ title, description, canonical, schema }: SeoHeadProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
        {/* Datos estructurados Schema.org */}
        {schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        )}
      </Head>
    </>
  );
}
