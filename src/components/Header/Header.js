import Link from 'next/link'; // Allows us to link different pages in the website or different sections on the same page
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiGitMerge } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <DiGitMerge size="3rem" /><Span>Yash Randive</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Timeline</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#exp">
          <NavLink>Experiences</NavLink>
        </Link>
      </li>

    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/yashrandive/data_science_projectshttps://github.com/yashrandive/data_science_projects">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/yash-randive-3379a5156/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
