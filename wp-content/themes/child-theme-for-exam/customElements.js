class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwoSidedMarket extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<a href="shop" class="btn">Browse our kits</a>&nbsp;<a href="merchants" class="btn">Sell kits with us</a>`;
    }
}

customElements.define("x-twosides", TwoSidedMarket);