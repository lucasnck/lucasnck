import * as React from 'react';
import Header from './header/header';
import { Wrapper } from './wrapper/wrapper';
import Footer from './footer/footer';

export interface ILayoutProps {
}

export const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <main>
      <Header />
      <Wrapper>
        {props.children}
      </Wrapper>
      <Footer />
    </main>
  );
}
