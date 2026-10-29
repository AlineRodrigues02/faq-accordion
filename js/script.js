// selecionar todos os itens
const sessao = document.querySelectorAll('.faq-item') 


sessao.forEach(elem => {
    // botão  
    const btn = elem.querySelector('.faq-question')
    // respostas 
    const answer = elem.querySelector('.faq-answer')
    // icone 
    const icon = elem.querySelector('img')
    
    btn.addEventListener('click',()=>{
        // verificar  
        const close = btn.getAttribute('aria-expanded') === 'true'
        btn.setAttribute('aria-expanded', !close)

        answer.classList.toggle('hide')
        if(close){
            icon.src = 'assets/images/icon-minus.svg';
        }
        else{
            icon.src = 'assets/images/icon-plus.svg';
        
        }
    })

});