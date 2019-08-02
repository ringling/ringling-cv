<template>

  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" v-if="item">

          <div class="modal-header">
            <slot name="header">
              <h3>
                {{item.title}}
              </h3>
              <h4>
                {{item.subtitle}}
              </h4>
              <p>
                {{item.period}}
              </p>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <span v-if="item.full" v-html="item.full"></span>
              <span v-if="!item.full" v-html="item.summary"></span>          
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              &nbsp;
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>


</template>

<script>
export default {
  props: ['item']
}
</script>


<style>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .1);
  display: table;
  transition: opacity .2s ease-in;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .13);
  transition: all .3s ease;

}

.modal-header p {
  @apply text-xs text-gray-500;
}

.modal-header h3 {
  margin-top: 0;
  text-transform: uppercase;
  @apply text-gray-700 text-sm font-semibold;
}

.modal-header h4, button {
  text-transform: uppercase;
  @apply text-left mb-1 text-gray-600 text-xs font-semibold;
}

.modal-body {
  margin: 20px 0;
   @apply text-sm text-gray-500;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>