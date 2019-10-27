<script>
  // This component demonstrates simple data setting and getting with firebase using a single document value "button_clicked" which can be true or false. Before the component loads, it gets the current value of "button_clicked" from firebase. Then svelte uses this to reactively change the color of a svelma toast. Buttons control toggling the toast and changing the value and writing it to firebase. Babel polyfill is required to use async/await syntax across all browsers.

  // Component imports
  import 'babel-polyfill';
  import { onMount } from 'svelte';
  import { Toast } from 'svelma';
  import TransitionWrapper from '../components/TransitionWrapper.svelte';
  import { db } from '../firebase.js';

  // Component variables
  let name = 'you'; // simple template variable
  let getIsLoading = false; // toggle bulma class while waiting for firebase response
  let setIsLoading = false;
  let button_clicked; // variable to store firebase value in component
  // The toast type is a reactive svelte variable meaning it will automatically update its own value based on button_clicked
  $: toast_type = button_clicked ? 'is-white' : 'is-black';

  // Before the component displays query firebase for the last known value of button_clicked and update the the button_clicked variable
  onMount(async () => {
    let resp = await db.collection('test').doc('test-user').get();
    button_clicked = resp.data().button_clicked;
  });

  // Change the value in the firebase on button click
  async function set() {
    try {
      setIsLoading = true;
      button_clicked = !button_clicked;
      let resp = await db.collection('test').doc('test-user').set({ 'button_clicked': button_clicked });
      setIsLoading = false;
      Toast.create({ message: 'Value updated!', type: 'is-success', position: 'is-top-right' });

    } catch (error) {
      Toast.create({ message: error, type: 'is-danger', position: 'is-top-right' });
    }
  }
  // Get the value from firebase
  async function get() {
    try {
      getIsLoading = true;
      let resp = await db.collection('test').doc('test-user').get();
      getIsLoading = false;
      button_clicked = resp.data().button_clicked;
      Toast.create({ message: 'Clicked is: ' + button_clicked, type: toast_type, position: 'is-top-right' });

    } catch (error) {
      Toast.create({ message: error, type: 'is-danger', position: 'is-top-right' });
    }
  }

</script>

<style>
</style>

<TransitionWrapper>
  <section>
    <div class="container">
      <h1 class="title">Hello {name}!</h1>
      <h2 class="subtitle">This is a firebase demo</h2>

      <div class="columns">
        <div class="column is-half has-text-centered">
          <p>Click the left button to toggle a value in firebase and the right button to retrieve the value from
            firebase.
          </p>
          <div class="buttons">
            <button class="{setIsLoading ? 'button is-warning is-loading' : 'button is-primary'}" on:click={set}>
              <span class="icon">
                <i class="fas fa-pen"></i>
              </span>
              <span>Store in Firebase</span>
            </button>
            <button class="{getIsLoading ? 'button is-warning is-loading' : 'button is-primary'}" on:click={get}>
              <span class="icon">
                <i class="fas fa-search"></i>
              </span>
              <span>Get from Firebase</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</TransitionWrapper>