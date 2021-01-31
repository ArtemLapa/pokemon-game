import s from './style.module.css';

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
  const inlineStyles = {};

  if (urlBg !== undefined) {
    inlineStyles.background = `url(${urlBg})`;
  }
  if (colorBg !== undefined) {
    inlineStyles.background = colorBg;
  }

  return (
    <section className={s.root} id={id} style={inlineStyles}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{ title }</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            <p>{ descr }</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Layout;