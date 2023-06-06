import { FC } from "react";
import { StyledHomeLogo } from "./Style";
import Link from "next/link";

const HomeLogo: FC = () => {
  return (
    <Link legacyBehavior href="/" passHref>
      <StyledHomeLogo aria-label="Owais Ansari Site logo" translate="no">
        &lt;Owais/&gt;
      </StyledHomeLogo>
    </Link>
  );
};

export default HomeLogo;
