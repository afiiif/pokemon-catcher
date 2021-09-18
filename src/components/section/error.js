import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Error({ message, button }) {
  return (
    <div className="flex h-96 my-12 md:my-24">
      <div className="m-auto">
        <div className="pokeball-gray scale-[180%] mx-auto m-16">
          <div /><div />
        </div>
        <div className="text-center">
          <p className="text-gray-600">{message}</p>
          <Link href={button.href || '/'}>
            <a className="inline-block btn btn-primary mt-6">
              {button.label}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
  button: PropTypes.object.isRequired,
};
