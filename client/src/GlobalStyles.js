import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  $base-color: #e67e22;
}

* {
  box-sizing: border-box;
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
`
export default GlobalStyle



