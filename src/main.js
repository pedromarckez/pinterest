import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './style.css';
import printImages from './utils/printImages';
// import Swal from 'sweetalert2';


const app = document.querySelector('#app');


app.append(Header(), Home());

document.addEventListener("DOMContentLoaded", () => {
    printImages()
    
})