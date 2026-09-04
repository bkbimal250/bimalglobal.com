type PagePlaceholderProps = {
  title: string;
};

export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <main>
      <h1>{title}</h1>
      <p>This page is ready for its content module.</p>
    </main>
  );
}