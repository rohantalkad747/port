<template>
  <section id="about" class="section">
    <div class="container has-text-centered">
      <div class="image avatar">
        <img src="../assets/img/Talkad_Rohan.jpg">
      </div>
      <h2 class="title is-2">About</h2>
      <separator></separator>
      <div class="about-text block">
        <p>I'm currently a third-year student at York University majoring in Computer Science.</p>
        <p> I'm particularly fond of developing web applications and love learning about new frameworks and libraries. </p>
        <p>I have a strong foundation in computer science and am highly interested in data structures and algorithms.</p>
      </div>
      <div class="block">
        <a class="button is-dark"
          href="https://docdro.id/Zys2GLE"
          target="_blank"
          rel="noopener">
          <span>Resume</span>
          <b-icon icon="file-text-o" size="is-small" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {};
  },
  mounted() {
    sr.reveal('#about .block', 200);
  },
};
</script>

<style lang="scss">
  @import '~vars';

  .avatar {
    height: 200px;
    width: 200px;
    margin: 1rem auto;

    img {
      border-radius: 200px;
      border: 3px solid $secondary;
    }
  }

  .about-text {
    max-width: $tablet;
    margin: auto;
  }
</style>
