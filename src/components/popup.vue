<template>
  <section>
    <div class="popup">popup</div>
  </section>
</template>

<style lang="scss" scoped>
section {
  position: fixed;
  bottom: 10px;
  right: 10px;
}

.popup {
  backdrop-filter: blur(4px) saturate(0%);
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.4);
  // padding: 200px;
  // border-radius: 4px;
  text-shadow: 0 0 4px 2px black;
  width: 340px;
  padding: 10px;
}
</style>
