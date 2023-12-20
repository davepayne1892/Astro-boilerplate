import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              className="mr-1 h-10 w-10 stroke-cyan-600"
              src="assets\images\avataaars.svg"
              alt="Avatar image"
              loading="lazy"
            />
          }
          name="David Payne"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blog</NavMenuItem>
        <NavMenuItem href="https://github.com/davepayne1892">
          GitHub
        </NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/david-payne-9755a390">
          LinkedIn
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
