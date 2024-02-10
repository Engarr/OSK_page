import React from 'react';

const Map = () => {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.416381572838!2d22.00526157683165!3d50.04103081675809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c4f4b3fe3e235%3A0x1adce4e1617c9292!2sNEOCAR!5e0!3m2!1spl!2spl!4v1707397004484!5m2!1spl!2spl'
      width='600'
      height='450'
      title='lokalizacja firmy NEOCAR'
      style={{ border: '0', width: '100%', height: '100%' }}
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'></iframe>
  );
};

export default Map;
