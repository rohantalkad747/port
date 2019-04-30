<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          © 2019 Rohan Talkad
        </p>
        <p>
          <a class="icon"
            v-for="item in social"
            :href="item.link"
            target="_blank"
            rel="noopener">
            <b-icon :icon="item.icon"></b-icon>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'copyright',
  data() {
    return {
      social: [
        {
          icon: 'linkedin',
          link: 'https://www.linkedin.com/in/rohan-talkad-85aa77158/',
        },
        {
          icon: 'twitter',
          link: '#',
        },
        {
          icon: 'github',
          link: 'https://github.com/rohantalkad747',
        },
      ],
    };
  },
};
</script>

