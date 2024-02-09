import styled from "styled-components";
import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";

import { SuspenseContainer } from "@/components/Layouts";

const StyledHome = styled.div`
  nav {
    width: min(120rem, 100%);
    margin: 0 auto;
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    text-transform: capitalize;
    padding: 1.5rem 3rem;
  }
`;

const HomePage: React.FC = () => {
  return (
    <SuspenseContainer>
      <StyledHome>
        <nav>
          <ul>
            <Link to={PATHS.login_page}>
              <li>login</li>
            </Link>
            <Link to={PATHS.register_page}>
              <li>register</li>
            </Link>
            <Link to={PATHS.forgot_password_page}>
              <li>forgot password</li>
            </Link>
            <Link to={PATHS.confirm_email_page}>
              <li>confirm email</li>
            </Link>
            <Link to={PATHS.update_password_page}>
              <li>update</li>
            </Link>
          </ul>
        </nav>
      </StyledHome>
    </SuspenseContainer>
  );
};

export default HomePage;
