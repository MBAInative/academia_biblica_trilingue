import { useEffect } from 'react';

// Pone el título de la pestaña y las etiquetas para buscadores de cada página.
// Sustituye a react-helmet, que con React 18 no llegaba a aplicar nada.
const setMeta = (name, content) => {
  let tag = document.head.querySelector(`meta[name="${name}"]`);
  if (!content) {
    if (tag && tag.dataset.pageMeta === 'true') tag.remove();
    return;
  }
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    tag.dataset.pageMeta = 'true';
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const PageMeta = ({ title, description, robots }) => {
  useEffect(() => {
    if (title) document.title = title;
    setMeta('description', description);
    setMeta('robots', robots);
  }, [title, description, robots]);

  return null;
};

export default PageMeta;
