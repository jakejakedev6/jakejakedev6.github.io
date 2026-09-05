type ProfileLink = {
  name: string;
  url: string;
};

type LinkItemProps = {
  link: ProfileLink;
};

const links: ProfileLink[] = [
  { name: 'GitHub', url: 'https://github.com/jakejakedev6' },
  { name: 'note', url: 'https://note.com/jakejakedev6' },
  { name: 'X', url: 'https://x.com/Jakejake2746' },
];

function LinkItem({ link }: LinkItemProps) {
  return (
    <li>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${link.name}（新しいタブで開きます）`}
      >
        <span>{link.name}</span>
        <span aria-hidden="true">↗</span>
      </a>
    </li>
  );
}

function Links() {
  return (
    <section className="section" aria-labelledby="links-title">
      <h2 id="links-title">Links</h2>
      <ul className="link-list">
        {links.map((link) => (
          <LinkItem key={link.name} link={link} />
        ))}
      </ul>
    </section>
  );
}

export default Links;
