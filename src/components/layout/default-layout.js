import PropTypes from 'prop-types';
import Meta from '../abstact/meta';
import Title from '../abstact/title';
import Header from './header';

export default function DefaultLayout({ title, children }) {
  return (
    <>
      <Meta />
      <Title title={title} />

      <Header />

      <main className="p-6 max-w-7xl mx-auto">
        {children}
      </main>
    </>
  );
}

DefaultLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
