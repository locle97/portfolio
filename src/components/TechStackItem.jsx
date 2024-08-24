function TechStackItem({ techCode }) {
  const techMapping = {
    'react': {
      logo: 'images/logo/react.svg',
      ref: 'https://reactjs.org/',
      alt: 'React'
    },
    'html': {
      logo: 'images/logo/html.svg',
      ref: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      alt: 'HTML'
    },
    'css': {
      logo: 'images/logo/css.svg',
      ref: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      alt: 'CSS'
    },
    'javascript': {
      logo: 'images/logo/javascript.svg',
      ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      alt: 'Javascript'
    },
    'tailwindcss': {
      logo: 'images/logo/tailwindcss.svg',
      ref: 'https://tailwindcss.com/',
      alt: 'Tailwind CSS'
    },
    'angular': {
      logo: 'images/logo/angular.svg',
      ref: 'https://angular.io/',
      alt: 'Angular'
    },
    'azure': {
      logo: 'images/logo/azure.svg',
      ref: 'https://azure.microsoft.com/en-us/',
      alt: 'Azure'
    },
    'cSharp': {
      logo: 'images/logo/c-sharp.svg',
      ref: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
      alt: 'C#'
    },
    'docker': {
      logo: 'images/logo/docker.svg',
      ref: 'https://docs.docker.com/',
      alt: 'Docker'
    },
    'elasticsearch': {
      logo: 'images/logo/elasticsearch.svg',
      ref: 'https://www.elastic.co/',
      alt: 'Elasticsearch'
    },
    'python': {
      logo: 'images/logo/python.svg',
      ref: 'https://www.python.org/',
      alt: 'Python'
    },
    'sql': {
      logo: 'images/logo/sql.svg',
      ref: 'https://www.microsoft.com/en-us/sql-server',
      alt: 'SQL Server'
    }
  }

  if (!techMapping[techCode])
    return null;

  return (
    <a href={techMapping[techCode].ref} target="_blank" rel="noreferrer"
      className="flex flex-col justify-center items-center text-center hover:scale-125 transistion-all delay-150 duration-300">
      <img
        className="w-10 h-10"
        src={techMapping[techCode].logo}
        alt={techMapping[techCode].alt}
      />
      <p>{techMapping[techCode].alt}</p>
    </a>
  );
};

export default TechStackItem;
