// ==============================
// Import
// ==============================
import { 
  createApp
} from "vue";
import "./main.css";

import App from "./App.vue";
import Icons from "./components/Icons.vue";

// ==============================
// Import
// ==============================
const app = createApp(App);
app.component('Icons', Icons);
app.mount("#app");
