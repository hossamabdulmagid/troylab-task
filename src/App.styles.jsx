import styled from 'styled-components';


export const RapperAppComponent = styled.div`
  @media only screen and (min-width: 992px) {
    .App-header {
      background-color: rgb(233, 235, 239);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      margin: 0 auto;
    }
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width: 1200px) {
    .App-header {
      background-color: rgb(233, 235, 239);
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: black;
      margin: 0 auto;
    }

  }


`;