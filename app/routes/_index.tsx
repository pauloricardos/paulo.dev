import type { MetaFunction } from '@vercel/remix';
import {
  Skills,
  AboutMe,
  Articles,
  Experiences,
  Introduction,
  Projects,
} from '~/domains';
import { Header, Footer } from '~/components';

export const meta: MetaFunction = () => {
  return [
    { title: 'Paulo Ricardo | Full Stack Engineer based on Brazil' },
    { content: 'Full Stack Engineer' },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <main className="h-screen">
        <article>
          <Introduction />
          <AboutMe />
          <Skills />
          <Experiences />
          <Projects />
          <Articles />
        </article>
        <Footer />
      </main>
    </>
  );
}
