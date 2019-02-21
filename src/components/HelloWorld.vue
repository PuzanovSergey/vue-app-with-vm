<template>
  <div class="hello">
    <!-- <vm-button
      loading
      primary
      raised
      icon="add"
      @click="onClick"
    >Button</vm-button>
    <vm-button
      primary
      raised
      icon="add"
      @click="onClick(true)"
    >Show modal</vm-button>
    <vm-checkbox>sdfa</vm-checkbox>
    <vm-icon>add</vm-icon>
    <vm-input
      label="label"
      description="description"
      placeholder="placeholder"
    ></vm-input>

    <vm-divider style="margin-bottom: 16px" />
    <vm-card title="Карта">
      <div>sdfasdf</div>
    </vm-card>

    <vm-modal v-if="showModal">
      <button @click="onClick(false)">Close</button>
    </vm-modal>

    <vm-menu
      close-on-click
    >
      <button
        slot="trigger"
      >Меню</button>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </vm-menu> -->

    <!-- <vm-list>
      <vm-list-item>asfasf</vm-list-item>
    </vm-list> -->

    <!-- <vm-switch>sdf</vm-switch> -->
    <!-- <vm-textarea
      rows="2"
      placeholder="placeholder"
    ></vm-textarea> -->
    <vm-card>
      <div>div 1</div>
      <vm-button primary raised>Button 1</vm-button>
      <div>div 2</div>
      <vm-divider></vm-divider>
      <vm-input placeholder="afd"></vm-input>
      <vm-icon>add</vm-icon>
      <vm-input>sdfas</vm-input>
    </vm-card>
    <vm-button>Button 2</vm-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  showModal: boolean = false;

  onClick(value) {
    this.showModal = value;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .hello {
//   display: flex;
//   flex-direction: column;
// }

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
