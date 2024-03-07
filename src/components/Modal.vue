<template>
        <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
            <img  :src= "require(`../views/Photos/${filename}`)" />
              
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
             {{ footer }}
              <button class="modal-default-button" @click="$emit('close')">
                <strong>Cancel</strong>
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>


<script lang="ts">

export default {
  name: 'Modal',
  props: [
    "footer", "filename"
  ]
}


</script>
<style scoped>
#app {
  padding: 1rem;
}
img{
    max-height: 38vh;
    
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background: linear-gradient(45deg,#09afff,#ccff00);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  /* font-family: Helvetica, Arial, sans-serif; */
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-header{
    display: flex;
    justify-content: center;
}
.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
  background-color: rgb(24, 221, 24);
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  box-shadow: 0 1px 10px 0px rgb(0 0 0 / 15%), 0 2px 15px 0px rgb(0 0 0 / 10%);
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-active,
.modal-leave-active {
  transition: opacity 4s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

</style>