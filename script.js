toggleNav = () => {
    const outergrid = document.querySelector('.outer-grid');
    console.log(outergrid.classList);
    outergrid.classList.toggle('outer-grid-expanded');
    const nav = document.querySelector('nav');
    nav.classList.toggle('hide-nav');
}