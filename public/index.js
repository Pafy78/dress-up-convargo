/* global CONVARGO*/
'use strict';

(() => {
    const render = (actors) => {
        const fragment = document.createDocumentFragment();
        const div = document.createElement('div');
        div.className = "actors";
        const template = actors.map(actor => {
            return `
<div class="actor">
<span class="who">${actor.who} ${actor.type}</span>
<span class="amount">${actor.amount}€</span>
</div>
`;
        }).join('');

        div.innerHTML = template;
        fragment.appendChild(div);
        document.querySelector('#actors').innerHTML = '<h2>Compute result</h2>';
        document.querySelector('#actors').appendChild(fragment);
    };

    const button = document.querySelector('#compute');

    button.addEventListener('click', function onClick () {
        const trucker = CONVARGO.getTrucker();
        const distance = document.querySelector('.distance').value;
        const volume = document.querySelector('.volume').value;
        const option = document.querySelector('.option').checked;
        const actors = CONVARGO.payActors(trucker, distance, volume, option);

        render(actors);

        return;
    });
})();
