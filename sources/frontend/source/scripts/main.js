import $ from 'jquery';
import Header from './components/Header';
import Footer from './components/Footer';


class Main {
    constructor() {
        new Header();
        new Footer();
    }
    
}

$(window).on('load', function() {
    new Main();
})
