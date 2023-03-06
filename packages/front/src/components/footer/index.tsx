import React from 'react';
import Container from '@/components/container';
import Logo from '@/images/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className=" bg-slate-400 py-4">
        <Container className="flex flex-col md:flex-row gap-4">
          <div>
            <Logo />
          </div>
          <div></div>
        </Container>
      </div>
      <div className="bg-slate-700">
        <p className="m-0 text-center text-white text-sm p-4">
          &#169; All rights are reserved by Nintendo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
