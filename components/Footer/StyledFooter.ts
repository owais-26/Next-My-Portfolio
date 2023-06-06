import styled from "styled-components";

export const StyledFooter = styled.footer`

  background-color: var(--color-black-200);
  background:#29083c;
;

  background-image: url("/static/images/footer.svg");
  background-repeat: no-repeat;
  background-position: top -2rem center;
  background-size: cover;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-top: 3rem;

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
  }

  section {
    &:first-child {
      margin-top: -0.7rem;
      margin-bottom: 1.8rem;

      p {
        padding-left: 0.5rem;
      }
    }
    &:last-child {
    }
  }

  a {
    opacity: 0.8;

    &:hover {
      color: var(--color-red-100);
      opacity: 1;
    }
  }

  .footer {
    &__socials {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      li {
        margin-right: 2rem;
        font-size: 2.2rem;
        font-weight: bold;
      }
    }

    &__contact {
      font-weight: bold;
      &-gmail {
        a {
          display: flex;
          align-items: center;
          font-weight: bold;
          font-size: 1.7rem;

          figure {
            margin-top: 0.4rem;
            margin-right: 0.3rem;
            font-weight: bold;
          }
        }
      }
    }
  }

  @media screen and (min-width: 588px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;
