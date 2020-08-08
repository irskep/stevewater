<template>
  <main id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link :to="`/amp/${Date.now()}`">Amp</router-link>
      <router-link :to="`/guitarpedal/${Date.now()}`">Guitar Pedal</router-link>
    </nav>
    <router-view />
  </main>
</template>

<style lang="scss">
@font-face {
  font-family: "Cooper Hewitt";
  font-weight: normal;
  src: url("/CooperHewitt-Book.woff");
}
@font-face {
  font-family: "Cooper Hewitt Medium";
  src: url("/CooperHewitt-Medium.woff");
}
@font-face {
  font-family: "Cooper Hewitt Heavy";
  src: url("/CooperHewitt-Heavy.woff");
  font-weight: bolder;
}

/* layout */

html {
  font-family: "Cooper Hewitt", sans-serif;
  font-size: 1.2rem;
  line-height: 1.4em;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
}

main > nav {
  display: flex;
  & > * {
    margin-right: 1rem;
  }
}

footer {
  padding-top: 4rem;
  padding-bottom: 4rem;
  clear: both;
}

/* styles */

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.5em;
}

h1,
h3,
h5 {
  font-family: "Cooper Hewitt Medium";
}

h1,
h2 {
  font-size: 2rem;
}
h3,
h4 {
  font-size: 1.5rem;
}
h5,
h6 {
  font-size: 1.2rem;
}

p {
  margin-bottom: 1rem;
}

strong {
  font-family: "Cooper Hewitt Medium";
}
</style>
