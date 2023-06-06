import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 75vh;
  background: rgb(15,1,18);
background: linear-gradient(90deg, rgba(15,1,18,1) 0%, rgba(37,6,54,1) 50%, rgba(60,10,89,1) 100%);
  padding-top: 8rem;
  padding-bottom: 8rem;
  display: flex;
  align-items: center;
  @keyframes lights {
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  
  30% { 
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  40% { 
    color: hsl(230, 100%, 95%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }
  
  70% {
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  100% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  
}

body {
  margin: 0;
  font: 100% / 1.5 Raleway, sans-serif;
  color: hsl(230, 100%, 95%);
  background: linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%));
  height: 100vh;
  display: flex;
}

h2 {
  margin: auto;
  f
  max-width: 50rem;
  font-size: 4rem;
  font-weight: 00;
  // animation: lights 5s 750ms linear infinite;
    animation: lights 5s 750ms linear infinite;
  transform-origin: center;
  transform: rotate(360deg);
}

  h1,
  p {
    
  }

  a {
    width: max-content;
  }

  .header {
    &__content {
      display: flex;
      flex-flow: column wrap;
    }

    &__greeting,
    &__name {
      display: block;
    }

    &__greeting {
      font-size: 2rem;
      margin-bottom: calc(-0.5rem - 0.4vw);
      color: var(--color-gray-800);
    }

    &__name {
      font-size: calc(1rem + 2vw);
      font-size: clamp(1rem, 8vw, 9rem);
      line-height: 1;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    &__intro {
      font-size: 2rem;
      font-weight: bold;
      color: var(--color-gray-800);
    }

    &__svg {
      display: block;
      width: 400px !important;
      height: 400px !important;
      
      
      
    }

    &__links {
      margin-top: 4rem;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: start;

      a {
        margin-bottom: 2rem;

        &:first-child {
          margin-right: 2rem;
        }
      }
    }
  }

  @media screen and (max-width: 481px) {
    .header {
       &__greeting {
      font-size: 2rem;
      margin-bottom: calc(-0.5rem - 0.4vw);
      color: var(--color-gray-800);
      // display: flex;
        
    }
     &__intro {
      font-size: 1.4rem;
      font-weight: bold;
      color: var(--color-gray-800);
    }
      &__content {
        flex: 3;
        text-align: center;
      }
      &__svg {
        flex: 2;
        display: block;
        justify-content: center;
        align-items: center;
        width: 300px !important;
        height: 300px!important ;
        margin:auto;
        // margin-left:25px;
        padding-top:10px;

      }
      &__links {
        
        margin:auto;
        margin-top:10px;
         padding-top:10px;

      }
    }
  }

  @media screen and (min-width: 769px) {
    min-height: 100vh;
    display: flex;
    padding: 0;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 0;
      padding-bottom: 0;
    }

    .header {
      &__content {
        flex: 3;
      }
      &__svg {
        flex: 2;
        display: block;
        width: 300px;
        height: 200px ;
      }
    }
  }
`;

export const MainPage = styled.main`
  margin-top: 5rem;
background: rgb(15,1,18);
background: linear-gradient(270deg, rgba(15,1,18,1) 0%, rgba(37,6,54,1) 50%, rgba(60,10,89,1) 100%);
  @media screen and (min-width: 481px) {
  }
`;

export const StyledSection = styled.section`

  padding-top: 2rem;
  padding-bottom: 2rem;
  scroll-margin-top: 8rem;

  .section {
    &__content {
      display: grid;
      grid-template-columns: 1fr;

      &-about {
        max-width: 46rem;

        button {
          margin-top: 2rem;
        }
      }

      &-skills {
      }
    }

    &__header {
      &-main {
        margin-bottom: 5.4rem;
        text-align: center;

        &-head {
          position: relative;
          width: max-content;
          margin: 0 auto 1rem;

          &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: -0.2rem;
            left: 0;
            right: 0;
            height: 0.1rem;
            width: 45%;
            margin-right: auto;
            margin-left: auto;
            background-color: red;
          }
        }

        p {
          font-size: 1.5rem;
          color: var(--color-gray-600);
          max-width: 70rem;
          margin-right: auto;
          margin-left: auto;
        }
      }
    }

    &__project {
      &-others {
        /* background-color: #f555; */
        max-width: 53rem;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  @media screen and (min-width: 481px) {
    .section {
      &__content {
      }
    }
  }

  @media screen and (min-width: 769px) {
    .section {
      &__content {
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
      }
      &__project {
        &-others {
          max-width: 85rem;
        }
      }
    }
  }
`;

export const StyledSubSection = styled.section`
  margin-bottom: 5rem;
  

  h3 {
    text-align: left;
    font-size: 2.1rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    opacity: 0.8;
  }
`;
